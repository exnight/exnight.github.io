import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { transform } from '@astrojs/compiler'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { Window, type Document as HappyDocument, type Element as HappyElement } from 'happy-dom'
import { parse, type AtRule, type Node, type Root } from 'postcss'
import { compile } from 'tailwindcss'
import { afterEach } from 'vitest'

// Astro components render only in the Node environment. Parse their HTML in
// separate happy-dom windows; close the windows after each test.
const windows: Window[] = []
afterEach(async () => {
  await Promise.all(windows.splice(0).map((window) => window.happyDOM.close()))
})

export function createWindow() {
  const window = new Window({
    settings: {
      disableJavaScriptEvaluation: true,
      disableJavaScriptFileLoading: true,
      disableCSSFileLoading: true,
      handleDisabledFileLoadingAsSuccess: true,
    },
  })
  windows.push(window)
  return window
}

/** Parse a fragment into <body>, or a full page (with <html>) into the document. */
export function parseHTML(html: string) {
  const { document } = createWindow()
  if (/<html[\s>]/i.test(html)) document.write(html)
  else document.body.innerHTML = html
  return document
}

type Container = Awaited<ReturnType<typeof AstroContainer.create>>
type RenderArgs = Parameters<Container['renderToString']>
let container: Container | undefined

export async function renderHTML(...[component, options]: RenderArgs) {
  container ??= await AstroContainer.create()
  return container.renderToString(component, options)
}

export async function render(...args: RenderArgs) {
  return parseHTML(await renderHTML(...args))
}

/** Nearest-first @-rule ancestors (e.g. @media, @layer) of a postcss node. */
export function atRuleAncestors(node: Node) {
  const found: AtRule[] = []
  for (let parent: Node | undefined = node.parent; parent; parent = parent.parent)
    if (parent.type === 'atrule') found.push(parent as AtRule)
  return found
}

export function classesIn(root: HappyDocument | HappyElement) {
  return [...new Set([...root.querySelectorAll('[class]')].flatMap((el) => [...el.classList]))]
}

/** Compile src/styles/global.css (plus optional CSS) for the given class candidates. */
export async function compileCSS(candidates: string[], extraCSS = '') {
  const require = createRequire(import.meta.url)
  const loaded: string[] = []
  const compiler = await compile(readFileSync('src/styles/global.css', 'utf8') + extraCSS, {
    base: resolve('src/styles'),
    loadStylesheet: async (id, base) => {
      const path = id.startsWith('.')
        ? resolve(base, id)
        : require.resolve(id === 'tailwindcss' ? 'tailwindcss/index.css' : id)
      loaded.push(path)
      return { base: dirname(path), content: readFileSync(path, 'utf8'), path }
    },
  })
  const css = compiler.build(candidates)
  return { css, root: parse(css), loaded }
}

// Classes that article/component CSS owns. Tailwind does not generate them.
const SEMANTIC_HOOK = /^(?:n-|notebook-|is-|astro-)/

/** Return the rendered utility classes that Tailwind does not compile. */
export async function uncompiledUtilities(classes: string[]) {
  const utilities = classes.filter((name) => !SEMANTIC_HOOK.test(name))
  const { root } = await compileCSS(utilities)
  const compiled = new Set<string>()
  root.walkRules((rule) => {
    for (const [, escaped] of rule.selector.matchAll(/\.((?:\\[\s\S]|[\w\-\u0080-\uffff])+)/g))
      compiled.add(escaped.replace(/\\([\s\S])/g, '$1'))
  })
  return utilities.filter((name) => !compiled.has(name))
}

/** Values of a property in the rules that a utility class generates. */
export function utilityValues(root: Root, utility: string, property: string) {
  const escaped = utility.replace(/[^\w\-\u0080-\uffff]/g, '\\$&')
  const values: { value: string; media: string[] }[] = []
  root.walkRules((rule) => {
    if (!rule.selector.includes(`.${escaped}`)) return
    const media: string[] = []
    rule.walkAtRules('media', (query) => {
      media.push(query.params)
    })
    for (const parent of atRuleAncestors(rule)) if (parent.name === 'media') media.push(parent.params)
    rule.walkDecls(property, (decl) => {
      values.push({ value: decl.value, media })
    })
  })
  return values
}

/** Scoped <style> rules of an Astro component, with their nearest layer and media parents. */
export async function scopedRules(path: string) {
  const { css } = await transform(readFileSync(path, 'utf8'), { filename: path })
  const rules: { selector: string; layer?: string; media?: string; values: Record<string, string> }[] =
    []
  parse(css.join('\n')).walkRules((rule) => {
    const ancestors = atRuleAncestors(rule)
    const layer = ancestors.find((parent) => parent.name === 'layer')?.params
    const media = ancestors.find((parent) => parent.name === 'media')?.params
    const values: Record<string, string> = {}
    rule.walkDecls((decl) => {
      values[decl.prop] = decl.value
    })
    rules.push({ selector: rule.selector, layer, media, values })
  })
  return rules
}

/** A blog collection entry with the fields that pages and components read. */
export function samplePost(id: string, date: string, published = true) {
  return {
    id,
    data: { title: `Title ${id}`, publishedOn: new Date(date), readTime: 3, tags: [], published },
  }
}

# Coding and CSS Organization Guidelines

## Purpose

Use these guidelines to organize CSS in component-based web projects. They apply to Tailwind projects and projects that use plain CSS. Astro-specific notes are identified separately.

The goal is predictable ownership, not the fewest files or the shortest class lists. A developer should know where to make a change and which parts of the interface that change can affect.

These rules are a recommended project policy based on the references below. They are not requirements imposed by those sources. Follow an existing project convention unless a change is explicitly agreed.

## 1. Give each rule a clear owner

Organize styles by responsibility. Do not organize them only by CSS property or file size.

| Responsibility                                                                | Recommended owner                                    |
| ----------------------------------------------------------------------------- | ---------------------------------------------------- |
| Reset and default element behavior                                            | Framework reset and global base styles               |
| Font loading                                                                  | Font imports or font stylesheet                      |
| Colors, font families, radii, and other shared design values                  | Theme definitions                                    |
| CSS imports, cascade order, and Tailwind integration                          | Global CSS entry point                               |
| Document background, selection, scrollbars, and global accessibility defaults | Global styles                                        |
| Shared frame geometry or a proven reusable primitive                          | Small shared stylesheet or utility                   |
| Ordinary component layout and appearance                                      | Utility classes in the component markup              |
| Complex effects used by one component                                         | Component-owned custom CSS                           |
| Relationships between sections on a page                                      | Page composition styles                              |
| Defaults for generated Markdown or rich text                                  | Styles scoped to a prose container                   |
| Explicit content blocks, such as summaries and takeaways                      | The corresponding component                          |
| Third-party content, such as code highlighting or mathematics                 | A narrow integration stylesheet or the content owner |

Responsive rules, interaction states, and browser fallbacks belong with the feature they modify. They are not separate owners.

**Rule:** Keep one implementation for each styling decision. A global default and a deliberate local exception are valid. Duplicate declarations that serve the same purpose are not.

## 2. Separate theme values from their use

- Define shared semantic values once.
- Use names that describe a role, such as `paper`, `ink`, `muted`, and `accent`.
- Keep light and dark values paired by role.
- Separate font loading from font assignment.
- Do not create a second palette in component classes or scripts.
- Do not turn every one-off dimension into a design token.
- Promote a value to a token when it represents a shared design decision, not merely because it appears twice.

For Tailwind v4, `@theme` defines utility-generating theme values. An `@theme inline` mapping can connect utilities to existing CSS custom properties:

```css
:root {
  --accent: #33507e;
}

@theme inline {
  --color-accent: var(--accent);
}
```

The markup can then use `text-accent`, `bg-accent`, or `fill-accent`. If the custom property changes for another theme, those utilities use the new value.

## 3. Keep global CSS small and deliberate

Global CSS may contain several distinct responsibilities. Label those sections clearly.

Keep the following global:

- Stylesheet imports and cascade-layer order.
- The reset and necessary base defaults.
- Document-wide font, text color, and background.
- Site-wide background textures, such as a dot pattern.
- Selection and scrollbar colors.
- Default link behavior, where the project has a shared default.
- Global focus and reduced-motion safeguards.

Do not duplicate a framework reset. For example, Tailwind Preflight already resets many margins, headings, and list styles.

Do not make a contextual rule universal. Article links may need persistent underlines. Navigation links may not. Restore article list markers inside the prose container, not on every list on the site.

A visual effect is not automatically global. A dot pattern on the document is global. A rotated background on one summary component is component-specific.

## 4. Use Tailwind for ordinary component styles

Prefer utilities for:

- Flex and grid layout.
- Spacing and dimensions.
- Typography.
- Colors and borders.
- Responsive visibility.
- Ordinary hover, focus, active, and disabled states.

Keep these styles where the element is defined:

```html
<a class="text-accent inline-flex items-center gap-2 hover:underline" href="/articles">
  Articles
</a>
```

Use the project's semantic theme utilities. Do not substitute unrelated framework colors or approximate dimensions during a refactor.

Use arbitrary values when an exact one-off value is necessary. Use custom CSS when the resulting class expression becomes harder to understand than a named rule. Add a type hint when a CSS-variable utility is ambiguous, such as `stroke-[length:var(--stroke-width)]` for SVG stroke width.

For SVGs, choose color ownership explicitly:

- `fill-accent` sets the SVG fill directly.
- `text-accent` with `fill="currentColor"` uses the computed text color.
- `currentColor` is a CSS keyword, not a variable that must be assigned.
- A CSS `fill` declaration can override the SVG presentation attribute.

## 5. Reuse components before inventing CSS abstractions

- Use an existing component to share markup and styles.
- Use loops for repeated elements with the same structure.
- Extract a new component when the same behavior and structure recur.
- Do not extract a component only because two elements share a few utilities.
- Do not create a configurable component API for hypothetical future uses.
- Keep a shared geometry formula in one place rather than copy it into several class lists.

Use `@apply` only for a justified integration or abstraction. Do not use it as the default way to hide utility lists behind custom classes.

## 6. Keep complex CSS with its component

Custom CSS is appropriate for effects, complex selectors, generated content, counters, and feature-support fallbacks when it improves readability.

Examples include:

- SVG filtering and path effects.
- Decorative paper or tape pseudo-elements.
- Coupled animation rules.
- Numbered captions and section counters.
- Complex layout calculations.

Choose one consistent convention:

1. Scoped styles in the component file, where supported.
2. A dedicated stylesheet associated with that component.

Do not distribute a component's internal appearance across unrelated global and page stylesheets.

The component owns its internal appearance. The parent owns placement and the relationship to adjacent elements. Prefer an explicit class, variant, or CSS custom property over a selector that reaches into a child's internal markup.

### Astro notes

Astro `<style>` blocks are scoped by default. Imported CSS files are not automatically scoped.

Scoped styles do not normally style content written inside a child component or supplied through a slot. Use a wrapper and a narrow `:global()` selector when that boundary must be crossed. Do not make the whole stylesheet global to solve one boundary problem.

If a component accepts a `class` property, apply it deliberately. Check whether the selected Astro scoping strategy also requires forwarding scope attributes.

Import global foundations before components that register named layers. Check the compiled CSS too. A layer-order declaration cannot reorder a layer that an earlier stylesheet has already created.

## 7. Separate prose defaults from explicit content components

Generated Markdown does not provide utility classes on each paragraph or heading. A prose stylesheet is appropriate for:

- Paragraph and heading spacing.
- Links, emphasis, and blockquotes.
- Nested list markers.
- Inline code.
- Content wrapping and heading scroll offsets.

Scope those rules to a prose container. Do not let them affect navigation, forms, or unrelated page content.

Explicit components, such as a TL;DR block, takeaways, or a figure, own their own appearance. They may inherit prose typography intentionally. Do not redefine their internal styles in several places.

Keep page-level reading geometry separate from component details. The page decides where a figure can extend. The figure decides how its image and caption are arranged.

## 8. Make cascade precedence explicit

For a Tailwind-based project, a suitable starting order is:

```css
@layer theme, base, components, utilities;
```

- Put element defaults in `base`.
- Put custom component rules in `components` when utilities must be able to override them.
- Preserve this policy in scoped component styles as well as external stylesheets.
- Keep selectors no more specific than necessary.
- Do not rely on import order as the only protection against style conflicts.
- Avoid unlayered visual overrides. Normal unlayered rules override normal layered rules.
- Avoid `!important` as a conflict fix. Document any necessary exception.

Important declarations reverse layer precedence. A scoped selector is not a replacement for a layer policy.

## 9. Keep Tailwind classes detectable and unambiguous

Tailwind scans source text. It does not evaluate string expressions.

Use complete class names:

```js
const states = {
  active: 'text-accent font-semibold',
  idle: 'text-muted font-normal',
}
```

Do not construct fragments such as `text-${color}`.

Avoid conflicting utilities on one element. The order of classes in the HTML attribute does not determine which declaration wins.

If a component allows style overrides, define the supported options. Do not assume that appending another utility will always override the original utility.

## 10. Load feature styles through their owner

Load global foundations from the application shell or shared layout.

Where the build system supports it, load page-specific and component-specific CSS through the corresponding owner. Avoid importing all feature styles globally without a reason.

Use normal framework CSS processing and bundling. Do not bypass it with raw CSS injection or public assets unless the task requires that control.

Keep the file structure proportional to the project. Do not introduce a large CSS methodology, preprocessor, or folder hierarchy merely to organize a small site.

## 11. Preserve accessibility and responsive behavior

Treat these as implementation requirements, not optional polish:

- Visible keyboard focus.
- Usable controls and labels.
- Skip-link behavior where needed.
- Correct hidden and disabled states.
- Reduced-motion support.
- Usable layouts at narrow widths and increased zoom.
- Touch behavior that does not depend on hover.
- Local scrolling for overflowing code, mathematics, and tables.

When converting CSS to utilities, preserve exact breakpoint semantics. An inclusive `max-width` condition and an exclusive comparison are not identical.

A style refactor must not silently change dimensions, hover support, theme behavior, reading geometry, or browser fallbacks.

## 12. Refactor in bounded batches

1. Identify the current owners and cross-component dependencies.
2. Agree on the target ownership and the protected behavior.
3. Move one coherent group of rules.
4. Remove the old declarations in the same batch.
5. Update imports and ownership documentation.
6. Verify the affected behavior with the project's agreed checks.
7. Stop when the batch is complete. Do not add unrelated visual polish.

Check that lint coverage includes every supported style location. A command that checks `.css` files does not necessarily check component `<style>` blocks.

Use tests and browser checks for the contracts they can verify. A successful build is not proof of visual equivalence. A documentation-only update is not new browser acceptance evidence.

Keep dependency upgrades, lint-tool changes, fixture removal, and broad redesigns separate unless explicitly included in the batch.

## Decision guide

Before adding a style, ask:

1. Is this a shared design value? Put it in the theme.
2. Is this a document-wide default? Put it in global base styles.
3. Is this an ordinary style on markup we control? Use utilities in that component.
4. Is this a complex effect used by one component? Use component-owned CSS.
5. Is this a relationship between page sections? Use page composition styles.
6. Is this generated rich text? Use prose-scoped defaults.
7. Is this a proven shared primitive? Keep one small reusable definition.

Do not choose an abstraction only to reduce line count. Choose it to reduce the number of places a developer must change for one decision.

## References

Official documentation reviewed on 2026-10-09. Check the documentation for the versions installed in each project before adopting syntax.

- [MDN — Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing): consistency, logical sections, selector specificity, and file organization.
- [MDN — Cascade layers](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers): explicit precedence, unlayered rules, and important declarations.
- [Tailwind CSS — Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes): utilities, component reuse, duplication, and style conflicts.
- [Tailwind CSS — Adding custom styles](https://tailwindcss.com/docs/adding-custom-styles): base rules, component rules, theme integration, and custom CSS.
- [Tailwind CSS — Detecting classes in source files](https://tailwindcss.com/docs/detecting-classes-in-source-files): complete class names and static detection.
- [Astro — Styles and CSS](https://docs.astro.build/en/guides/styling/): scoped styles, global boundaries, imports, Markdown styling, and bundling.

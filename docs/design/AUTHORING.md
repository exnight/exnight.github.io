# Notebook authoring

Publishing remains MDX + existing frontmatter in `src/blog/`. Ordinary paragraphs, headings, lists, Markdown tables, images, code and maths remain valid. No client script is required to construct reading content. Keep title/slugs and Markdown heading text unchanged to preserve existing anchors.

## Explicit reading boundaries

Import components only when useful. Keep the heading outside the boundary. This preserves Astro's generated heading ID and contents entry.

Put paragraphs and lists in the default slot, between the opening and closing tags. Do not pass them as string props. Keep blank lines around block Markdown, as shown below.

```mdx
import NotebookSummary from '@/components/NotebookSummary.astro'
import NotebookTakeaways from '@/components/NotebookTakeaways.astro'

## TL;DR

<NotebookSummary>

A paragraph of actual summary text.

- Block lists are supported.
- Additional paragraphs are supported too.

</NotebookSummary>

## Takeaways

<NotebookTakeaways>

The author's conclusions, unchanged.

</NotebookTakeaways>
```

Neither component infers its boundary from heading names or reconstructs siblings in the browser. Plain Markdown is not automatically converted into a callout.

## Tables

Ordinary Markdown tables need no component import or manual wrapper. The article page maps them to `NotebookTable` automatically. They retain per-column alignment and scroll locally. After fonts load, they snap to the text edge or frame-right edge. Without JavaScript they stay text-width and still scroll locally. The wrapper is keyboard-focusable.

For a semantic caption or explicit structured table, use `NotebookTable`. Choose one row mode: structured props or raw table markup.

### Structured props

```mdx
import NotebookTable from '@/components/NotebookTable.astro'

<NotebookTable
  headers={['Route', 'Cost']}
  rows={[
    ['Hong Kong → Zurich', '100'],
    ['Zurich → Hong Kong', '200'],
  ]}
  align={['left', 'right']}
  caption="Prices in HKD."
/>
```

- `headers` and `rows` contain plain strings. Use raw markup when a cell needs inline formatting.
- Give each row the same number of cells as the headers. The component does not validate row lengths.
- `align` sets each column to `left`, `center` or `right`. Omitted entries use `left`.
- Supplying `headers` selects structured mode and skips the default slot. An empty array also selects this mode.
- `rows` alone does not select structured mode.

### Raw table markup

Omit `headers`, `rows` and `align`. Supply `<thead>` and `<tbody>` as children. Do not add a nested `<table>`. Set alignment on the cells when needed.

```mdx
<NotebookTable caption="Prices in HKD.">
  <thead>
    <tr>
      <th scope="col">Route</th>
      <th scope="col" align="right">Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>Hong Kong → Zurich</em></td>
      <td align="right">100</td>
    </tr>
  </tbody>
</NotebookTable>
```

Use the same `NotebookTable` import shown above. Raw and structured tables share the same styles and scrolling behavior.

### Table captions

Prefer the `caption` prop for plain text. It renders a real `<caption>` and labels the scrolling region. For inline caption markup, omit that prop and supply a `<caption>` child in raw mode. With a raw caption alone, the scrolling region label remains “Scrollable table.”

Use one caption source. A caption prop and a `<caption>` child together produce two captions. Do not infer a caption from a nearby paragraph.

Captions are numbered visually as “Table N —”. Uncaptioned tables still count toward the article's table sequence. Captions stay at the reading measure even when the table expands.

## Figures

Ordinary Markdown images remain valid. They are not mapped to `NotebookFigure`. Use this component when you need a figure variant, a semantic caption or figure numbering.

```mdx
import NotebookFigure from '@/components/NotebookFigure.astro'

<NotebookFigure
  src="/images/an-authored-image.png"
  alt="Describe the meaningful image content"
  width={1440}
  height={900}
  kind="wide"
  caption="The author's caption."
/>
```

### Image and layout

- Supply `src` and meaningful `alt` text. The component does not check the meaning of alt text.
- Omit `kind` for the default `text` layout on the reading track.
- Use `kind="wide"` for the frame-right edge.
- Use `kind="phone"` for a narrow image with an adjacent caption. It uses an image column of up to 18rem and stacks on mobile.
- Choose the layout explicitly. The component does not detect image shape.
- `width` and `height` are optional. Supply both when known. Use the source image's intrinsic dimensions, not its displayed size. They describe its aspect ratio and reserve space while it loads.

Figures use `<figure>`, lazy image loading and async decoding.

### Figure captions

Use `caption` for plain text. For inline markup, omit that prop and use the default slot:

```mdx
<NotebookFigure
  src="/images/an-authored-image.png"
  alt="Describe the meaningful image content"
  width={1440}
  height={900}
>
  The author's caption with <em>inline emphasis</em>.
</NotebookFigure>
```

Use the same `NotebookFigure` import shown above. Keep slot captions inline. Block paragraphs are permitted, but prose margins can change their spacing.

Prefer one caption source. If you supply both, the component places prop text before slot content without adding a separator. Omit both for no `<figcaption>`.

Captions use visual “fig. N” numbering. All `NotebookFigure` instances count, including those without captions. Keep the caption separate from alt text. Never infer it from an adjacent italic paragraph.

Keep asset provenance with each editorial image. Test fixture images are not published.

# Responsive Design Guidelines

## Purpose

Use these guidelines to plan, review and refactor responsive layouts in web projects. They apply to plain CSS and Tailwind projects. Tailwind-specific notes are identified separately.

The goal is a layout that works at every width, zoom level and font-size setting. It is not a layout that matches a list of devices.

These rules are a recommended project policy based on the references below. They are not requirements imposed by those sources. Follow an existing project convention unless a change is explicitly agreed. Use them together with `CSS-GUIDELINES.md` for style ownership.

## 1. Start with a fluid layout

Make the layout flexible before you add media queries. Most adaptation needs no breakpoint.

Use:

- Normal document flow for single-column content.
- `flex-wrap` for rows of items that can wrap.
- Grid with `minmax()`, `fr` and `auto-fit` for repeated items.
- `min()`, `max()` and `clamp()` for widths, gaps and type sizes.
- `max-width` with a percentage or `100%` fallback for readable measures.

```css
.frame {
  width: min(77.5rem, 100% - 2 * clamp(1rem, 4vw, 3rem));
  margin-inline: auto;
}
```

Add a media query only when the layout must change structure. Examples: one column instead of two, a disclosure instead of a sidebar, or a different reading order.

## 2. Let the content set each breakpoint

Do not choose breakpoints from device names, product sizes or framework defaults.

Use this procedure:

1. Design the narrowest layout first.
2. Widen the viewport slowly.
3. Find the width where the content fails. Examples: lines become too long, columns become too narrow, or items collide.
4. Put the breakpoint at that width.
5. Record the reason.

Keep a breakpoint table in the project documentation. The values below are examples:

| Name      | Value   | What changes                | Why this value                         |
| --------- | ------- | --------------------------- | -------------------------------------- |
| `compact` | 45rem   | Mobile type and list layout | Two list columns go below 18rem        |
| `article` | 65.5rem | Article becomes one column  | Sidebar + gaps + 42rem text do not fit |

A breakpoint without a recorded reason is difficult to review. Measure it before you change it.

When the layout uses a formula, calculate the breakpoint from the same formula:

```text
required width = sidebar + 2 × gap + reading width + frame insets
```

If the breakpoint is lower than the required width, the layout is squeezed just above the breakpoint. If it is much higher, the wide layout appears later than necessary.

Use few major breakpoints. Use fluid values for small adjustments between them.

## 3. Choose units by what they must scale with

Browser zoom scales `px`, `rem` and `em` equally. The difference is the user's **default font-size setting**. `rem` and `em` follow that setting. `px` does not.

Choose the unit by asking: "Must this value grow when the user asks for larger text?"

| Value                                          | Recommended unit            | Reason                                       |
| ---------------------------------------------- | --------------------------- | -------------------------------------------- |
| Font sizes                                     | `rem`                       | Respects the user's font-size setting        |
| Spacing near text, line measures, text columns | `rem`, `em` or `ch`         | Keeps proportions with the text              |
| Frame caps around text content                 | `rem`                       | Keeps the frame large enough for scaled text |
| Media query and container query breakpoints    | `rem` or `em`               | Moves the layout change with the text size   |
| Fluid values                                   | `clamp()` with `rem` limits | Keeps zoom and font settings effective       |
| Borders, hairlines, focus outline thickness    | `px`                        | Must stay crisp, not grow with text          |
| Shadows, decorative stroke widths, textures    | `px`                        | Decoration, not content                      |
| Minimum page width for reflow tests            | `px`                        | WCAG defines reflow in CSS pixels            |
| Radii                                          | `px` or `rem`               | Choose one per project                       |

### Media query units

In media queries, `rem` and `em` both use the **initial** font size. That is the browser default or the user's setting. They do not use the `font-size` on `html`. Therefore `45rem` and `45em` give the same result in a media query.

Do not change the root size to make calculations easier, such as `html { font-size: 62.5% }`. Page `rem` values then use a different base from media query `rem` values.

### Do not use viewport units alone for text

Text sized only with `vw` does not grow with browser zoom. This fails WCAG text resizing. Always add a `rem` part:

```css
font-size: clamp(1.15rem, 1rem + 0.6vw, 1.35rem);
```

### Converting from px

At the common 16px default, `rem = px ÷ 16`. A 1:1 conversion gives the same result at the default setting:

| px     | rem      |
| ------ | -------- |
| 380px  | 23.75rem |
| 720px  | 45rem    |
| 900px  | 56.25rem |
| 1000px | 62.5rem  |
| 1240px | 77.5rem  |

Treat a 1:1 conversion and a content-based change as separate changes. The first changes behavior only for users with a different font-size setting. The second changes the default appearance.

## 4. Keep one unit for one layout relationship

A layout relationship includes the content sizes, the container caps and the breakpoint that protects them. Use one scaling unit for all of them.

Example of a mixed relationship:

```css
/* Text tracks scale with the font setting. */
grid-template-columns: 13rem 42rem 1fr;
/* The cap and the breakpoint do not. */
width: min(1240px, 100% - 6rem);
@media (max-width: 1000px) { ... }
```

At a larger default font size, the columns grow but the cap and breakpoint stay fixed. The two-column layout then appears in too little space. Use `rem` for the cap and the breakpoint too.

### Tailwind note

Use the same unit for all Tailwind breakpoints. Tailwind sorts breakpoint variants by value. Mixed units can sort in an unexpected order. Tailwind's default breakpoints use `rem`.

## 5. Define breakpoint boundaries exactly

Each breakpoint needs one exact boundary. One side includes the value; the other side starts above it.

- `max-width: 45rem` includes 45rem.
- `min-width: 45rem` also includes 45rem. Pairing it with `max-width: 45rem` gives an overlap.
- `min-width: 45.0625rem` after `max-width: 45rem` gives a gap. Fractional viewport widths can fall into it at some zoom levels.

Prefer range syntax. It states the boundary without overlap or gap:

```css
@media (width <= 45rem) {
  /* compact */
}
@media (width > 45rem) {
  /* wide */
}
```

Range syntax is supported in current major browsers. Check the project's browser targets.

Define each breakpoint value once. CSS custom properties do not work inside media queries. Use the framework's breakpoint definitions or a named variant.

### Tailwind note

Tailwind's `md:` means `width >= 48rem`. Its `max-md:` means `width < 48rem`. Neither includes the boundary on the "compact" side. If the project needs an inclusive compact threshold, define a named variant:

```css
@custom-variant compact {
  @media (width <= 45rem) {
    @slot;
  }
}
```

Use one direction consistently. Mobile-first (`min-width` / `width >`) is the Tailwind default. A desktop-first project can use named `max` variants. Do not mix both directions for the same threshold.

Arbitrary variants such as `max-[45rem]:` repeat the value in many places. Use a named variant for any threshold used more than once.

## 6. Use container queries for components

A media query asks about the viewport. A container query asks about the space given to a component. Use a container query when the same component appears in places of different width.

```css
.card-slot {
  container-type: inline-size;
}

@container (width > 30rem) {
  .card {
    grid-template-columns: 10rem 1fr;
  }
}
```

Rules:

- An element cannot query its own size. Put `container-type` on a parent.
- `container-type: inline-size` applies size containment. The container no longer takes its width from its content. Do not put it on an element that must size from its content or inherit tracks through `subgrid`.
- Use container units (`cqi`) for sizes that follow the container width.
- Keep page structure on media queries. Use container queries for reusable components.
- Provide a usable layout where container queries are not supported, if the project supports older browsers.

## 7. Keep line length and type readable

- Limit reading text to about 45–75 characters per line. Set the measure in `rem` or `ch`.
- Use `clamp()` for headings that must scale between narrow and wide layouts.
- Let long words wrap with `overflow-wrap: anywhere` in narrow, user-controlled content.
- Use `text-wrap: balance` for short headings and `text-wrap: pretty` for paragraphs, where supported.
- Keep a line height without units, such as `1.6`, so it follows the font size.

## 8. Prevent overflow

- Give images `max-width: 100%` and `height: auto`. Provide `srcset` and `sizes` that match the layout.
- Put `min-width: 0` on grid and flex children that contain long content.
- Let tables, code and mathematics scroll inside their own box. Do not let them widen the page.
- Make sure the page itself never scrolls sideways at 320 CSS pixels.

## 9. Respond to input and preferences, not only width

- Use `(hover: hover)` and `(pointer: coarse)` for hover and touch behavior. Width does not tell you the input type.
- Make sure no content or action depends only on hover.
- Make touch targets at least 24 × 24 CSS pixels. 44 × 44 is a common, more comfortable size.
- Support `prefers-reduced-motion` and `prefers-color-scheme` where the design uses motion or themes.
- Check short viewport heights, such as phones in landscape, for sticky and full-height elements.

## 10. Test the boundaries

Test more than a few common widths.

- **Each breakpoint:** the exact value and one pixel above it. Example: 720px and 721px for `45rem`.
- **Narrow:** 320 CSS pixels with no sideways page scroll.
- **Formula edges:** the width where each calculated track starts or stops changing.
- **Zoom:** 200% and 400% browser zoom.
- **Font-size setting:** a larger browser default, such as 20px and 24px. This tests `rem` breakpoints and caps.
- **Text spacing:** increased line, paragraph, letter and word spacing.
- **Preferences:** reduced motion, both color schemes and touch input.
- **Without JavaScript:** content and navigation stay usable.

Record which browsers and devices were tested. List the others as unverified, not as passed.

## 11. Refactor responsive code in bounded steps

1. List each breakpoint, its value, its owner and what it changes.
2. Find the reason for each value. Measure it if no reason exists.
3. Convert units 1:1 first. Verify that the default appearance does not change.
4. Test a larger font-size setting.
5. Change values to content-based breakpoints as a separate, approved step. This changes appearance.
6. Update the breakpoint table and the tests in the same step.

Do not combine a unit conversion, a breakpoint change and a redesign in one batch.

## Decision guide

Before adding a responsive rule, ask:

1. Can a fluid value or wrapping solve it? Then use no breakpoint.
2. Does the page structure change? Use a media query.
3. Does a reusable component change with its slot? Use a container query.
4. Must the value grow with the user's text size? Use `rem`, `em` or `ch`.
5. Is it a border, hairline or decoration? Use `px`.
6. Is the boundary exact, with no gap or overlap? Use range syntax or a named variant.
7. Is the reason recorded? Add it to the breakpoint table.

## References

Official documentation reviewed on 2026-10-10. Check the documentation for the versions and browser targets of each project before adopting syntax.

- [MDN — Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design): fluid layout, media queries, and relative units for breakpoints.
- [web.dev — Responsive web design basics](https://web.dev/articles/responsive-web-design-basics): content-based breakpoints, not device classes.
- [MDN — Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using): inclusive `min-`/`max-` features and range syntax.
- [W3C — Media Queries Level 4, §1.3 Units](https://www.w3.org/TR/mediaqueries-4/#units): relative units in media queries use the initial font size.
- [MDN — CSS length](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length): `rem`, `em`, `ch`, viewport and container units.
- [MDN — Container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries): querying the size of a parent container.
- [Tailwind CSS — Responsive design](https://tailwindcss.com/docs/responsive-design): mobile-first variants, `max-*` ranges, custom breakpoints, consistent units and container queries.
- [WCAG 2.2 — Understanding Resize Text (1.4.4)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html): text resizing to 200%.
- [WCAG 2.2 — Understanding Reflow (1.4.10)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html): no two-dimensional scrolling at 320 CSS pixels.
- [WCAG 2.2 — Understanding Target Size (Minimum) (2.5.8)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html): 24 × 24 CSS pixel minimum targets.
- [WCAG 2.2 — Technique F94](https://www.w3.org/WAI/WCAG22/Techniques/failures/F94): failure of resize text due to viewport-unit-only text.

# Design System — Lôi Phùng Thuỳ Dung Portfolio

## Direction

British academic editorial with individually isolated photographic cutouts. Decorative objects remain inside dedicated visual scenes and never overlap the reading column.

## Palette

- Navy: `#071D3D`
- Secondary navy: `#0B2D5C`
- British red: `#CF1735`
- Blue: `#1F5CA8`
- White: `#FFFFFF`
- Warm paper: `#F5F2EA`
- Cool paper: `#F5F8FC`

## Typography

Use a Vietnamese-safe local system stack only:

```css
font-family: "Segoe UI", "Noto Sans", Arial, Helvetica, sans-serif;
```

No downloaded font files and no remote font dependency. Vietnamese headings use normal letter spacing and normal word breaking.

## Content rules

1. Rebuild report text as HTML in the same order as the submitted document.
2. Recreate tables with semantic HTML; do not use a screenshot of a table.
3. Place screenshots immediately after the step or paragraph they prove.
4. Use screenshots only for actual evidence, not as substitutes for readable report text.
5. Use the red–white–blue palette on every page while varying the page composition.

## Visual rules

- Use isolated transparent objects, never a full poster crop.
- Prefer real photographic cutouts for Big Ben, a red telephone box, tea, books, stationery and scales.
- Keep decoration in `.object-scene`; content blocks remain in normal document flow.
- Avoid oversized section numbers, repetitive floating cards and generic AI gradients.
- Motion is restrained and respects `prefers-reduced-motion`.

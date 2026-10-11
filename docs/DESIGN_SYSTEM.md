# Design System

## 1. Design Direction
- **Style:** Editorial, personal, restrained, slightly playful.
- **Mood:** Thoughtful, capable, curious, human.
- **Principles:**
  - Let real work be the main visual evidence.
  - Use whitespace and typography before decoration.
  - Add small hand-drawn accents sparingly.
  - Make Web Projects and Data Analytics equally discoverable.
  - Prefer accessible, functional interaction over visual tricks.

## 2. Brand
- **Working wordmark:** ARSH.DEV (confirm before launch).
- **Voice:** Direct, curious, clear, confident without exaggerated claims.
- **Logo rule:** Typographic wordmark is sufficient for MVP; avoid a complex symbol unless the owner supplies one.

## 3. Color Palette
- Primary forest green: `#173C32`
- Secondary muted plum: `#8B7188`
- Background warm ivory: `#F5F0E6`
- Surface: `#FFFCF6`
- Main text charcoal: `#252824`
- Muted text: `#686A63`
- Border: `#D9D2C6`
- Success: `#2D7A52`
- Warning: `#9A6B24`
- Error: `#A33D3D`

Use colors consistently. Do not rely on color alone to communicate status.

## 4. Typography
- **Heading:** DM Serif Display or a similar editorial serif.
- **Body:** Inter or a system sans-serif fallback.
- **Code/eyebrows:** JetBrains Mono or a system monospace fallback.
- **H1:** clamp(2.6rem, 6vw, 5rem), weight 600, line-height 1.02–1.12.
- **H2:** clamp(2rem, 4vw, 3rem), line-height 1.1.
- **H3:** 1.2–1.5rem, line-height 1.25.
- **Body:** 1rem–1.125rem, line-height 1.6.
- **Small:** 0.8–0.9rem, line-height 1.45.

## 5. Spacing
Use a 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Use generous vertical spacing between major sections.

## 6. Border Radius
- Small: 6px
- Medium: 12px
- Large: 18px
- Pill: 999px

Prefer mostly modest radii; avoid rounding every element into a pill.

## 7. Shadows
- Small: `0 2px 8px rgba(37, 40, 36, 0.06)`
- Medium: `0 8px 24px rgba(37, 40, 36, 0.08)`
- Large: `0 16px 40px rgba(37, 40, 36, 0.12)`
Use shadows only when they clarify layering.

## 8. Buttons
- **Primary:** forest green fill, ivory text, clear hover/focus state.
- **Secondary:** transparent/ivory fill, charcoal border and text.
- **Danger:** only for destructive actions, if any are introduced.
- **Disabled:** visibly disabled and not interactive.
- **Loading:** show a text label or spinner with accessible status; prevent duplicate submission.

## 9. Inputs
If a contact form is added:
- Default: surface background, visible border, readable label.
- Focus: strong outline with sufficient contrast.
- Error: inline message associated with the field.
- Disabled: clearly muted.
- Placeholder: supplementary only; never replace a visible label.

## 10. Cards
- Use a real screenshot or project artifact.
- Keep title, summary, stack, and action links in a consistent order.
- Border: 1px solid border token.
- Padding: 16–24px.
- Use subtle hover elevation only on interactive cards.
- Do not make a whole card clickable if it contains several different links.

## 11. Navigation
- Desktop: simple horizontal header with About, Skills, Projects, Data Analytics, Contact, and optional Resume.
- Mobile: compact menu button with accessible name and visible open/closed state.
- Active section treatment should remain subtle and understandable.
- Navigation must not obscure section headings when using anchor scrolling.

## 12. States
- Loading: use only where data is genuinely loaded asynchronously.
- Empty: explain that content is not available yet; never show fake projects.
- Error: clear, actionable message.
- Success: concise confirmation.
- Disabled: explain or visually indicate why unavailable.

## 13. Icons
- Use a consistent outline icon library, such as Lucide.
- Typical size: 18–24px.
- Decorative icons must not replace accessible labels.

## 14. Responsive Design
- Mobile: one-column content, readable text, touch targets at least 44px, no horizontal overflow.
- Tablet: two-column project grids where space allows.
- Desktop: constrained content width, two-column hero, two/three-column project grids as appropriate.
- Suggested breakpoints: 640px, 768px, 1024px, 1280px. Adapt to existing project conventions.

## 15. Accessibility
- Semantic HTML landmarks and heading order.
- Keyboard-operable navigation and controls.
- Visible focus indicators.
- Sufficient contrast.
- Descriptive alt text for meaningful project images.
- Respect reduced-motion preferences.
- Do not rely only on color.

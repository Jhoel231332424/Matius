---
name: matius-visual-qa
description: Validate Matius Perfect UI changes with visual regression, accessibility, responsive and performance checks before handoff.
---

# Matius Visual QA Skill

Use after any UI, imagery, typography, navigation, responsive, motion or CTA change.

## Required checks

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`
4. route smoke tests
5. snapshots de Hero/Colecciones/Fabricación/Contacto en mobile y desktop
6. Lighthouse cuando el cambio puede afectar first viewport, JS, imágenes, SEO o a11y

## Snapshot matrix

### Mobile 390×844
- `home-mobile.png`
- `collections-mobile.png`
- `craftsmanship-mobile.png`
- `contact-mobile.png`

### Desktop 1440×1000
- `home-desktop.png`
- `collections-desktop.png`
- `craftsmanship-desktop.png`
- `contact-desktop.png`

## Visual inspection

Never rely only on scores. Inspect screenshots for:
- missing/invisible text;
- incorrect crop;
- overflow/clipping;
- layout drift;
- inconsistent spacing;
- CTA hierarchy changes;
- hover-only functionality;
- floating WhatsApp overlap;
- excessive empty space;
- typography wrapping problems;
- dark/light section contrast problems;
- section-anchor snapshots landing in the wrong visual region.

## Mobile review

Also reason about 320, 375 and 430 widths even if CI baseline is 390.

Check:
- tap targets ≥ 44 px;
- no horizontal overflow;
- Hero product visible early;
- navigation usable;
- no long sticky traps;
- content order makes sense without desktop columns.

## Accessibility

Hard checks:
- skip link;
- keyboard navigation;
- visible focus;
- labels/names match visible purpose;
- WCAG AA contrast;
- semantic landmarks/headings;
- reduced motion;
- meaningful image alt/decorative empty alt.

## Lighthouse gates

Current CI targets:
- Accessibility ≥ 0.95;
- Best Practices ≥ 0.90;
- SEO ≥ 0.95;
- Performance warning below 0.75;
- CLS ≤ 0.1;
- LCP warning above 4 s;
- TBT warning above 350 ms.

Treat warnings as investigation prompts, not as permission to ignore regressions.

## Regression triage

When a snapshot changes:
1. identify whether change is intentional;
2. compare against `DESIGN.md`;
3. verify desktop and mobile;
4. inspect the affected section snapshot, not only Home;
5. fix unintended drift before adding more UI;
6. only then accept/update baseline assumptions.

## Done

A visual feature is done only when source review + rendered review agree and the current branch CI is green.

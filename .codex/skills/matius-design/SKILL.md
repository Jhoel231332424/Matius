---
name: matius-design
description: Apply the Matius Perfect visual contract to frontend design and implementation without visual drift.
---

# Matius Design Skill

Use for any Hero, section, product card, collection card, navigation, typography, color, imagery, layout or motion change.

## Required context

Read first:
1. `DESIGN.md`
2. `AGENTS.md`
3. `docs/DESIGN-SYSTEM.md`
4. existing component implementation

## Workflow

1. Identify the user outcome of the section.
2. State which existing visual rule controls the decision.
3. Reuse existing tokens/components before creating new primitives.
4. Prefer editorial composition over dashboard/card patterns.
5. Make photography/product the dominant visual layer.
6. Design mobile behavior explicitly.
7. Use CSS-first motion.
8. Implement only after the section has a clear hierarchy.
9. Validate snapshots and Lighthouse after the change.

## Matius visual thesis

Modern Bolivian Leather / Editorial Commerce.

The site must feel:
- tactile;
- urban;
- product-led;
- premium accessible;
- confident;
- contemporary craft.

It must not feel:
- SaaS;
- futuristic tech;
- generic AI landing page;
- rustic craft marketplace;
- fake ultra-luxury.

## Preferred patterns

- dominant product image;
- oversized editorial heading;
- asymmetric 12-column composition;
- restrained labels/numbers;
- warm white ↔ charcoal/dark brown rhythm;
- image-led collection entry;
- minimal product metadata;
- sticky process storytelling only where meaningful.

## Reject by default

- glassmorphism;
- generic bento layout;
- gradient mesh;
- floating pills with decorative stats;
- animated background shaders;
- excessive rounded cards;
- custom cursor;
- particle systems;
- autoplay carousels;
- effects without product/UX purpose.

## Component acceptance question

Before adding a component from React Bits, 21st.dev, UIverse, Magic UI or another source:

> Does the interaction improve product presentation, understanding or conversion after being restyled into Matius?

If no, do not use it.

Never copy branding, copy, images, or a full proprietary page/trade dress from references. Adapt hierarchy, interaction pattern and information architecture.

## Done

- conforms to `DESIGN.md`;
- works without hover on touch;
- supports 320–430 px mobile;
- no invented claims;
- snapshot reviewed;
- CI green.

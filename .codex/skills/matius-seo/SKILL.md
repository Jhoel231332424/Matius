---
name: matius-seo
description: Protect technical, local, product and image SEO for Matius Perfect using only verified business data.
---

# Matius SEO Skill

Use for metadata, routes, headings, images, structured data, sitemap/robots, store pages and product/category architecture.

## Core rules

- one H1 per page;
- canonical belongs to each page, not a global `/`;
- preview stays `noindex` unless production explicitly enables indexing;
- links are real crawlable anchors/Next Links;
- key images use `next/image`/HTML rather than CSS-only backgrounds;
- alt text describes real visible content without keyword stuffing;
- metadata and Open Graph must match page intent;
- do not publish thin duplicate doorway pages.

## Structured data

Builders may exist before data is complete, but emitted JSON-LD must never invent values.

### LocalBusiness
Only emit a store location when verified data is sufficient. Prefer:
- name;
- URL;
- address;
- telephone;
- opening hours when known;
- geo/maps data only when verified.

### Product / ProductGroup
Use only for real product entities with sufficient verified fields. Do not fabricate availability, price, ratings, variants or offers.

## Route strategy

Keep architecture prepared for:
- `/zapatos-de-cuero`;
- `/zapatos-hombre`;
- `/zapatos-mujer`;
- `/nuestra-fabricacion`;
- `/tiendas` and unique store pages;
- future `/zapatos/{slug}` only when real product data exists.

## Image SEO

- descriptive filename when assets are controlled locally;
- contextual alt;
- correct `sizes`;
- responsive optimization;
- reserve geometry to avoid CLS;
- Hero LCP gets high fetch priority;
- do not duplicate irrelevant alt/captions.

## SEO QA

Run/inspect:
- metadata/title/description;
- canonical;
- robots;
- sitemap;
- Open Graph/Twitter;
- semantic headings;
- crawlable links;
- Lighthouse SEO;
- emitted JSON-LD validity.

A Lighthouse 100 does not by itself prove rankings or production SEO completeness.

## Google safety rule

Never claim guaranteed rankings or “first on Google”. SEO improves crawlability, eligibility, relevance and performance; rankings depend on broader factors.

## Done

- no fabricated schema data;
- canonical is correct;
- preview indexing behavior is correct;
- routes are intentional;
- images are discoverable;
- CI/Lighthouse reviewed.

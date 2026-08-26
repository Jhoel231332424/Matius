# Matius Perfect — Landing Demo

Landing editorial para Matius Perfect enfocada en zapatos de cuero y conversión contextual a WhatsApp.

## Stack

- Next.js 16 + TypeScript
- React 19
- Tailwind CSS 4
- App Router
- `next/font` con Geist + Cormorant Garamond
- Interacciones **CSS-first**; no se usa una librería de motion en el bundle actual
- Metadata, canonical, robots, sitemap y builders JSON-LD

## Desarrollo

```bash
npm install
npm run dev
```

## Calidad

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub Actions ejecuta además:

- smoke de 11 rutas de producción;
- 8 snapshots visuales por PR;
- Lighthouse CI mobile;
- artifacts de screenshots y reporte Lighthouse.

### Matriz visual automática

Mobile `390×844` y desktop `1440×1000` para:

- Home / Hero
- Colecciones (`#zapatos`)
- Fabricación (`#fabricacion`)
- Contacto / CTA final (`#contacto`)

## Entorno

Copiar `.env.example` a `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: dominio canónico.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número sin `+` ni espacios.
- `NEXT_PUBLIC_ALLOW_INDEXING`: mantener `false` en demos/previews; activar solo en producción final.
- `ALLOWED_DEV_ORIGINS`: lista separada por comas solo cuando el entorno de desarrollo la requiera.

## Arquitectura de Home

Cada bloque vive como módulo independiente en `components/sections/`:

1. Hero
2. Brand Pillars
3. Collections
4. Featured Products
5. Craftsmanship
6. Leather Detail
7. Lifestyle
8. Lookbook
9. Stores
10. Final CTA

Componentes reutilizables:

- `components/product/ProductCardMatius`
- `components/collection/CollectionCard`
- primitives en `components/ui/`
- helpers de WhatsApp, analytics y SEO en `lib/`

## Design governance

Antes de modificar frontend, leer:

1. `DESIGN.md` — contrato visual y de producto.
2. `AGENTS.md` — reglas de implementación/QA para agentes.
3. `docs/DESIGN-SYSTEM.md` — tokens y sistema visual detallado.
4. `docs/CONVERSION-WHATSAPP.md` — intención, mensajes y eventos.
5. `docs/QA-CHECKLIST.md` — gates responsive, visuales, a11y y performance.

Skills locales para Codex:

- `.codex/skills/matius-design/SKILL.md`
- `.codex/skills/matius-cro/SKILL.md`
- `.codex/skills/matius-seo/SKILL.md`
- `.codex/skills/matius-visual-qa/SKILL.md`

## Estado actual

La demo ya incluye:

- foundation completa;
- sistema editorial `Modern Bolivian Leather / Editorial Commerce`;
- assets first-party oficiales disponibles públicamente;
- Hero product-first en mobile;
- colecciones y producto con composición editorial;
- fabricación CSS sticky sin dependencia de motion;
- WhatsApp contextual por Hero/producto/sucursal/CTA/floating;
- `window.dataLayer` preparado para analytics;
- SEO técnico base;
- QA automático con rutas, snapshots y Lighthouse.

## Pendiente del cliente antes de producción

- logo maestro/vectorial;
- originales fotográficos en máxima resolución;
- fotografías específicas por producto;
- fotografías reales de fabricación;
- fotografías, direcciones y horarios de las tres sucursales;
- catálogo definitivo, tallas, colores, precios y stock;
- políticas de garantía/cambios/devoluciones;
- claims técnicos autorizados;
- testimonios reales si la marca decide usarlos.

La preview debe mantenerse `noindex` hasta disponer de datos/activos finales y definir el dominio de producción.

## PR activo

El desarrollo se mantiene en `feat/landing-foundation` mediante el PR draft #3. No mergear a `main` hasta completar la revisión de preview y los datos de producción.

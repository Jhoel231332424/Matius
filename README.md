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
- `playwright-core` solo como tooling de Visual QA

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
- **10 snapshots visuales por PR**;
- Lighthouse CI mobile;
- artifacts de screenshots y reporte Lighthouse.

### Matriz visual automática

Mobile `390×844` y desktop `1440×1000` para:

- Home / Hero
- Colecciones cerradas (`#zapatos`)
- Colecciones con panel `Cuero` abierto
- Fabricación (`#fabricacion`)
- Contacto / CTA final (`#contacto`)

El harness espera la carga real de imágenes lazy después del scroll para evitar snapshots negros/falsos.

## Entorno

Copiar `.env.example` a `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: dominio canónico.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número sin `+` ni espacios.
- `NEXT_PUBLIC_ALLOW_INDEXING`: mantener `false` en local/previews; activar solo en producción final.
- `ALLOWED_DEV_ORIGINS`: lista separada por comas solo cuando el entorno de desarrollo la requiera.

En Vercel Preview, `VERCEL_ENV=preview` fuerza `noindex,nofollow` aunque la variable pública se configure accidentalmente en `true`.

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

Componentes reutilizables importantes:

- `components/product/ProductCardMatius`
- `components/collection/CollectionCard` — fallback del grid original
- `components/collection/collection-accordion.tsx` — experiencia editorial actual de Colecciones
- primitives en `components/ui/`
- helpers de WhatsApp, analytics y SEO en `lib/`

## Editorial Collection Accordion

La sección Colecciones usa tres entradas:

- Hombre
- Mujer
- Cuero

En desktop se presenta como accordion horizontal con rails verticales y expansión del panel activo. En mobile cambia a accordion vertical, sin dependencia de hover, con cierre visible dentro del contenido.

La categoría `Cuero` es deliberadamente genérica: los assets actuales son imágenes oficiales de campaña y no se deben atribuir a un modelo Oxford específico sin verificación.

Documentación: `docs/FEATURE-10-COLLECTION-ACCORDION.md`.

## Design governance

Antes de modificar frontend, leer:

1. `DESIGN.md` — contrato visual y de producto.
2. `AGENTS.md` — reglas de implementación/QA para agentes.
3. `docs/DESIGN-SYSTEM.md` — tokens y sistema visual detallado.
4. `docs/CONVERSION-WHATSAPP.md` — intención, mensajes y eventos.
5. `docs/QA-CHECKLIST.md` — gates responsive, visuales, a11y y performance.
6. `docs/DEPLOYMENT.md` — reglas de preview/producción e indexación.

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
- Editorial Collection Accordion validado cerrado/abierto en mobile y desktop;
- producto con composición editorial;
- fabricación CSS sticky sin dependencia de motion;
- WhatsApp contextual por Hero/producto/sucursal/CTA/floating;
- floating WhatsApp protegido para no cubrir contenido mobile;
- `window.dataLayer` preparado para analytics;
- SEO técnico base + preview `noindex` seguro;
- QA automático con rutas, 10 snapshots y Lighthouse;
- HEAD actual con lint, typecheck, build, smoke, snapshots y Lighthouse verdes.

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

## Próximo gate

**Preview Deploy** en una URL separada del sitio oficial.

Después del deploy:

1. QA visual sobre URL real;
2. prueba de WhatsApp real;
3. Lighthouse/Core Web Vitals sobre infraestructura desplegada;
4. revisión mobile/desktop en dispositivos reales;
5. completar datos/activos del cliente;
6. sacar el PR de draft solo después de revisión explícita.

## PR activo

El desarrollo se mantiene en `feat/landing-foundation` mediante el PR draft #3. No mergear a `main` hasta completar la revisión de preview y los datos mínimos de producción.

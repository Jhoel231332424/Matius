# Phase Status — Matius Perfect

## Fase 1 — Foundation

Estado: **completada** en `feat/landing-foundation`.

- Next.js + TypeScript + Tailwind.
- Design tokens y tipografías con `next/font`.
- SEO base y JSON-LD builders.
- WhatsApp contextual.
- Layout global.
- Home modularizada en 10 secciones.
- Motion editorial controlado.
- CI con install, lint, typecheck y build.

## Fase 2 — Producción visual

Estado: **implementada para demo con assets first-party disponibles públicamente**.

### Completado

- Registro central de assets en `data/media.ts`.
- Cuatro imágenes oficiales de campaña integradas.
- Hero con imagen oficial y prioridad LCP.
- Brand Pillars con fotografía.
- Collections con fotografía y links SEO reales.
- Lifestyle con campaña oficial.
- Lookbook sin embed de Instagram.
- Leather Detail usando material first-party.
- Final CTA con fotografía.
- Oxford actualizado con precio público `424.95 BOB`.
- WhatsApp analytics-ready vía `window.dataLayer`.
- Mapping de assets documentado.
- QA checklist responsive/accessibility/performance documentada.
- Remote image allowlist restringida a `matiusperfect.com/assets/**`.

### Pendiente del cliente

- Logo maestro/vectorial.
- Assets originales en máxima resolución.
- Fotos específicas por producto.
- Fotos reales de fabricación.
- Fotos/direcciones/horarios de las tres sucursales.
- Catálogo completo, tallas, colores, precios y stock.
- Garantía/cambios y claims técnicos validados.

## Fase siguiente

1. Ejecutar CI sobre este commit.
2. Inspección visual en preview deploy.
3. Corregir crops con assets reales si el cliente los entrega.
4. Validar GA4/GTM si se conecta un proveedor de analytics.
5. Lighthouse/Core Web Vitals sobre URL desplegada.
6. Completar LocalBusiness/Product schema únicamente con datos confirmados.

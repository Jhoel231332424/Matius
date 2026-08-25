# Matius Perfect — Landing Demo

Landing editorial para Matius Perfect enfocada en zapatos de cuero y conversión a WhatsApp.

## Stack
- Next.js 16 + TypeScript
- Tailwind CSS 4
- Motion for React
- App Router + metadata/robots/sitemap

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

El PR de foundation incluye GitHub Actions para ejecutar automáticamente los tres checks.

## Entorno
Copiar `.env.example` a `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: dominio canónico.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número sin `+` ni espacios.
- `NEXT_PUBLIC_ALLOW_INDEXING`: dejar `false` en demos/previews y activar solo en producción final.
- `ALLOWED_DEV_ORIGINS`: lista separada por comas únicamente cuando el entorno de desarrollo la necesite.

## Arquitectura de Home
Cada bloque principal vive en un módulo independiente dentro de `components/sections/`:

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

Los componentes reutilizables de producto y colección viven en `components/product/` y `components/collection/`.

## Estado
La arquitectura, SEO base, WhatsApp, motion y wireframe editorial están implementados. Aún deben sustituirse las superficies visuales temporales por fotografías autorizadas y completar datos del cliente como direcciones, horarios, catálogo final, precios y detalles técnicos de fabricación.

Ver `docs/DESIGN-SYSTEM.md` y `docs/IMPLEMENTATION-AUDIT.md`.

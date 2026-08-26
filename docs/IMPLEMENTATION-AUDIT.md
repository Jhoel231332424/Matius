# Implementation Audit — Matius Perfect

## Estado general

Foundation, producción visual de demo, design governance, sistema editorial, CRO/WhatsApp y visual QA están implementados en `feat/landing-foundation`.

Este archivo describe el estado técnico real; `DESIGN.md` manda para decisiones visuales y `AGENTS.md` para workflow de agentes.

## Checklist implementado

- [x] Scaffold Next.js + TypeScript + Tailwind
- [x] Design tokens en `app/globals.css`
- [x] Geist + Cormorant Garamond con `next/font`
- [x] `next.config.ts` con `allowedDevOrigins` condicionado por entorno
- [x] `types/` para productos y sucursales
- [x] `data/` para site, productos, stores, media y WhatsApp
- [x] `lib/` para utils, WhatsApp, analytics y SEO/JSON-LD
- [x] UI primitives: button, container, section heading y WhatsApp button
- [x] Layout: topbar, navbar, footer y floating WhatsApp
- [x] 10 secciones de Home modularizadas
- [x] Hero editorial product-first en mobile
- [x] Brand Pillars editoriales
- [x] Collections asimétricas con links SEO reales
- [x] `ProductCardMatius`
- [x] Featured Products con jerarquía de Oxford/colecciones
- [x] Craftsmanship con scroll storytelling sticky CSS
- [x] Leather Detail editorial
- [x] Lifestyle
- [x] Lookbook
- [x] Stores sin datos visuales inventados
- [x] Final CTA
- [x] Rutas preparadas: zapatos, fabricación y tiendas
- [x] Metadata y canonical por página
- [x] Open Graph/Twitter en Home
- [x] favicon/icon route
- [x] sitemap y robots
- [x] Organization / LocalBusiness / Product / Breadcrumb JSON-LD builders
- [x] Preview `noindex` por defecto
- [x] WhatsApp contextual por source
- [x] `window.dataLayer` analytics-ready
- [x] `DESIGN.md` y `AGENTS.md`
- [x] skills locales de design/CRO/SEO/visual QA
- [x] GitHub Actions: install + lint + typecheck + build
- [x] smoke de 11 rutas
- [x] visual snapshots en CI
- [x] Lighthouse CI

## Motion / JavaScript

El proyecto **no usa Motion como dependencia** en su estado actual.

Estrategia vigente:
1. HTML/CSS;
2. CSS transitions/sticky;
3. JS cliente únicamente para interacción necesaria;
4. introducir librería de motion solo si existe una necesidad demostrada.

Los principales Client Components se limitan a funciones interactivas como WhatsApp/floating y navegación cuando corresponda.

## Assets públicos/first-party utilizados

- cuatro imágenes de campaña expuestas por el sitio oficial y registradas en `data/media.ts`;
- WhatsApp oficial configurado como fallback;
- email público de marca;
- ubicación general Cochabamba/Bolivia;
- Oxford con el precio público registrado durante la implementación.

Las imágenes de campaña NO prueban que representen un modelo específico.

## QA actual

Por feature de UI se requiere:

```bash
npm run lint
npm run typecheck
npm run build
```

CI añade:
- 11 rutas smoke;
- Lighthouse mobile;
- artifacts visuales;
- snapshots mobile/desktop de Home/Hero, Collections, Craftsmanship y Contact.

No marcar una feature como completada por existencia de archivos; el HEAD correspondiente debe pasar CI.

## Pendientes antes de producción

### Assets
- [ ] logo definitivo autorizado en vector/alta calidad
- [ ] originales hero/campaña de alta resolución
- [ ] fotografía de producto por modelo
- [ ] macros reales de cuero/acabados
- [ ] material real de fabricación
- [ ] fotografías reales de sucursales

### Cliente / negocio
- [ ] direcciones exactas de las tres sucursales
- [ ] horarios
- [ ] teléfonos por sucursal si varían
- [ ] catálogo definitivo
- [ ] precios finales vigentes
- [ ] tallas/colores
- [ ] stock si se mostrará
- [ ] política de cambios/devoluciones
- [ ] garantía
- [ ] proceso real de fabricación y claims autorizados
- [ ] testimonios/reseñas reales si se usarán

### Producción
- [ ] preview deploy compartible
- [ ] QA en dispositivos/navegadores reales
- [ ] proveedor analytics conectado y eventos validados
- [ ] LocalBusiness completo con datos verificados
- [ ] Product/ProductGroup solo cuando exista catálogo real
- [ ] Lighthouse/Core Web Vitals sobre infraestructura real
- [ ] dominio final y redirects
- [ ] indexación activada únicamente al publicar

## Gate para sacar PR #3 de draft

- CI del HEAD verde;
- preview visual revisada;
- no existen claims ficticios;
- datos finales mínimos del cliente incorporados o claramente omitidos;
- decisión explícita de publicar/mergear.

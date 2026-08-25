# Implementation Audit — Matius Perfect

## Estado general

Foundation y primera capa visual implementadas en `feat/landing-foundation`.

## Checklist

- [x] Scaffold Next.js + TypeScript + Tailwind
- [x] Design tokens en `app/globals.css`
- [x] `next.config.ts` con `allowedDevOrigins` condicionado por entorno
- [x] `types/` para productos y sucursales
- [x] `data/` para site, productos, stores y WhatsApp
- [x] `lib/` para utils, WhatsApp y JSON-LD
- [x] UI primitives: button, container, section heading y WhatsApp button
- [x] Layout: topbar, navbar, footer y floating WhatsApp
- [x] 10 secciones de Home modularizadas
- [x] Hero editorial con Motion y `prefers-reduced-motion`
- [x] Brand Pillars
- [x] Collections con links SEO reales
- [x] `ProductCardMatius`
- [x] Featured Products
- [x] Craftsmanship con scroll storytelling sticky
- [x] Leather Detail con motion suave
- [x] Lifestyle
- [x] Lookbook
- [x] Stores
- [x] Final CTA
- [x] Rutas preparadas: zapatos, fabricación y tiendas
- [x] Metadata, canonical por página, sitemap y robots
- [x] Organization / LocalBusiness / Product / Breadcrumb JSON-LD builders
- [x] Preview `noindex` por defecto
- [x] GitHub Actions: install + lint + typecheck + build
- [x] CI verde en la rama de foundation

## Datos públicos verificados usados

- Marca: Matius Perfect
- Ubicación general: Cochabamba, Bolivia
- WhatsApp oficial: `+591 71431096`
- Email público: `info@matiusperfect.com`
- Envíos nacionales comunicados en el sitio oficial

## Pendientes antes de producción

### Assets

- [ ] Logo definitivo en SVG/PNG autorizado
- [ ] Fotografía hero final
- [ ] Fotografías de producto
- [ ] Macros de cuero y acabados
- [ ] Material de fabricación
- [ ] Lifestyle / lookbook
- [ ] Fotografías de sucursales

### Cliente / negocio

- [ ] Direcciones exactas de Central, Sucursal 1 y Sucursal 2
- [ ] Horarios
- [ ] Teléfonos por sucursal si varían
- [ ] Catálogo definitivo
- [ ] Precios vigentes
- [ ] Tallas y colores
- [ ] Política de cambios/devoluciones
- [ ] Garantía
- [ ] Proceso real de fabricación y claims autorizados
- [ ] Testimonios/reseñas autorizados

### Fase siguiente de desarrollo

- [ ] Reemplazar superficies visuales temporales por assets optimizados
- [ ] Crear páginas de producto cuando exista catálogo definitivo
- [ ] Implementar analytics para eventos de WhatsApp
- [ ] Añadir `LocalBusiness` completo cuando existan NAP/horarios
- [ ] Añadir Product/ProductGroup schema solo con datos reales
- [ ] QA responsive en dispositivos reales
- [ ] Accessibility audit
- [ ] Lighthouse/Core Web Vitals pass
- [ ] Configurar dominio de demo/producción
- [ ] Activar indexación únicamente al publicar la versión final

## Gate de calidad

Cada PR debe pasar:

```bash
npm run lint
npm run typecheck
npm run build
```

No marcar una fase como terminada únicamente porque existan los archivos.

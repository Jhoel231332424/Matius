# QA Checklist — Matius Perfect Landing

## Responsive

Verificar manualmente como mínimo:

- 320 × 568
- 375 × 667
- 390 × 844
- 430 × 932
- 768 × 1024
- 1024 × 768
- 1366 × 768
- 1440 × 900
- 1920 × 1080

## Navegación

- Navbar no tapa anchors al navegar.
- Menú móvil es operable con teclado.
- Todos los enlaces internos resuelven.
- Enlaces externos usan `noopener noreferrer`.
- CTA flotante no cubre contenido en pantallas pequeñas.

## WhatsApp

Validar eventos:

- `whatsapp_hero_click`
- `whatsapp_product_click`
- `whatsapp_store_click`
- `whatsapp_final_cta_click`
- `whatsapp_floating_click`
- `whatsapp_general_click`

Cada evento debe incluir `source`, `page_path` y contexto de producto/sucursal cuando corresponda.

## Accesibilidad

- Un solo H1 en Home.
- Jerarquía H2/H3 consistente.
- Focus visible en links y botones.
- Targets táctiles >= 44 px.
- Alt útil para imágenes informativas.
- Alt vacío para imágenes estrictamente decorativas.
- Nada depende exclusivamente de hover.
- `prefers-reduced-motion` desactiva motion no esencial.
- Contraste revisado en overlays sobre fotografías.

## Imágenes

- Hero usa `priority`.
- Todas las imágenes reservan espacio mediante `fill` + contenedor posicionado.
- `sizes` definido.
- No se usan imágenes CSS para contenido indexable principal.
- Reemplazar URLs first-party externas por originales locales/CDN antes de producción si el cliente entrega assets.

## SEO

- Preview permanece `noindex` mientras `NEXT_PUBLIC_ALLOW_INDEXING != true`.
- Canonical correcto por ruta.
- `/robots.txt` y `/sitemap.xml` accesibles.
- JSON-LD sin datos ficticios.
- `LocalBusiness` no completa dirección/horarios/teléfono hasta validarlos.
- `Product` no publica stock/tallas/variantes no verificadas.

## Performance

Objetivos:

- LCP <= 2.5 s
- INP <= 200 ms
- CLS <= 0.1

Revisar:

- hero como principal candidato LCP;
- evitar JS en componentes puramente visuales;
- solo Hero, Leather Detail, Craftsmanship y WhatsApp tracking requieren comportamiento cliente;
- no añadir GSAP/Lenis/WebGL en v1;
- lazy loading por defecto debajo del fold;
- evitar animaciones de layout costosas.

## Gate técnico

```bash
npm run lint
npm run typecheck
npm run build
```

Los tres comandos deben estar verdes antes de sacar el PR de draft.

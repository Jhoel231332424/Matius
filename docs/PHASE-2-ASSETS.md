# Fase 2 — Assets y producción visual

## Fuentes utilizadas

Para la demo solo se utilizan imágenes first-party expuestas por la web oficial de Matius Perfect:

- `https://matiusperfect.com/assets/hero-1.png`
- `https://matiusperfect.com/assets/hero-2.png`
- `https://matiusperfect.com/assets/hero-3.png`
- `https://matiusperfect.com/assets/hero-4.png`

El registro central vive en `data/media.ts`. Ningún componente debe hardcodear estas URLs por separado.

## Mapping actual

| Asset | Uso demo |
|---|---|
| hero-1 | Hero principal + campaña |
| hero-2 | Pilar / lifestyle / CTA final |
| hero-3 | Pilar / lifestyle / colecciones |
| hero-4 | Pilar / detalle / lifestyle |

Las imágenes se usan como **material general de marca**. No deben presentarse como fotografía de un modelo concreto salvo que el cliente confirme la correspondencia.

## Datos de producto verificados públicamente

- Modelo: `OXFORD`
- Categoría mostrada: Hombre / Zapatos
- Precio publicado: `424.95 BOB`

No se añade stock, talla, color, SKU ni disponibilidad porque no están confirmados para esta demo.

## Assets todavía pendientes del cliente

- Logo maestro/vectorial.
- Fotografías originales en máxima resolución.
- Fotografías específicas de cada producto.
- Segunda vista por producto para hover.
- Fotografías reales del proceso de fabricación.
- Fotografías de Central, Sucursal 1 y Sucursal 2.
- Material lifestyle autorizado adicional.

## Política de producción

La demo referencia los assets first-party actuales por URL para poder avanzar sin duplicar archivos ajenos al repo. Antes de producción final, solicitar al cliente los originales y almacenarlos en el proyecto/CDN bajo control de Matius Perfect. Esto permitirá optimización AVIF/WebP, art direction, control de caché y evitar dependencia del sitio anterior.

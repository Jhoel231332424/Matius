# Conversión por WhatsApp — Matius Perfect

## Objetivo

WhatsApp es el canal de conversión primario de la landing. La experiencia no depende de un único botón flotante: cada CTA conserva el contexto de intención que lo originó.

## Fuentes actuales

| Source | Evento | Intención |
|---|---|---|
| `hero` | `whatsapp_hero_click` | visitante interesado después de la propuesta de valor |
| `product` | `whatsapp_product_click` | consulta sobre un modelo/colección concreta |
| `store` | `whatsapp_store_click` | consulta sobre una sucursal |
| `final-cta` | `whatsapp_final_cta_click` | visitante que recorrió la landing |
| `floating` | `whatsapp_floating_click` | consulta general persistente en pantallas con espacio suficiente |
| `general` | `whatsapp_general_click` | fallback |

## Mensajes

### Hero
`Hola, vi los zapatos de Matius Perfect en la web. ¿Qué modelos, tallas y colores tienen disponibles?`

### Producto
`Hola, vi el modelo {nombre} en la web de Matius Perfect. ¿Qué tallas y colores tienen disponibles?`

### Sucursal
`Hola, vi la sucursal {nombre} en la web de Matius Perfect. ¿Me comparten su ubicación y horarios de atención?`

### Final CTA
`Hola, recorrí la web de Matius Perfect y quisiera ayuda para encontrar un par. ¿Qué modelos y tallas tienen disponibles?`

### Floating
`Hola, estoy viendo la web de Matius Perfect y quisiera hacer una consulta sobre sus zapatos.`

## Floating WhatsApp

El botón flotante es **soporte**, no la conversión principal.

- En mobile (< `md`) se oculta para no tapar contenido ni controles; la conversión se mantiene mediante Hero, Product Cards, navegación, Stores y Final CTA.
- En desktop/tablet amplio aparece después de superar el Hero.
- Se oculta cuando `#contacto` entra en viewport para no competir con el CTA contextual final.
- Conserva el evento `whatsapp_floating_click` cuando está disponible.

Esta regla proviene del visual QA: un CTA fijo pequeño seguía cubriendo copy en pantallas estrechas, aunque cumpliera el target táctil mínimo.

## Reglas

- No inventar disponibilidad, precios, horarios ni direcciones dentro del mensaje.
- Mantener los nombres de eventos actuales para no romper futuras métricas.
- Si se agrega una nueva fuente, añadirla a `WhatsAppSource`, `trackWhatsAppClick`, este documento y QA.
- CTA de producto debe usar `productName` verificado.
- CTA de tienda debe usar `storeName` existente en `data/stores.ts`.
- No repetir varios CTAs de WhatsApp con el mismo peso visual dentro del mismo viewport.
- Floating WhatsApp es soporte; Hero/Product/Store/Final CTA conservan la intención principal.

## Métricas recomendadas cuando se conecte analytics

- clics por `source`;
- tasa de clic Hero → WhatsApp;
- tasa ProductCard → WhatsApp por producto/colección;
- sucursal más consultada;
- clics final CTA;
- relación floating vs. contextual;
- dispositivo y page_path.

## Definition of Done

- URL usa número configurado y mensaje encoded;
- source/event no cambia accidentalmente;
- producto/sucursal conserva contexto;
- CTAs contextuales siguen visibles y usables en mobile;
- floating no cubre contenido en snapshots;
- CI verde.

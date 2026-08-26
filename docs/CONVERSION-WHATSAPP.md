# Conversión por WhatsApp — Matius Perfect

## Objetivo

WhatsApp es el canal de conversión primario de la landing. La experiencia no debe depender de un único botón flotante: cada CTA debe conservar el contexto de intención que lo originó.

## Fuentes actuales

| Source | Evento | Intención |
|---|---|---|
| `hero` | `whatsapp_hero_click` | visitante interesado después de la propuesta de valor |
| `product` | `whatsapp_product_click` | consulta sobre un modelo/colección concreta |
| `store` | `whatsapp_store_click` | consulta sobre una sucursal |
| `final-cta` | `whatsapp_final_cta_click` | visitante que recorrió la landing |
| `floating` | `whatsapp_floating_click` | consulta general persistente |
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
- CTA visible y usable en mobile;
- CI verde.

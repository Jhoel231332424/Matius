# Matius Perfect — Landing Demo

Foundation para una landing editorial de zapatos de cuero orientada a conversión por WhatsApp.

## Stack
- Next.js 16 + TypeScript
- Tailwind CSS 4
- Motion for React preparado para la capa de interacción

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

## Entorno
Copiar `.env.example` a `.env.local` y completar el número de WhatsApp real antes de publicar.

`ALLOWED_DEV_ORIGINS` acepta una lista separada por comas y solo se configura si el entorno de desarrollo lo requiere.

## Estado
La UI incluida es un wireframe estructural. No contiene claims, direcciones, precios, imágenes ni procesos de fabricación inventados. Ver `docs/DESIGN-SYSTEM.md` y `docs/IMPLEMENTATION-AUDIT.md`.

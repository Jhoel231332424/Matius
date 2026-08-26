# Deployment — Matius Perfect

## Objetivo

Publicar primero un **preview revisable** y mantenerlo fuera de los resultados de búsqueda. La activación de indexación pertenece únicamente al deploy final de producción.

## Entornos

### Local

```env
NEXT_PUBLIC_SITE_URL=https://matiusperfect.com
NEXT_PUBLIC_WHATSAPP_NUMBER=59171431096
NEXT_PUBLIC_ALLOW_INDEXING=false
```

### Preview (Vercel)

Configurar:

```env
NEXT_PUBLIC_SITE_URL=https://matiusperfect.com
NEXT_PUBLIC_WHATSAPP_NUMBER=59171431096
NEXT_PUBLIC_ALLOW_INDEXING=false
```

Además, Vercel expone `VERCEL_ENV=preview`. El código fuerza `noindex,nofollow` cuando detecta ese entorno incluso si alguien configurara accidentalmente `NEXT_PUBLIC_ALLOW_INDEXING=true`.

### Producción final

Solo después de QA, datos finales y aprobación:

```env
NEXT_PUBLIC_SITE_URL=https://matiusperfect.com
NEXT_PUBLIC_WHATSAPP_NUMBER=59171431096
NEXT_PUBLIC_ALLOW_INDEXING=true
```

`VERCEL_ENV=production` + `NEXT_PUBLIC_ALLOW_INDEXING=true` son necesarios para permitir indexación en un deploy de Vercel.

## Estrategia de indexación

En preview:

- HTML emite `robots: noindex, nofollow` mediante Next Metadata.
- `robots.txt` permite crawling para que Google/otros crawlers puedan leer la directiva `noindex`.
- El sitemap no se anuncia desde `robots.txt` mientras la indexación esté desactivada.

No usar `robots.txt: Disallow /` como sustituto de `noindex`: bloquear el crawling puede impedir que el crawler vea la directiva `noindex`.

`noindex` NO es control de acceso. Si un preview contiene información confidencial, usar Deployment Protection/autenticación del proveedor de hosting.

## Checklist de Preview Deploy

Antes de compartir URL:

- [ ] CI del HEAD verde.
- [ ] `NEXT_PUBLIC_ALLOW_INDEXING=false`.
- [ ] `robots.txt` accesible.
- [ ] HTML contiene `noindex`.
- [ ] Home, zapatos, fabricación y tiendas responden 200.
- [ ] WhatsApp abre el número correcto con mensaje contextual.
- [ ] Snapshots mobile/desktop revisados.
- [ ] Lighthouse ejecutado sobre preview.
- [ ] No hay datos de cliente inventados.

## Checklist de Producción

Antes de activar indexación:

- [ ] dominio final confirmado;
- [ ] SSL activo;
- [ ] logo/assets finales;
- [ ] direcciones/horarios reales de tiendas;
- [ ] catálogo/precios revisados;
- [ ] políticas/claims autorizados;
- [ ] analytics conectado y probado;
- [ ] LocalBusiness/Product schema validado solo con datos reales;
- [ ] canonical y Open Graph correctos;
- [ ] Lighthouse/Core Web Vitals revisados sobre infraestructura real;
- [ ] `NEXT_PUBLIC_ALLOW_INDEXING=true` únicamente en Production;
- [ ] Search Console/sitemap solo después del lanzamiento.

## Rollback

Si se detecta un problema después del deploy:

1. volver a `NEXT_PUBLIC_ALLOW_INDEXING=false` si existe riesgo SEO;
2. redeploy del último commit verde;
3. corregir en branch/PR;
4. repetir CI + visual QA;
5. promover nuevamente solo después de validación.

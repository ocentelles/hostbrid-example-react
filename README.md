# Ejemplo original React y Vite

Dos rutas de navegador (`/` y `/about`), imagen propia importada y CSS. Sin backend, login, pagos ni formularios. Licencia MIT.

Node >=22.19.0. `npm ci`, `npm run build`: salida `dist`. `npm run dev` y `npm run preview` son herramientas locales, no servidores de producción.

`VITE_CONTACT_LABEL` es una variable pública de construcción. Todo lo que empiece por `VITE_` puede aparecer en el código que recibe el visitante; no poner claves privadas. Cambiarla requiere un nuevo build.

Las rutas usan History API: abrir `/about` directamente necesita fallback a `index.html` en el alojamiento. El archivo `public/.hostbrid-spa` activa ese fallback en las publicaciones estáticas de Hostbrid. La configuración de alojamiento ya ha sido validada; la nueva publicación del ejemplo está en verificación.

Verificación local del 8 de octubre de 2026: build con versiones exactas Vite 8.3.3 y React/React DOM 19.3.0 obtenidas del registro npm. Chromium a 390/1280 px verificó ambas rutas, navegación, CSS, imagen importada y sustitución de VITE_CONTACT_LABEL por un valor de muestra. El servidor local de prueba proporciona fallback a index.html: esto no demuestra todavía el comportamiento de Hostbrid en producción.

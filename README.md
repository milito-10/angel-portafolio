# ANGEL · Fotografía y video

Portafolio estático en Astro para Angel, fotógrafo y realizador audiovisual de Medellín. El contenido se administra con Decap CMS en `/admin` y cada publicación en Git dispara una nueva compilación de Netlify.

## Requisitos

- Node.js 22 o superior
- npm
- Una cuenta de GitHub y un sitio de Netlify conectado al repositorio para publicar

## Desarrollo local

```bash
npm install
npm run dev
```

Astro muestra la dirección local en la terminal. En local puedes revisar las páginas públicas; el panel `/admin/` requiere que el sitio esté desplegado en Netlify y que Git Gateway esté habilitado.

## Comprobaciones y build

```bash
npm run check
npm run build
npm run preview
```

Astro genera las páginas en `dist/`. Las imágenes fotográficas subidas desde el CMS se procesan al compilar: Astro genera variantes AVIF y WebP según los tamaños requeridos. Los SVG de la carpeta de muestras son ilustraciones de reemplazo, no fotografías.

## Publicar en Netlify

1. Sube este repositorio a GitHub.
2. En Netlify, elige **Add new site → Import an existing project** y conecta el repositorio.
3. Usa **Build command** `npm run build`, **Publish directory** `dist` y la versión de Node `22` (también está declarada en `netlify.toml`).
4. Después de desplegar, ve a **Identity**, habilita Identity y configura el registro como **Invite only**.
5. En Identity → **Services**, habilita **Git Gateway** para la rama `main`. Invita a Angel con su correo desde Identity → **Invite users**.
6. Cuando Angel acepte la invitación, puede entrar a `https://TU-DOMINIO.netlify.app/admin/`. El CMS guarda el contenido en el repositorio; Netlify crea el deploy automáticamente.
7. Cambia `site` en `astro.config.mjs` por el dominio definitivo para que canonical y SEO usen la URL correcta.

El panel usa Decap CMS 3.8.3 y el widget de Netlify Identity; sus orígenes y `unsafe-eval` (requerido por la validación de esquemas del CMS) están permitidos únicamente en `/admin/`. El resto del sitio mantiene una política de scripts same-origin sin `unsafe-eval`.

## Contenido y CMS

- `src/content/works/*.md`: trabajos y sus metadatos.
- `src/content/works/images/`: imágenes subidas junto a cada trabajo.
- `src/content/data/featured.json`: selección y orden de inicio.
- `src/content/data/gallery-order.json`: orden editorial de la galería.
- `src/content/data/brands.json`: logos; la franja se oculta cuando no hay marcas.
- `src/content/data/site-settings.json`: textos principales, enlaces y retrato.

Marca las imágenes de ejemplo para reemplazarlas antes del lanzamiento. No subas archivos de video: usa enlaces de YouTube o Vimeo; se cargan en una fachada ligera solo al pulsar reproducir.

## Formularios y seguridad

El formulario de contacto usa Netlify Forms y un honeypot. Asegúrate de que **Forms** esté habilitado en el sitio de Netlify para recibir los mensajes. `public/_headers` establece CSP, HSTS, protección contra MIME sniffing, política de referer, permisos de navegador y restricción de iframes externos.

Para comprobar dependencias:

```bash
npm audit
```

## Enviar el proyecto a GitHub

Si todavía no inicializaste el repositorio, reemplaza la URL de ejemplo por la del repositorio creado en GitHub:

```bash
git init
git add .
git commit -m "Construye el portafolio de Angel"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Para publicar cambios después:

```bash
git add .
git commit -m "Actualiza el portafolio"
git push
```

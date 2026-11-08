# ANGEL · Fotografía y video

Portafolio estático en Astro para Angel, fotógrafo y realizador audiovisual de Medellín. El contenido se administra con Decap CMS en `/admin` y cada publicación en Git dispara una nueva compilación de Netlify.

## Requisitos

- Node.js 22 o superior
- npm
- Una cuenta de GitHub y un sitio de Netlify conectado al repositorio para publicar

## Desarrollo local

Antes de trabajar localmente, ejecuta `git pull` para traer los cambios más recientes del repositorio.

```bash
npm install
npm run dev
```

Astro muestra la dirección local en la terminal. En local puedes revisar las páginas públicas y probar `/admin/`: la autorización OAuth se solicita para el sitio Netlify configurado y tu cuenta de GitHub debe tener acceso de colaborador al repositorio.

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
4. En GitHub, abre `milito-10/angel-portafolio` → **Settings → Collaborators** y agrega la cuenta de GitHub de Angel. Angel debe aceptar la invitación al repositorio antes de entrar al CMS.
5. Confirma que el proveedor OAuth de GitHub esté instalado y disponible en el sitio de Netlify conectado. La configuración de Decap usa ese proveedor para iniciar la autorización de GitHub.
6. Angel inicia sesión en GitHub con la cuenta invitada, abre `https://portafolio-de-contenidos.netlify.app/admin/` y pulsa **Login with GitHub**. Luego autoriza el acceso solicitado por el sitio.
7. El CMS guarda los cambios directamente en la rama `main`; Netlify inicia una nueva compilación y publicación automáticamente.
8. El dominio está definido en `site` de `astro.config.mjs`. Si se compra un dominio propio, cámbialo ahí.

El panel usa Decap CMS 3.8.3 con el backend de GitHub. `public/_headers` permite los orígenes necesarios para GitHub, Netlify OAuth y Decap solo en `/admin/`, incluyendo las directivas inline requeridas por el preview iframe; el resto del sitio mantiene una política de scripts same-origin sin `unsafe-inline` ni `unsafe-eval`.

## Contenido y CMS

- `src/content/works/*.md`: trabajos y sus metadatos.
- `src/content/works/images/`: imágenes subidas junto a cada trabajo.
- `src/content/data/featured.json`: selección y orden de inicio.
- `src/content/data/gallery-order.json`: orden editorial de la galería.
- `src/content/data/brands.json`: logos; la franja se oculta cuando no hay marcas.
- `src/content/data/site-settings.json`: textos principales, enlaces y retrato.

Reemplaza las imágenes de ejemplo (SVG) por fotos reales antes del lanzamiento. No subas archivos de video: usa enlaces de YouTube o Vimeo; se cargan en una fachada ligera solo al pulsar reproducir.

## Formularios y seguridad

El formulario de contacto usa Netlify Forms y un honeypot. Asegúrate de que **Forms** esté habilitado en el sitio de Netlify para recibir los mensajes. `public/_headers` establece CSP, HSTS, protección contra MIME sniffing, política de referer, permisos de navegador y restricción de iframes externos.

Para recibir los mensajes por correo, en Netlify ve a Forms → Form notifications → Add notification → Email notification y escribe el correo de Angel.

Para comprobar dependencias:

```bash
npm audit
```

## Enviar el proyecto a GitHub

Para publicar cambios en el repositorio existente:

```bash
git pull
git add .
git commit -m "mensaje"
git push
```

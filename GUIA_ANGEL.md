# Guía de Angel: actualizar tu portafolio

## Entrar al administrador

1. Confirma con quien administra el sitio que tu cuenta de GitHub fue agregada como colaboradora del repositorio `milito-10/angel-portafolio`.
2. Abre la invitación que GitHub envió a tu cuenta y acéptala. Debes mantener acceso al repositorio para editar y publicar contenido.
3. Entra a GitHub con esa misma cuenta y abre `https://TU-DOMINIO.netlify.app/admin/`. Si estás probando localmente, abre `http://127.0.0.1:4323/admin/`; la autorización usa el dominio Netlify del sitio, no `127.0.0.1`.
4. Pulsa **Login with GitHub** y, si GitHub lo solicita, autoriza el acceso del sitio.
5. El panel está en español: encontrarás **Trabajos**, **Orden de la galería**, **Destacados**, **Marcas** y **Ajustes**.
6. Si no puedes entrar, confirma que aceptaste la invitación y contacta a quien administra el repositorio. No compartas tu contraseña ni códigos de acceso.

## Crear o editar un trabajo con fotos

1. Entra a **Trabajos** y pulsa **Nuevo trabajo**.
2. Escribe el título, escoge la categoría y deja **Tipo** en **Fotografía**.
3. En **Imagen**, elige **Subir** para cargar un JPG, PNG o WebP desde tu computador, incluso fotos grandes de 5–15 MB. Las imágenes de trabajos se guardan en `src/content/works/images`; Astro las optimiza al compilar el sitio.
4. Completa la descripción, el cliente si aplica y la fecha. Activa **Publicado** para que aparezca en la web.
5. Deja **Trabajo de ejemplo** apagado cuando sea un trabajo real.
6. Pulsa **Publicar → Publicar ahora**. El cambio se confirma directamente en la rama `main` de GitHub y Netlify inicia el deploy automáticamente.
7. Para editar o eliminar un trabajo, ábrelo desde **Trabajos** y usa la opción correspondiente. Eliminar confirma un cambio permanente en GitHub. Las referencias a trabajos eliminados se omiten de la galería y los destacados.

## Agregar un videoclip

1. Crea un trabajo como en los pasos anteriores y cambia **Tipo** a `video`.
2. Pega el enlace de YouTube o Vimeo en **Enlace del video** y sube su miniatura desde tu computador en **Imagen**.
3. Pulsa **Publicar → Publicar ahora**. El cambio se confirma directamente en `main` y Netlify inicia el deploy. El video no se sube al sitio: solo se carga cuando alguien pulsa reproducir.

## Cambiar el orden de la galería

1. Abre **Orden de la galería**.
2. Arrastra los trabajos para ordenarlos. Usa **Agregar** para sumar uno publicado.
3. Pulsa **Publicar → Publicar ahora** para confirmar los cambios directamente en `main`.

Los trabajos publicados que no estén en esta lista aparecen al final, ordenados por fecha. Los trabajos en borrador o con **Publicado** apagado no se muestran.

## Elegir los destacados de Inicio

1. Abre **Destacados**.
2. Agrega los trabajos que quieras mostrar y arrástralos para definir el orden. La página de Inicio muestra hasta los que selecciones.
3. Pulsa **Publicar → Publicar ahora** para confirmar los cambios directamente en `main`. El primer destacado también se usa como imagen principal.

## Agregar o cambiar marcas

1. Entra a **Marcas con las que he trabajado**.
2. Agrega el nombre, sube el logo desde tu computador y, si quieres, escribe el enlace público de la marca. Los logos y el retrato de Ajustes se guardan en `src/content/data/images`.
3. Arrastra las marcas para cambiar su orden y pulsa **Publicar → Publicar ahora**. Si la lista queda vacía, la franja no aparece en Inicio.

## Cambiar datos y textos

1. Abre **Ajustes → Textos y datos de contacto**.
2. Escribe el WhatsApp con código de país y número, solo los dígitos (por ejemplo, `573001234567`), y pega el enlace completo de Instagram.
3. Actualiza el título y subtítulo de Inicio, la biografía y el retrato. El retrato debe ser una imagen, no un video.
4. Pulsa **Publicar → Publicar ahora**. Usa enlaces `https://` para redes.

## Eliminar una imagen de la biblioteca

1. Abre la biblioteca de medios desde un campo de imagen.
2. Selecciona la imagen que quieras quitar y usa la opción para eliminarla.
3. Antes de confirmar, comprueba que ningún trabajo, logo o retrato todavía la use. La eliminación se guarda en GitHub y puede dejar una imagen rota si otro contenido la referencia.

## Recomendaciones

- No subas archivos de video; usa YouTube o Vimeo.
- Reemplaza los trabajos y retratos identificados como **MUESTRA** antes de anunciar el sitio.
- Cada acción de guardar o eliminar se confirma en GitHub y dispara un deploy de Netlify; revisa el resultado cuando finalice.
- Revisa el deploy en Netlify si un cambio no aparece después de unos minutos.
- Para dudas de acceso o publicación, contacta a quien administra el sitio; no compartas tu contraseña.

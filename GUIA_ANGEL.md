# Guía de Angel: actualizar tu portafolio

## Entrar al administrador

1. Confirma con quien administra el sitio que tu cuenta de GitHub fue agregada como colaboradora del repositorio `milito-10/angel-portafolio`.
2. Abre la invitación que GitHub envió a tu cuenta y acéptala. Debes mantener acceso al repositorio para editar y publicar contenido.
3. Entra a GitHub con esa misma cuenta y abre `https://TU-DOMINIO.netlify.app/admin/`. Si estás probando localmente, abre `http://127.0.0.1:4323/admin/`; la autorización usa el dominio Netlify del sitio, no `127.0.0.1`.
4. Pulsa **Login with GitHub** y, si GitHub lo solicita, autoriza el acceso del sitio.
5. En el menú vas a encontrar **Trabajos**, **Orden de trabajos**, **Marcas** y **Ajustes**.
6. Si no puedes entrar, confirma que aceptaste la invitación y contacta a quien administra el repositorio. No compartas tu contraseña ni códigos de acceso.

## Publicar un trabajo con fotos

1. Entra a **Trabajos** y pulsa **Nuevo trabajo**.
2. Escribe el título, escoge la categoría y deja **Tipo** en `foto`.
3. Sube una imagen horizontal o vertical en **Imagen o miniatura**. No hace falta reducirla antes: al publicar, el sitio crea versiones livianas para celular y computador.
4. Completa la descripción, el cliente si aplica y la fecha. Activa **Publicado** para que aparezca en la web.
5. Deja **Muestra de ejemplo** apagado cuando sea un trabajo real.
6. Pulsa **Guardar** y luego **Publicar**. El sitio se actualiza al terminar el deploy de Netlify, normalmente en uno o dos minutos.

## Agregar un videoclip

1. Crea un trabajo como en los pasos anteriores y cambia **Tipo** a `video`.
2. Pega el enlace de YouTube o Vimeo en **Enlace del video** y sube su miniatura en **Imagen o miniatura**.
3. Guarda y publica. El video no se sube al sitio: solo se carga cuando alguien pulsa reproducir.

## Cambiar el orden de la galería

1. Abre **Orden de trabajos → Orden de galería**.
2. Arrastra los trabajos para ordenarlos. Usa **Agregar** para sumar uno publicado.
3. Guarda y publica los cambios.

Los trabajos publicados que no estén en esta lista aparecen al final, ordenados por fecha. Los trabajos en borrador o con **Publicado** apagado no se muestran.

## Elegir los destacados de Inicio

1. Abre **Orden de trabajos → Trabajos destacados**.
2. Agrega los trabajos que quieras mostrar y arrástralos para definir el orden. La página de Inicio muestra hasta los que selecciones.
3. Guarda y publica. El primer destacado también se usa como imagen principal.

## Agregar o cambiar marcas

1. Entra a **Marcas con las que he trabajado**.
2. Agrega el nombre, sube el logo y, si quieres, escribe el enlace público de la marca.
3. Arrastra las marcas para cambiar su orden; guarda y publica. Si la lista queda vacía, la franja no aparece en Inicio.

## Cambiar datos y textos

1. Abre **Ajustes → Textos y datos de contacto**.
2. Escribe el WhatsApp con código de país y número, solo los dígitos (por ejemplo, `573001234567`), y pega el enlace completo de Instagram.
3. Actualiza el título y subtítulo de Inicio, la biografía y el retrato. El retrato debe ser una imagen, no un video.
4. Guarda y publica. Usa enlaces `https://` para redes.

## Recomendaciones

- No subas archivos de video; usa YouTube o Vimeo.
- Reemplaza los trabajos y retratos identificados como **MUESTRA** antes de anunciar el sitio.
- Revisa el deploy en Netlify si un cambio no aparece después de unos minutos.
- Para dudas de acceso o publicación, contacta a quien administra el sitio; no compartas tu contraseña.

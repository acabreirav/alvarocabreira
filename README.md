# alvarocabreira.com

Mi web personal. Next.js exportado como sitio estático y publicado en Vercel.

## Editar el contenido

Todo el texto (español e inglés) está en `lib/content.ts`. Edita, haz push a `main` y Vercel publica solo.

- **Foto:** deja la imagen en `public/foto.jpg` y cambia `photo: null` por `photo: "/foto.jpg"` en `lib/content.ts`.
- **CV:** reemplaza `public/cv-alvaro-cabreira.pdf`.
- **Proyecto nuevo:** copia un bloque en `projects.items` (en `es` y en `en`). `line` elige el color de línea de metro.

## Correr localmente

```bash
npm install
npm run dev
```

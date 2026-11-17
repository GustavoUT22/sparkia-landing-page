# Landing de la academia

Next.js 16 (App Router), React 19, TypeScript y Tailwind CSS 4. Diseño basado en el prototipo de Figma Make (`../figma-export`).

## Comandos

| Comando | Qué hace |
|---|---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor de desarrollo en http://localhost:3000 |
| `pnpm lint` | Revisa el código con ESLint |
| `pnpm build` | Compila la versión de producción |
| `pnpm start` | Sirve la versión compilada |

## Dónde editar

| Qué | Archivo |
|---|---|
| Marca, contacto, redes, foto del instructor, menú | `src/config/site.ts` |
| Cursos (Kids, Teens, Universitarios) | `src/content/courses.ts` |
| Metodología, reglas para padres, precios, preguntas frecuentes | `src/content/home.ts` |
| Secciones de la página | `src/components/sections/` |
| Estilos y colores | `src/app/globals.css` |
| Título y descripción para Google | `src/app/layout.tsx` y `siteConfig.description` |

## Pendientes antes de publicar

| Dato | Dónde | Valor actual |
|---|---|---|
| Número de WhatsApp (51 + número, solo dígitos) | `siteConfig.contact.whatsappNumber` | `51999999999` (falso) |
| Correo de contacto | `siteConfig.contact.email` | `contacto@example.com` |
| Redes sociales | `siteConfig.social` | Vacías (no se muestran) |
| Foto del instructor | Archivo en `public/` y ruta en `siteConfig.instructor.photo` | Se muestran las iniciales |
| Formato del curso universitario | `details` del curso `uni` en `src/content/courses.ts` | Vacío hasta tener la ficha |
| Dominio (sparkea.pe) | `NEXT_PUBLIC_SITE_URL` en `.env.local` | `http://localhost:3000` |
| Ícono del sitio | `src/app/icon.svg` | `</>` genérico |
| Precios | `src/content/home.ts` | Referenciales, por validar |

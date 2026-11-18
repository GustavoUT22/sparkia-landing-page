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

## Páginas

Todas son estáticas (se generan al compilar) y tienen su propia imagen para compartir en WhatsApp y Facebook.

| URL | Qué es |
|---|---|
| `/` | Página principal |
| `/cursos/kids-scratch-videojuegos` | Curso Kids: videojuegos con Scratch (8 a 12 años) |
| `/cursos/teens-python-mini-rpg` | Curso Teens: Python y mini-RPG (13 a 17 años) |
| `/cursos/universitarios-logica-algoritmos` | Curso de lógica y algoritmos (propuesta, sin precio) |
| `/cursos/taller-ia-videojuegos-kids` | Taller de videojuegos con IA (sin precio) |
| `/clases-particulares-programacion` | Clases particulares (S/35 y S/120) |
| `/guias` | Índice de guías |
| `/guias/<slug>` | 5 guías para padres y estudiantes |
| `/condiciones` | Condiciones del servicio (versión preliminar) |
| `/privacidad` | Aviso de privacidad (versión preliminar) |
| `/sitemap.xml` y `/robots.txt` | Generados automáticamente |

## Dónde editar

| Qué | Archivo |
|---|---|
| Marca, contacto, redes, foto del instructor, menú | `src/config/site.ts` |
| Tarjetas y secciones de cursos de la página principal | `src/content/courses.ts` |
| Metodología, reglas para padres, precios, preguntas frecuentes de la principal | `src/content/home.ts` |
| Páginas de cursos: textos, temario, requisitos, precio, preguntas, mensaje de WhatsApp, enlaces relacionados, título y descripción para Google | `src/content/landings.ts` |
| Guías (bloques `subtitulo`, `parrafo`, `lista`) | `src/content/guias.ts` |
| Condiciones y privacidad | `src/content/legal.ts` |
| Diseño de las páginas de cursos | `src/components/landing/CourseLandingPage.tsx` |
| Diseño de guías y páginas legales | `src/components/landing/ArticlePages.tsx` |
| Imagen para compartir (Open Graph) | `src/lib/og.tsx` |
| Metadatos y datos estructurados (JSON-LD) | `src/lib/seo.ts` |
| Estilos y colores | `src/app/globals.css` |

### Agregar una guía nueva

1. Agrega el slug al tipo `GuiaSlug` y un objeto nuevo en `guias` dentro de `src/content/guias.ts` (descripción de 140 a 160 caracteres).
2. Copia una carpeta de `src/app/guias/<slug>/` con el nuevo nombre y cambia el slug en `page.tsx` y `opengraph-image.tsx`.
3. El sitemap, el índice de guías y los enlaces se actualizan solos.

## Pendientes antes de publicar

| Dato | Dónde | Valor actual |
|---|---|---|
| Correo de contacto | `siteConfig.contact.email` | `contacto@example.com` (no se muestra mientras sea de ejemplo) |
| Redes sociales | `siteConfig.social` | Vacías (no se muestran) |
| Foto del instructor | Archivo en `public/` y ruta en `siteConfig.instructor.photo` | Se muestran las iniciales |
| Formato y precio del curso universitario | `src/content/landings.ts` | Propuesta, "consulta horarios por WhatsApp" |
| Precio y fechas del taller de IA | `src/content/landings.ts` | Sin precio, "consulta por WhatsApp" |
| Puntos marcados como propuesta en condiciones y privacidad | `src/content/legal.ts` | Devoluciones y plazos de conservación por confirmar |
| Libro de Reclamaciones virtual | `src/content/legal.ts` | Pendiente |
| Ícono del sitio | `src/app/icon.svg` | `</>` genérico |
| Precios | `src/content/home.ts` y `src/content/landings.ts` | Referenciales, por validar |

## Checklist SEO para el dueño

1. En Vercel, en Settings > Environment Variables, define:
   - `NEXT_PUBLIC_SITE_URL` con la URL pública sin barra final (por ahora `https://sparkia-landing-page.vercel.app`). Sin esta variable, el canonical, el sitemap y las imágenes apuntan a `localhost`.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` con el código de la etiqueta HTML que da Google Search Console (solo el valor de `content`). Si está vacía, la etiqueta no se publica.
   - Vuelve a desplegar después de cambiarlas.
2. En [Google Search Console](https://search.google.com/search-console) agrega la propiedad con el prefijo de URL, verifícala con la etiqueta HTML y envía `/sitemap.xml` en la sección Sitemaps.
3. Usa "Inspección de URLs" y "Solicitar indexación" para la principal, cada curso y cada guía.
4. Revisa los datos estructurados con la [prueba de resultados enriquecidos](https://search.google.com/test/rich-results) y la vista previa al compartir un enlace por WhatsApp.
5. Considera crear un Perfil de Empresa en Google como negocio de área de servicio (Perú), sin publicar una dirección.
6. Cuando sea posible, compra el dominio `sparkia.pe`, conéctalo en Vercel y actualiza `NEXT_PUBLIC_SITE_URL`; en Search Console agrega la nueva propiedad.
7. Publica guías nuevas con regularidad, respondiendo preguntas reales que recibas por WhatsApp, y enlázalas al curso relacionado.
8. No agregues testimonios, cifras ni reseñas hasta tenerlos reales y con autorización.

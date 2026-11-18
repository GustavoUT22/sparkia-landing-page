import { GuiasIndexPage } from "@/components/landing/ArticlePages";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Guías para padres y estudiantes sobre programación",
  description:
    "Guías gratuitas para madres, padres y estudiantes: a qué edad empezar a programar, Scratch o Python, crear videojuegos, vacaciones útiles y exámenes.",
  path: "/guias",
});

export default function GuiasPage() {
  return <GuiasIndexPage />;
}

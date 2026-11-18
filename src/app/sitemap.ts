import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/config/site";
import { guias } from "@/content/guias";
import { condiciones, privacidad } from "@/content/legal";
import { landings } from "@/content/landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (
    path: string,
    changeFrequency: "weekly" | "monthly" | "yearly",
    priority: number,
    lastModified?: string,
  ) => ({
    url: absoluteUrl(path),
    changeFrequency,
    priority,
    ...(lastModified ? { lastModified } : {}),
    alternates: { languages: { "es-PE": absoluteUrl(path) } },
  });

  return [
    entry("/", "monthly", 1),
    ...landings.map((landing) => entry(landing.path, "monthly", 0.9)),
    entry("/guias", "weekly", 0.7),
    ...guias.map((guia) => entry(guia.path, "monthly", 0.6, guia.dateModified)),
    entry(condiciones.path, "yearly", 0.2),
    entry(privacidad.path, "yearly", 0.2),
  ];
}

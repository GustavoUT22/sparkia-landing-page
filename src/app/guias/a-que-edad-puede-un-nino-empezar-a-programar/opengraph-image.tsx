import { getGuia } from "@/content/guias";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

const guia = getGuia("a-que-edad-puede-un-nino-empezar-a-programar");

export const alt = guia.title;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: `Guía para ${guia.audience.toLowerCase()}`, title: guia.title });
}

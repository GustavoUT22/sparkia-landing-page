import { getLanding } from "@/content/landings";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

const landing = getLanding("universitarios-logica-algoritmos");

export const alt = landing.seo.ogTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ eyebrow: landing.seo.ogEyebrow, title: landing.seo.ogTitle });
}

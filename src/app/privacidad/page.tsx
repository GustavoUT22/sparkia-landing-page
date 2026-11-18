import { LegalArticlePage, legalMetadata } from "@/components/landing/ArticlePages";
import { privacidad } from "@/content/legal";

export const metadata = legalMetadata(privacidad);

export default function PrivacidadPage() {
  return <LegalArticlePage page={privacidad} />;
}

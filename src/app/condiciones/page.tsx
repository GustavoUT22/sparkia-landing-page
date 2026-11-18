import { LegalArticlePage, legalMetadata } from "@/components/landing/ArticlePages";
import { condiciones } from "@/content/legal";

export const metadata = legalMetadata(condiciones);

export default function CondicionesPage() {
  return <LegalArticlePage page={condiciones} />;
}

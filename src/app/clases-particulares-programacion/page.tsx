import { CourseLandingPage, landingMetadata } from "@/components/landing/CourseLandingPage";

export const metadata = landingMetadata("clases-particulares-programacion");

export default function ClasesParticularesPage() {
  return <CourseLandingPage slug="clases-particulares-programacion" />;
}

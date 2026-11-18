import { CourseLandingPage, landingMetadata } from "@/components/landing/CourseLandingPage";

export const metadata = landingMetadata("universitarios-logica-algoritmos");

export default function UniversitariosPage() {
  return <CourseLandingPage slug="universitarios-logica-algoritmos" />;
}

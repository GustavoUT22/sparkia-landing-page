import { CourseLandingPage, landingMetadata } from "@/components/landing/CourseLandingPage";

export const metadata = landingMetadata("kids-scratch-videojuegos");

export default function KidsScratchPage() {
  return <CourseLandingPage slug="kids-scratch-videojuegos" />;
}

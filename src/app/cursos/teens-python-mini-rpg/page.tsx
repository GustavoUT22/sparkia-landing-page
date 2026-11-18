import { CourseLandingPage, landingMetadata } from "@/components/landing/CourseLandingPage";

export const metadata = landingMetadata("teens-python-mini-rpg");

export default function TeensPythonPage() {
  return <CourseLandingPage slug="teens-python-mini-rpg" />;
}

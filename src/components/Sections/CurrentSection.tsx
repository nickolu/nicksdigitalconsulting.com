import ContactSection from "@/components/Sections/ContactSection";
import AboutSection from "@/components/Sections/AboutSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import RandomSection from "@/components/Sections/RandomSection";

export default function CurrentSection({ action }: { action: string }) {
  switch (action) {
    case "contact":
      return <ContactSection />;
    case "about":
      return <AboutSection />;
    case "services":
      return <ServicesSection />;
    case "error":
      return <AboutSection />;
    default:
      return <RandomSection />;
  }
}

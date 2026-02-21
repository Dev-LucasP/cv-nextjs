import HeroSection from "./components/MoiSection/MoiSection";
import ExperienceSection from "./components/ExperienceSection/Experience";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

import HeroSection from '../components/landing/HeroSection';
import AboutMeSection from '../components/landing/AboutMeSection';
import SkillTreeSection from '../components/landing/SkillTreeSection';
import ProjectsSection from '../components/landing/ProjectsSection';
import ContactSection from '../components/landing/ContactSection';

/**
 * HomePage 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;

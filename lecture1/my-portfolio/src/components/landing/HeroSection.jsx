import SectionContainer from '../ui/SectionContainer';

/**
 * HeroSection 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <HeroSection />
 */
function HeroSection() {
  return (
    <SectionContainer
      id="hero"
      title="Hero"
      description="여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
      isAlt
    />
  );
}

export default HeroSection;

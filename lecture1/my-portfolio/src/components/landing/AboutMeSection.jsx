import SectionContainer from '../ui/SectionContainer';

/**
 * AboutMeSection 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <AboutMeSection />
 */
function AboutMeSection() {
  return (
    <SectionContainer
      id="about-me"
      title="About Me"
      description="여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다."
    />
  );
}

export default AboutMeSection;

import SectionContainer from '../ui/SectionContainer';

/**
 * ProjectsSection 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  return (
    <SectionContainer
      id="projects"
      title="Projects"
      description="여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다."
    />
  );
}

export default ProjectsSection;

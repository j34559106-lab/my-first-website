import SectionContainer from '../ui/SectionContainer';

/**
 * SkillTreeSection 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <SectionContainer
      id="skill-tree"
      title="Skill Tree"
      description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
      isAlt
    />
  );
}

export default SkillTreeSection;

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * SectionContainer 컴포넌트
 *
 * Props:
 * @param {string} title - 섹션 제목 [Required]
 * @param {string} description - 섹션 설명 텍스트 [Required]
 * @param {boolean} isAlt - 대체 배경색(연보라) 사용 여부 [Optional, 기본값: false]
 * @param {string} id - 섹션 anchor id [Optional]
 * @param {node} children - 제목/설명 아래에 추가로 렌더링할 콘텐츠 [Optional]
 *
 * Example usage:
 * <SectionContainer title="Hero" description="설명" isAlt />
 */
function SectionContainer({ title, description, isAlt = false, id, children }) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: '100%',
        bgcolor: isAlt ? 'background.default' : 'background.paper',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: '1.6rem', md: '2.2rem' },
            fontWeight: 600,
            color: 'primary.main',
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: 'text.secondary',
          }}
        >
          {description}
        </Typography>
        {children}
      </Container>
    </Box>
  );
}

export default SectionContainer;

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * AboutMePage 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <AboutMePage />
 */
function AboutMePage() {
  return (
    <Box
      sx={{
        width: '100%',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, md: 3 }, textAlign: 'center' }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            fontWeight: 600,
            color: 'primary.main',
            mb: 2,
          }}
        >
          About Me
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: 'text.secondary',
          }}
        >
          About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutMePage;

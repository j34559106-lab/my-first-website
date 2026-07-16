import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
];

/**
 * Navbar 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <Navbar />
 */
function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="span"
            sx={{ fontWeight: 700, color: 'primary.main' }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 } }}>
            {NAV_ITEMS.map(({ label, path }) => (
              <Button
                key={path}
                component={NavLink}
                to={path}
                end={path === '/'}
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: '0.8rem', md: '0.95rem' },
                  '&.active': {
                    color: 'primary.main',
                    fontWeight: 700,
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

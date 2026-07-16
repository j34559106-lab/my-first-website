import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/common/Navbar';
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ProjectsPage from './pages/ProjectsPage';

/**
 * App 컴포넌트
 *
 * Props: 없음 (children 없음)
 *
 * Example usage:
 * <App />
 */
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

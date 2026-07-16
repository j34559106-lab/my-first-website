import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A5ACD',
      light: '#8F83DA',
      dark: '#4A3F90',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#00BCD4',
      dark: '#0096AA',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F3F1FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
      disabled: '#888888',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;

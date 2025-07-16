export const theme = {
  colors: {
    primary: '#FFD700', // Gold
    secondary: '#4CAF50', // Green
    text: '#333333',
    background: '#FFFFFF',
    lightBackground: '#F9F9F9',
    accent: '#FF9800',
    error: '#F44336',
    success: '#4CAF50',
  },
  fonts: {
    main: "'Poppins', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};

export type Theme = typeof theme;

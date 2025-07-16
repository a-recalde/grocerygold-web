import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
  
  button {
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export default GlobalStyles;

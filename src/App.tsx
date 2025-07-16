import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import PrivacyPage from './pages/Privacy/PrivacyPage';
import TermsPage from './pages/Terms/TermsPage';

// Add a component to handle the redirect
const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirectPath = params.get('redirect');
    
    if (redirectPath) {
      // Remove the redirect query parameter
      const newUrl = window.location.pathname + window.location.search.replace(/[?&]redirect=[^&]*(&|$)/, '').replace(/\?$/, '');
      window.history.replaceState({}, '', newUrl);
      
      // Navigate to the intended path
      navigate('/' + redirectPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <RedirectHandler />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

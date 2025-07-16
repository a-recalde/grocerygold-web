import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

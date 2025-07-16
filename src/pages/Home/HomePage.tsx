import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import DownloadSection from './DownloadSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
    </>
  );
};

export default HomePage;

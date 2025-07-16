import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  .header {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  .icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 0;
  }
  
  p {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Browse & Submit',
      description: 'Discover local deals and contribute your own finds. Easy filtering by store and location.'
    },
    {
      icon: '✅',
      title: 'Verify Value',
      description: 'Community verification ensures deals are legitimate and still available.'
    },
    {
      icon: '🔔',
      title: 'Get Notified',
      description: 'Receive alerts when amazing deals appear near you based on your preferences.'
    }
  ];
  
  return (
    <FeaturesContainer>
      <div className="container">
        <SectionTitle>
          <h2>How GroceryGold Works</h2>
          <p>A community-powered platform that helps you find and share the best grocery deals in your area.</p>
        </SectionTitle>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <div className="header">
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesSection;

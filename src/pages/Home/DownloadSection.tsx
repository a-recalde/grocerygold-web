import React from 'react';
import styled from 'styled-components';

const DownloadContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const DownloadContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const DownloadText = styled.div`
  flex: 1;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    opacity: 0.8;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`;



const AppStoreButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
  }
  
  a {
    display: inline-block;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const DownloadSection: React.FC = () => {
  return (
    <DownloadContainer>
      <div className="container">
        <DownloadContent>
          <DownloadText>
            <h2>Download GroceryGold Today</h2>
            <p>
              Join our community of savvy shoppers and start discovering exceptional grocery deals in your area.
              Available for iOS and Android devices.
            </p>
            <AppStoreButtons>
              <div style={{ width: '160px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <img src="/app-store-badge.svg" alt="Download on App Store" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </a>
              </div>
              <div style={{ width: '160px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                  <img src="/google-play-badge.png" alt="Get it on Google Play" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </a>
              </div>
            </AppStoreButtons>
          </DownloadText>

        </DownloadContent>
      </div>
    </DownloadContainer>
  );
};

export default DownloadSection;

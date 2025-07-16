import React from 'react';
import styled from 'styled-components';
import AppStoreBadges from '../../components/AppStoreBadges';

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
            <AppStoreBadges />
          </DownloadText>

        </DownloadContent>
      </div>
    </DownloadContainer>
  );
};

export default DownloadSection;

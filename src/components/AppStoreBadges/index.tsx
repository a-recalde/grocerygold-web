import React from 'react';
import styled from 'styled-components';

const AppStoreButtons = styled.div`
  display: flex;
  gap: 5px;
  margin-top: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    max-width: 160px;
    margin: ${({ theme }) => theme.spacing.md} auto 0;
  }
  
  a {
    display: inline-block;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const BadgeContainer = styled.div`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

interface AppStoreBadgesProps {
  className?: string;
  appleHref?: string;
  googleHref?: string;
}

const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({
  className,
  appleHref = 'https://apps.apple.com',
  googleHref = 'https://play.google.com',
}) => {
  return (
    <AppStoreButtons className={className}>
      <BadgeContainer>
        <a href={appleHref} target="_blank" rel="noopener noreferrer">
          <img src="/app-store-badge.svg" alt="Download on App Store" />
        </a>
      </BadgeContainer>
      <BadgeContainer>
        <a href={googleHref} target="_blank" rel="noopener noreferrer">
          <img src="/google-play-badge.png" alt="Get it on Google Play" />
        </a>
      </BadgeContainer>
    </AppStoreButtons>
  );
};

export default AppStoreBadges;

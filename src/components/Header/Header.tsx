import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.small};
  position: sticky;
  top: 0;
  z-index: 100;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  
  img {
    height: 50px;
    width: auto;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Nav and NavList components removed as they're not needed for a single-page site without navigation


// NavItem removed as it's no longer used in the single-page site


// Mobile menu removed as it's not needed for a single-page site


// Mobile menu removed as it's not needed for a single-page site


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderContent>
          <Logo>
            <Link to="/">
              <img src="/logo.png" alt="GroceryGold Logo" />
              <span>GroceryGold</span>
            </Link>
          </Logo>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};

export default Header;

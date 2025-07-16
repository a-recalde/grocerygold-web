import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text};
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      
      a {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.8;
        transition: opacity 0.2s ease;
        
        &:hover {
          opacity: 1;
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;

const Copyright = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  font-size: 0.9rem;
`;



const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterColumn>
            <h3>GroceryGold</h3>
            <p>Your community for exceptional grocery deals. Find and share amazing deals in your local area.</p>
          </FooterColumn>



          <FooterColumn>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Support</h3>
            <ul>
              <li><a href="mailto:support@grocerygold.app">support@grocerygold.app</a></li>
            </ul>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          <p>&copy; {currentYear} GroceryGold. All rights reserved.</p>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;

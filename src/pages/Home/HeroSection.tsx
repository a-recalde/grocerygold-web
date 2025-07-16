import React from 'react';
import styled from 'styled-components';
import AppStoreBadges from '../../components/AppStoreBadges';

const HeroContainer = styled.section`
  padding: 8rem 0 5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, #FFC107 100%);
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: white;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;  

const PhoneMockup = styled.div`
  position: relative;
  width: 280px;
  height: 560px;
  background: #333;
  border-radius: 36px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  border: 3px solid #333;
  overflow: hidden;
`;

const PhoneScreen = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(180deg, #333 60px, #f8f8f8 60px, #f0f0f0 100%);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AppHeader = styled.div`
  height: 60px;
  background: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-icon {
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const DealsList = styled.div`
  flex: 1;
  padding: 10px;
  overflow: hidden;
`;

const Deal = styled.div`
  background: white;
  border-radius: 10px;
  margin-bottom: 12px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  
  .store {
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
  }
  
  .title {
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 4px;
  }
  
  .price {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 2px;
  }
  
  .meta {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin-top: 6px;
  }
`;



const AddButton = styled.div`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;


const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <HeroText>
            <h1>Your Community for Exceptional Grocery Deals</h1>
            <p>
              GroceryGold helps shoppers find and share amazing grocery deals in their local area. 
              Powered by a community of savvy shoppers who spot and share deals they find while shopping.
            </p>
            <AppStoreBadges />
          </HeroText>
          <HeroImage>
            <PhoneMockup>
              <PhoneScreen>
                <AppHeader>
                  <div className="logo">
                    <img src="/logo.png" alt="GroceryGold" style={{ height: '30px', marginRight: '8px' }} />
                    GroceryGold
                  </div>
                </AppHeader>
                <DealsList>
                  <Deal>
                    <div className="store">Whole Foods Market</div>
                    <div className="title">Organic Avocados</div>
                    <div className="price">$1.49 each</div>
                    <div className="meta">
                      <span>2.3 miles away</span>
                      <span>Posted 1h ago</span>
                    </div>
                  </Deal>
                  <Deal>
                    <div className="store">Trader Joe's</div>
                    <div className="title">Cage-Free Eggs</div>
                    <div className="price">$2.99 / dozen</div>
                    <div className="meta">
                      <span>1.5 miles away</span>
                      <span>Posted 3h ago</span>
                    </div>
                  </Deal>
                  <Deal>
                    <div className="store">Safeway</div>
                    <div className="title">Ben & Jerry's Ice Cream</div>
                    <div className="price">BOGO Free</div>
                    <div className="meta">
                      <span>0.8 miles away</span>
                      <span>Posted 5h ago</span>
                    </div>
                  </Deal>
                </DealsList>
                <AddButton>+</AddButton>
              </PhoneScreen>
            </PhoneMockup>
          </HeroImage>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default HeroSection;

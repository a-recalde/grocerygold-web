import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem 6rem;
  color: #333;
  line-height: 1.6;
  
  h1 {
    margin-bottom: 2.5rem;
    font-weight: bold;
    font-size: 2.5rem;
    color: #2c3e50;
  }
  
  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: #2c3e50;
  }
  
  p, li {
    margin-bottom: 1.25rem;
    font-size: 1.1rem;
  }
  
  ul {
    padding-left: 2rem;
  }
  
  .last-updated {
    color: #666;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem 4rem;
    
    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
    h2 {
      font-size: 1.3rem;
      margin-top: 2.5rem;
    }
  }
`;

const PrivacyPage: React.FC = () => {
  return (
    <StyledContainer>
      <h1>Privacy Policy</h1>
      <p className="last-updated">Last Updated: July 2025</p>

      <h2>Your Privacy Matters</h2>
      <p>
        At GroceryGold, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our app to find and share grocery deals.
      </p>

      <h2>1. Information We Collect</h2>
      <div>
        <ul>
          <li><strong>Account Information:</strong> We use Apple and Google Sign-In for authentication. We receive your name and email from these services, but we do not store your password.</li>
          <li><strong>Location Data:</strong> We collect your device's location to show you nearby deals and stores. You can control location permissions in your device settings.</li>
          <li><strong>Deal Information:</strong> When you post or interact with deals, we collect the content and metadata about those interactions.</li>
          <li><strong>Usage Data:</strong> We collect information about how you use the app, including features you use and time spent in the app.</li>
        </ul>
      </div>

      <h2>2. How We Use Your Information</h2>
      <div>
        <ul>
          <li>Provide and improve our services</li>
          <li>Personalize your experience</li>
          <li>Show you relevant deals based on your location and preferences</li>
          <li>Communicate with you about app updates and new features</li>
          <li>Maintain the safety and security of our community</li>
        </ul>
      </div>

      <h2>3. Data Sharing and Disclosure</h2>
      <div>
        <ul>
          <li>We do not sell your personal information to third parties.</li>
          <li>We may share aggregated, non-personal information with partners for analytics and business purposes.</li>
          <li>We may disclose information if required by law or to protect our rights and safety.</li>
        </ul>
      </div>

      <h2>4. Your Choices</h2>
      <div>
        <ul>
          <li>You can update your account information in the app settings.</li>
          <li>You can control push notifications in your device settings.</li>
          <li>You can delete your account at any time, which will remove your personal information from our active databases.</li>
        </ul>
      </div>

      <h2>5. Data Security</h2>
      <p>
        We implement appropriate security measures to protect your information. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        Our app is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@grocerygold.app">support@grocerygold.app</a>
      </p>
    </StyledContainer>
  );
};

export default PrivacyPage;

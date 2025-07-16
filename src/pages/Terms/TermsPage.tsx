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

const TermsPage: React.FC = () => {
  return (
    <StyledContainer>
      <h1>Terms of Service</h1>
      <p className="last-updated">Last Updated: July 2025</p>

      <h2>Welcome to GroceryGold!</h2>
      <p>
        These Terms of Service ("Terms") govern your access to and use of the GroceryGold application ("App"). 
        By accessing or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.
      </p>

      <h2>1. User Accounts</h2>
      <div>
        <ul>
          <li>You must be at least 13 years old to use GroceryGold.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree to provide accurate and complete information when creating an account.</li>
          <li>You are solely responsible for all activities that occur under your account.</li>
        </ul>
      </div>

      <h2>2. Acceptable Use</h2>
      <div>
        You agree not to use the App to:
        <ul>
          <li>Post false, misleading, or inaccurate information about deals</li>
          <li>Violate any laws or regulations</li>
          <li>Infringe on the rights of others</li>
          <li>Post harmful or malicious content</li>
          <li>Interfere with the App's operation</li>
        </ul>
      </div>

      <h2>3. Deal Posting Guidelines</h2>
      <div>
        <ul>
          <li>Only post deals you have personally verified</li>
          <li>Include accurate pricing and expiration dates when known</li>
          <li>Clearly indicate any limitations or restrictions</li>
          <li>Do not post the same deal multiple times</li>
        </ul>
      </div>

      <h2>4. Intellectual Property</h2>
      <div>
        <ul>
          <li>GroceryGold retains all rights to the App and its content</li>
          <li>By posting content, you grant us a non-exclusive, worldwide license to use it</li>
          <li>You retain ownership of the content you post</li>
        </ul>
      </div>

      <h2>5. Limitation of Liability</h2>
      <div>
        <ul>
          <li>GroceryGold is not responsible for the accuracy of deal information</li>
          <li>We do not guarantee that deals will be available or honored by retailers</li>
          <li>Use the App at your own risk</li>
        </ul>
      </div>

      <h2>6. Termination</h2>
      <p>
        We may terminate or suspend your account if you violate these Terms or for any other reason at our discretion.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of any changes by updating the "Last Updated" date.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at{' '}
        <a href="mailto:support@grocerygold.app">support@grocerygold.app</a>
      </p>
    </StyledContainer>
  );
};

export default TermsPage;

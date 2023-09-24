import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${props => props.theme.pageBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0px 40px;
  color: rgba(0,0,0,0.3);
`;

const FooterLinks = styled.div`
  background: ${props => props.theme.pageBackground};
  display: flex;
  align-items: flex-start;
  margin: 0 20px;
  & a {
    color: black;
    opacity: 0.15;
    text-decoration: none;
    font-size: 24px;
    padding: 0px 10px;
  } 
  & a:hover {
    opacity: 1;
  }
`;

const Copywrite = styled.div`
  margin: 0 20px;
  text-align: left;
`;

const Footer = () => {
    return (
      <FooterDiv>
        <Copywrite>
          Sabrina Bertol | All rights reserved © 2023
        </Copywrite> 
        <FooterLinks>
          <a href="https://github.com/sabrinabertol" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </a>
          <a href="https://www.linkedin.com/in/sabrinabertol/" target="_blank" rel="noopener noreferrer" >
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </a>
        </FooterLinks>
      </FooterDiv>
    );
}

export default Footer;
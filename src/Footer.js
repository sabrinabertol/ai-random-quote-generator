import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/sabrinabertol" target="_blank" rel="noopener noreferrer">
                Sabrina Bertol <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <p> | All rights reserved © 2023</p>
 
        </div>
    )
}

export default Footer;
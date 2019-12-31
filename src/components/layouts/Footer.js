import React from 'react'

// styles 
import './Footer.scss'

// partials
import Copyright from '../partials/Copyright';
import SocialMedia from '../partials/SocialMedia';

const Footer = () => {
    return (
        <div className="footer-container">
            <SocialMedia />
            <Copyright />
        </div>
    )
}

export default Footer;

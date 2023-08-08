import React from 'react';
import '../styles/footer.css'
// Images
import linkedIn from '../images/logo-linkedin.svg';
import github from '../images/logo-github.svg';
import instagram from '../images/logo-instagram.svg';
import discord from '../images/logo-discord.svg';

const Footer = () => {
    return (
        <footer className='footerContainer'>
            <div className='copyright'>
                <p>&copy; 2023 Ziya. All rights reserved.</p>
                <p>Designed and developed with ❤️ by Ziya.</p>
            </div>
            <div className='links'>
                <a href="https://github.com/zeeyeah" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github" width={70} height={70} />
                </a>
                <a href="https://www.linkedin.com/in/ziya-uddin-70622a24b/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedIn} alt="linkedin" width={70} height={70} />
                </a>
                <a href="https://www.instagram.com/zeeyeahaha/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram" width={70} height={70} />
                </a>
                <a href="https://discordapp.com/users/807229260497944588" target="_blank" rel="noopener noreferrer">
                    <img src={discord} alt="discord" width={70} height={70} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;

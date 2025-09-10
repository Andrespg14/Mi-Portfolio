import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/andr%C3%A9s-p%C3%A9rez-garc%C3%ADa-261934180/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            {' | '}
            <a href="https://github.com/Andrespg14" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
            </a>
            {' | '}
            <a href='mailto:anpergar14@gmail.com'>
                <i className="fas fa-envelope"></i> anpergar14@gmail.com
            </a>
            <p>© 2025 Andrés Pérez García</p>
        </footer>
    );
}


export default Footer;
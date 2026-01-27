import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-col brand-col">
                    <img src="/assets/logo-isotype.png" alt="LUKSTORE" className="footer-logo" />
                    <p className="footer-tagline">SELECTED STREET GOODS.</p>
                </div>

                {/* Shop Links - Minimal */}
                <div className="footer-col links-col">
                    <ul>
                        <li><Link to="/basketball">Basketball</Link></li>
                        <li><Link to="/streetwear">Streetwear</Link></li>
                        <li><Link to="/drops">Drops</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                    </ul>
                </div>

                {/* Legal/Contact - Minimal */}
                <div className="footer-col legal-col">
                    <ul>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/terminos">Términos</Link></li>
                        <li><Link to="/privacidad">Privacidad</Link></li>
                    </ul>
                </div>

                {/* Socials - Right aligned */}
                <div className="footer-col social-col">
                    <div className="socials">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container">
                <p className="copyright">LUKSTORE © {new Date().getFullYear()} — SANTIAGO, CHILE</p>
            </div>
        </footer>
    );
};

export default Footer;

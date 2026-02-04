import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Music2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                {/* Col 1: Brand */}
                <div className="footer-col brand-col">
                    <div className="footer-brand">
                        <img src="/assets/logo-badge.png" alt="LUKSTORE" className="footer-logo-img" />
                        <p className="footer-tagline">SELECTED STREET GOODS</p>
                        <p className="footer-desc">
                            Zapatillas y streetwear auténtico. <br />Sin fechas falsas, solo cultura.
                        </p>
                    </div>
                </div>

                {/* Col 2: Ayuda */}
                <div className="footer-col links-col">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><Link to="/guia-tallas">Guía de tallas</Link></li>
                        <li><Link to="/envios">Envíos y devoluciones</Link></li>
                        <li><Link to="/autenticidad">Autenticidad</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                {/* Col 3: Socials */}
                <div className="footer-col social-col">
                    <div className="socials-list">
                        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <MessageCircle size={18} /> <span>WHATSAPP</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Instagram size={18} /> <span>INSTAGRAM</span>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            <Music2 size={18} /> <span>TIKTOK</span>
                        </a>
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

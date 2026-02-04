import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-top">
                        {/* Col 1: Brand */}
                        <div className="footer-col brand-col">
                            <h4 className="footer-logo">LUKSTORE</h4>
                            <p className="footer-desc">
                                Selected street goods.
                            </p>
                        </div>

                        {/* Col 2: Help */}
                        <div className="footer-col">
                            <h5>Ayuda</h5>
                            <ul className="footer-links">
                                <li><Link to="/guia-tallas">Guía de tallas</Link></li>
                                <li><Link to="/envios">Envíos y devoluciones</Link></li>
                                <li><Link to="/autenticidad">Autenticidad</Link></li>
                                <li><Link to="/contacto">Contacto</Link></li>
                            </ul>
                        </div>

                        {/* Col 3: Social & Contact */}
                        <div className="footer-col newsletter-col">
                            <h5>Social</h5>
                            <div className="social-links" style={{ justifyContent: 'flex-start', marginBottom: '1.5rem' }}>
                                <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ border: 'none', width: 'auto', padding: '0' }}>WhatsApp</a>
                                <a href="#" aria-label="Instagram" style={{ border: 'none', width: 'auto', padding: '0' }}>Instagram</a>
                                <a href="#" aria-label="TikTok" style={{ border: 'none', width: 'auto', padding: '0' }}>TikTok</a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="copyright">
                            © {new Date().getFullYear()} Lukstore. Todos los derechos reservados.
                        </div>
                        <div className="legal-links">
                            <Link to="/terminos">Términos</Link>
                            <Link to="/privacidad">Privacidad</Link>
                        </div>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;

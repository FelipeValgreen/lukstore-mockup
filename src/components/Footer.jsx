import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-premium">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col brand-col">
                        <h4 className="footer-logo">LUKSTORE</h4>
                        <p className="footer-desc">
                            Streetwear curado y esenciales vintage.
                            Autenticados en Chile, envíos a todo el mundo.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h5>Tienda</h5>
                        <ul className="footer-links">
                            <li><Link to="/zapatillas">Zapatillas</Link></li>
                            <li><Link to="/hombre">Ropa</Link></li>
                            <li><Link to="/drops">Drops Exclusivos</Link></li>
                            <li><Link to="/accesorios">Accesorios</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Soporte</h5>
                        <ul className="footer-links">
                            <li><Link to="/faq">Preguntas Frecuentes</Link></li>
                            <li><Link to="/envios">Envíos y Devoluciones</Link></li>
                            <li><Link to="/guia-tallas">Guía de Tallas</Link></li>
                            <li><Link to="/tracking">Seguimiento de Pedido</Link></li>
                            <li><Link to="/autenticidad">Garantía de Autenticidad</Link></li>
                            <li><Link to="/contacto">Contáctanos</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col newsletter-col">
                        <h5>Mantente informado</h5>
                        <p className="newsletter-text">Suscríbete para drops exclusivos y acceso anticipado.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Tu correo electrónico" />
                            <button type="submit" className="btn-arrow">→</button>
                        </form>
                        <div className="social-links">
                            <a href="#" aria-label="Instagram">IG</a>
                            <a href="#" aria-label="TikTok">TK</a>
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

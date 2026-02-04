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
                            Curated streetwear and vintage essentials.
                            Authenticated in Chile, shipped worldwide.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h5>Shop</h5>
                        <ul className="footer-links">
                            <li><Link to="/zapatillas">Footwear</Link></li>
                            <li><Link to="/hombre">Apparel</Link></li>
                            <li><Link to="/drops">Exclusive Drops</Link></li>
                            <li><Link to="/accesorios">Accessories</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Support</h5>
                        <ul className="footer-links">
                            <li><Link to="/envios">Shipping & Returns</Link></li>
                            <li><Link to="/guia-tallas">Size Guide</Link></li>
                            <li><Link to="/autenticidad">Authenticity Guarantee</Link></li>
                            <li><Link to="/contacto">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col newsletter-col">
                        <h5>Stay in the loop</h5>
                        <p className="newsletter-text">Subscribe for exclusive drops and early access.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Email address" />
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
                        © {new Date().getFullYear()} Lukstore. All rights reserved.
                    </div>
                    <div className="legal-links">
                        <Link to="/terminos">Terms</Link>
                        <Link to="/privacidad">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

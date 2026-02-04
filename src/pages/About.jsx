import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import './Institutional.css';

const About = () => {
    usePageMeta('Nosotros', 'Curaduría real de streetwear.');

    return (
        <div className="institutional-page">
            {/* HERO SHORT */}
            <div className="kp-hero" style={{ height: '300px', backgroundImage: 'url(/assets/hero-about.png)' }}>
                <div className="kp-overlay"></div>
                <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
                    <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800 }}>Curaduría real de streetwear.</h1>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
                <div className="about-content" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#111' }}>
                    <p style={{ marginBottom: '2rem' }}>
                        Lukstore es un ecommerce especializado en zapatillas, ropa y accesorios urbanos. Nuestro enfoque no es el volumen ni el hype, sino la selección consciente de productos que funcionan en la calle y en el día a día.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        Cada producto que ves en nuestra tienda es revisado antes de ser publicado. Buscamos diseño, estado y funcionalidad, priorizando decisiones informadas por sobre tendencias pasajeras.
                    </p>
                    <p style={{ marginBottom: '4rem' }}>
                        Lukstore nace desde la cultura urbana, entendiendo el streetwear como algo cotidiano, no como un lujo ni una promesa vacía.
                    </p>
                </div>

                <div className="brand-seal" style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '4rem' }}>
                    <img src="/assets/logo-isotype.png" alt="Seal" style={{ width: '40px', marginBottom: '1rem', opacity: 0.8 }} />
                    <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>Selected street goods.</h3>
                    <Link to="/zapatillas" className="btn btn-primary">Ver productos</Link>
                </div>
            </div>
        </div>
    );
};

export default About;

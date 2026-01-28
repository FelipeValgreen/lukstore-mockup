import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import './Institutional.css';

const About = () => {
    usePageMeta('Cultura Real', 'Manifiesto de Lukstore. Menos hype, más criterio. Streetwear seleccionado uno a uno.');

    return (
        <div className="institutional-page">
            <div className="kp-hero" style={{ backgroundImage: 'url(/assets/hero-about.png)' }}>
                <div className="kp-overlay"></div>
                <h1>Cultura Real</h1>
            </div>

            <div className="container kp-content">
                <div className="manifesto-highlight">
                    <h2>Lukstore nace desde la calle, no desde el marketing.</h2>
                    <p>Seleccionamos productos que tienen recorrido, diseño honesto y cultura detrás.</p>
                    <p><strong>Menos ruido. Más criterio.</strong></p>
                </div>

                <div className="kp-grid-2col">
                    <div className="kp-text-block">
                        <h3>El Manifiesto</h3>
                        <p>
                            En un mercado saturado de lanzamientos vacíos y tendencias pasajeras, LUKSTORE se planta como una respuesta auténtica. No buscamos tenerlo todo, buscamos tener lo mejor.
                        </p>
                        <p>
                            Entendemos el streetwear no como una moda, sino como un lenguaje. Cada zapatilla, cada prenda y cada accesorio en nuestro catálogo ha sido elegido por su historia, su calidad y su relevancia en la cultura urbana.
                        </p>
                    </div>

                    <div className="kp-image-block">
                        {/* Placeholder for a cool team or store photo */}
                        <div style={{ backgroundColor: '#e5e5e5', height: '100%', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: '#999' }}>Editorial Shot</span>
                        </div>
                    </div>
                </div>

                <div className="kp-values-grid">
                    <div className="value-item">
                        <h4>Selección</h4>
                        <p>No vendemos relleno. Si está aquí, es porque vale la pena.</p>
                    </div>
                    <div className="value-item">
                        <h4>Transparencia</h4>
                        <p>Precios justos, condiciones reales y envíos claros.</p>
                    </div>
                    <div className="value-item">
                        <h4>Comunidad</h4>
                        <p>Respetamos la cultura y a quienes la construyen día a día.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

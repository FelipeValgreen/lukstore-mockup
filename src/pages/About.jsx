import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './Institutional.css';

const About = () => {
    useDocumentTitle('Nosotros');

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

                <div className="kp-text-block">
                    <p>
                        En un mercado saturado de lanzamientos vacíos y tendencias pasajeras, LUKSTORE se planta como una respuesta auténtica. No buscamos tenerlo todo, buscamos tener lo mejor.
                    </p>
                    <p>
                        Entendemos el streetwear no como una moda, sino como un lenguaje. Cada zapatilla, cada prenda y cada accesorio en nuestro catálogo ha sido elegido por su historia, su calidad y su relevancia en la cultura urbana.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

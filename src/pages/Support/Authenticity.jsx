import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Authenticity = () => {
    usePageMeta('Autenticidad Garantizada', 'Proceso de legitimación de sneakers en Lukstore. Revisión experta punto por punto.');

    return (
        <div className="institutional-page">
            <div className="kp-hero" style={{ height: '40vh', backgroundImage: 'url(/assets/hero-street-editorial.png)', backgroundPosition: 'center' }}>
                <div className="kp-overlay"></div>
                <h1>Legit Check</h1>
            </div>

            <div className="container kp-content">
                <div className="manifesto-highlight">
                    <h2>Sin dudas. Sin réplicas. 100% Real.</h2>
                    <p>En una industria llena de incertidumbre, nosotros somos el filtro de confianza. Cada par que entra a Lukstore pasa por una revisión manual exhaustiva.</p>
                </div>

                <div className="kp-text-block">
                    <h3>Nuestro Proceso</h3>
                    <p>
                        No confiamos solo en apps. Nuestro equipo revisa tacto, olor, costuras, luz UV y códigos de producción.
                        Conocemos las diferencias de fabricación entre años y fábricas.
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: '2rem 0', lineHeight: '2' }}>
                        <li><strong>Origen:</strong> Solo compramos a coleccionistas verificados y retailers oficiales.</li>
                        <li><strong>Inspección:</strong> Costuras internas, plantilla, etiqueta de caja y horma.</li>
                        <li><strong>Garantía:</strong> Si se demuestra que un producto no es auténtico, devolvemos el 100% de tu dinero + una compensación.</li>
                    </ul>
                    <p>Nunca hemos fallado. Y no planeamos empezar ahora.</p>
                </div>
            </div>
        </div>
    );
};

export default Authenticity;

import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Shipping = () => {
    usePageMeta('Envíos y Devoluciones', 'Información sobre despachos.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Envíos y devoluciones</h1>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Envíos</h2>
                    <p style={{ color: '#444', lineHeight: '1.6' }}>
                        Realizamos envíos a todo Chile. Los tiempos de entrega pueden variar según ubicación y disponibilidad del producto.
                    </p>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Devoluciones</h2>
                    <p style={{ color: '#444', lineHeight: '1.6' }}>
                        Aceptamos devoluciones según las condiciones indicadas. Para iniciar una devolución, contáctanos antes de realizar el envío.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;

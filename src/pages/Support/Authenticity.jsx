import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Authenticity = () => {
    usePageMeta('Autenticidad', 'Proceso de verificación.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Autenticidad</h1>

                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#111' }}>
                    Todos los productos publicados en Lukstore son revisados antes de ser puestos a la venta. La información entregada busca ayudarte a tomar una decisión informada.
                </p>
            </div>
        </div>
    );
};

export default Authenticity;

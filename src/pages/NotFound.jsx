import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

const NotFound = () => {
    usePageMeta('Página no encontrada', 'Error 404');

    return (
        <div style={{
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ fontSize: '8rem', fontWeight: '800', margin: 0, lineHeight: 1 }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Te perdiste en el hype.</h2>
            <p style={{ color: '#666', maxWidth: '400px', marginBottom: '2rem' }}>
                La página que buscas no existe o fue movida. Volvamos a lo seguro.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to="/" className="btn btn-primary">Ir al Home</Link>
                <Link to="/zapatillas" className="btn btn-secondary">Ver Zapatillas</Link>
            </div>
        </div>
    );
};

export default NotFound;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Success = () => {
    useDocumentTitle('Compra Exitosa');

    // confetti or scroll top logic could go here

    return (
        <div className="container" style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <CheckCircle size={64} color="#28a745" style={{ marginBottom: '1.5rem' }} />
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¡Gracias por tu compra!</h1>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '500px', marginBottom: '2rem' }}>
                Tu pedido ha sido confirmado. Hemos enviado un correo con los detalles de tu compra y el número de seguimiento.
            </p>
            <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
        </div>
    );
};

export default Success;

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Success = () => {
    useDocumentTitle('Compra Exitosa');
    const location = useLocation();
    const { orderId } = location.state || {}; // Get real ID

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
                Tu pedido ha sido confirmado. Hemos enviado un correo con los detalles de tu compra.
                {orderId && <br />}
                {orderId && <span style={{ display: 'block', marginTop: '1rem', fontWeight: 'bold' }}>ID de Orden: {orderId}</span>}
            </p>
            <Link to="/" className="btn btn-primary">Volver al Inicio</Link>
        </div>
    );
};

export default Success;

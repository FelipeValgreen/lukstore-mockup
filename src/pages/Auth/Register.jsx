import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Register = () => {
    usePageMeta('Crear Cuenta', 'Únete a la comunidad Lukstore.');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate register
        setTimeout(() => {
            setLoading(false);
            navigate('/');
        }, 1000);
    };

    return (
        <div className="institutional-page">
            <div className="container" style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 0'
            }}>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Crear Cuenta</h1>

                    <form onSubmit={handleSubmit} className="auth-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="form-group">
                            <input type="text" placeholder="Nombre Completo" required style={{ padding: '1rem', width: '100%', border: '1px solid #ddd' }} />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required style={{ padding: '1rem', width: '100%', border: '1px solid #ddd' }} />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Contraseña" required style={{ padding: '1rem', width: '100%', border: '1px solid #ddd' }} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                            {loading ? 'Creando cuenta...' : 'Registrarme'}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
                        <p>¿Ya tienes cuenta? <Link to="/login" style={{ fontWeight: 'bold' }}>Inicia Sesión</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

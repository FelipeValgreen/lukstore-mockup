import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Login = () => {
    usePageMeta('Iniciar Sesión', 'Accede a tu cuenta Lukstore.');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate login
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
                    <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Iniciar Sesión</h1>

                    <form onSubmit={handleSubmit} className="auth-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required style={{ padding: '1rem', width: '100%', border: '1px solid #ddd' }} />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Contraseña" required style={{ padding: '1rem', width: '100%', border: '1px solid #ddd' }} />
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '0.8rem' }}>
                            <button type="button" onClick={() => alert('Función de recuperación no implementada en demo')} style={{ background: 'none', border: 'none', color: '#666', textDecoration: 'underline', cursor: 'pointer', padding: 0 }}>¿Olvidaste tu contraseña?</button>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                            {loading ? 'Entrando...' : 'Ingresar'}
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem' }}>
                        <p>¿No tienes cuenta? <Link to="/register" style={{ fontWeight: 'bold' }}>Regístrate</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

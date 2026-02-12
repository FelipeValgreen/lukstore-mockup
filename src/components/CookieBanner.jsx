import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('lukstore_cookie_consent');
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('lukstore_cookie_consent', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="cookie-banner"
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        background: '#111',
                        color: '#fff',
                        padding: '1.5rem',
                        zIndex: 1000,
                        borderTop: '1px solid #333'
                    }}
                >
                    <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                        <div className="cookie-text" style={{ flex: '1 1 300px' }}>
                            <p style={{ fontSize: '0.9rem', margin: 0, lineHeight: 1.4 }}>
                                <strong>LUKSTORE usa cookies.</strong> Utilizamos cookies propias y de terceros para mejorar tu experiencia y mostrarte contenido relacionado con tus preferencias.
                                <Link to="/privacidad" style={{ textDecoration: 'underline', marginLeft: '5px', color: '#ccc' }}>Ver Política</Link>.
                            </p>
                        </div>
                        <div className="cookie-actions" style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                onClick={handleAccept}
                                className="btn"
                                style={{
                                    background: '#fff',
                                    color: '#000',
                                    fontWeight: 700,
                                    border: 'none',
                                    padding: '0.8rem 2rem',
                                    fontSize: '0.85rem'
                                }}
                            >
                                ACEPTAR
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;

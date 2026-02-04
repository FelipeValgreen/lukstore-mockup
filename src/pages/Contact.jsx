import React from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { Mail, MessageCircle, Clock } from 'lucide-react';
import './Institutional.css';

const Contact = () => {
    usePageMeta('Contacto', 'Escríbenos directamente.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0', maxWidth: '600px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contacto</h1>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
                    Si tienes dudas sobre productos, tallas o pedidos, puedes escribirnos directamente. Respondemos lo antes posible.
                </p>

                <div className="contact-methods" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
                    <div className="method-card" style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '4px' }}>
                        <Mail size={24} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>Email</h3>
                        <a href="mailto:hola@lukstore.cl" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>hola@lukstore.cl</a>
                    </div>
                    <div className="method-card" style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '4px' }}>
                        <MessageCircle size={24} style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>WhatsApp</h3>
                        <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>+56 9 1234 5678</a>
                    </div>
                </div>

                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <Clock size={16} />
                        <span style={{ fontWeight: 600 }}>Horario de atención</span>
                    </div>
                    <p style={{ color: '#666', fontSize: '0.9rem' }}>Lunes a Viernes: 10:00 - 19:00 hrs<br />Sábados: 11:00 - 14:00 hrs</p>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Envíanos un mensaje</h3>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <input type="text" placeholder="Tu nombre" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <input type="email" placeholder="Tu email" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <textarea placeholder="¿En qué podemos ayudarte?" rows="5" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Enviar mensaje</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

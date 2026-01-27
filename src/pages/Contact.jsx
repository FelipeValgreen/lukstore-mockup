import React from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './Institutional.css';

const Contact = () => {
    useDocumentTitle("Contacto");
    return (
        <div className="inst-page">
            <div className="inst-hero small-hero" style={{ backgroundImage: "url('/assets/cat-drops.png')" }}>
                <div className="inst-overlay"></div>
                <div className="container inst-content">
                    <h1>Contacto</h1>
                </div>
            </div>

            <div className="container inst-body contact-body">
                <p className="contact-text">¿Tienes dudas sobre tallas, stock o envíos? Escríbenos directamente y te respondemos.</p>

                <button className="btn btn-primary btn-whatsapp">Hablar por WhatsApp</button>

                <p className="contact-sub">Atención directa, sin bots y sin intermediarios.</p>
            </div>
        </div>
    );
};

export default Contact;

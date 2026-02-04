import React from 'react';
import { PageMeta } from '../hooks/usePageMeta';
import { MessageCircle } from 'lucide-react';
import './Institutional.css';

const Contact = () => {
    return (
        <div className="institutional-page">
            <PageMeta title="Contacto" description="Habla con nosotros. Dudas, ventas o colaboraciones." />
            <div className="container" style={{ padding: '6rem 0' }}>
                <div className="contact-grid">
                    <div className="contact-info">
                        <h1>Contacto</h1>
                        <p className="contact-intro">
                            ¿Tienes una duda sobre tu pedido o buscas un par específico?
                            La vía más rápida siempre es el DM, pero aquí estamos para todo.
                        </p>

                        <div className="contact-direct">
                            <a href="https://wa.me/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MessageCircle size={20} /> CHATEAR EN WHATSAPP
                            </a>
                        </div>

                        <div className="contact-details">
                            <p><strong>Email:</strong> contacto@lukstore.cl</p>
                            <p><strong>Horario:</strong> Lunes a Viernes, 10:00 - 19:00 hrs.</p>
                            <p>STREETWEAR — SANTIAGO, CL</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="editorial-form">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input type="text" placeholder="TU NOMBRE" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="TU CORREO" />
                            </div>
                            <div className="form-group">
                                <label>Mensaje</label>
                                <textarea rows="5" placeholder="¿EN QUÉ PODEMOS AYUDARTE?"></textarea>
                            </div>
                            <button type="button" className="btn btn-secondary btn-block">ENVIAR MENSAJE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

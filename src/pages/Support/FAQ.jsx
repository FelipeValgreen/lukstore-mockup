import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const FAQ = () => {
    usePageMeta('Preguntas Frecuentes', 'Respuestas a tus dudas sobre envíos, pagos y originalidad en Lukstore.');

    const faqs = [
        {
            q: "¿Son originales los productos?",
            a: "Absolutamente. Todos nuestros pares pasan por un proceso de verificación riguroso. Garantizamos autenticidad de por vida o te devolvemos el dinero x2."
        },
        {
            q: "¿Hacen envíos a todo Chile?",
            a: "Sí, enviamos a todas las regiones vía Blue Express y Starken. En Santiago, ofrecemos envío same-day si compras antes de las 14:00 hrs."
        },
        {
            q: "¿Qué medios de pago aceptan?",
            a: "Aceptamos tarjetas de crédito y débito a través de MercadoPago. También transferencia bancaria directa."
        },
        {
            q: "¿Tienen tienda física?",
            a: "Por el momento somos 100% online, pero realizamos Pop-Up stores trimestrales en Providencia. Atento a nuestro Instagram."
        },
        {
            q: "¿Puedo cambiar una talla?",
            a: "Sí, tienes 10 días para cambios. El producto debe estar sin uso y con sus etiquetas originales. Los costos de envío del cambio corren por cuenta del cliente salvo error nuestro."
        }
    ];

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0', maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Preguntas Frecuentes</h1>

                <div className="faq-grid">
                    {faqs.map((item, index) => (
                        <div key={index} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.q}</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>{item.a}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <p>¿No encuentras tu respuesta?</p>
                    <a href="/contacto" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Contáctanos</a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;

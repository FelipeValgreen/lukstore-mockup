import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const SizeGuide = () => {
    usePageMeta('Guía de Tallas', 'Encuentra tu fit perfecto. Tabla de medidas oficial para Nike, Jordan y Adidas en Lukstore.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Guía de Tallas</h1>
                <p style={{ maxWidth: '600px', marginBottom: '4rem', fontSize: '1.1rem', color: '#666' }}>
                    Las hormas pueden variar según el modelo y la época de lanzamiento.
                    Usa esta guía como referencia base para Nike y Jordan Brand.
                </p>

                <div className="size-table-container">
                    <table className="editorial-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #000' }}>
                                <th style={{ padding: '1rem' }}>US MENS</th>
                                <th style={{ padding: '1rem' }}>US WOMENS</th>
                                <th style={{ padding: '1rem' }}>UK</th>
                                <th style={{ padding: '1rem' }}>CM</th>
                                <th style={{ padding: '1rem' }}>EUR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { us: '7', usw: '8.5', uk: '6', cm: '25', eur: '40' },
                                { us: '7.5', usw: '9', uk: '6.5', cm: '25.5', eur: '40.5' },
                                { us: '8', usw: '9.5', uk: '7', cm: '26', eur: '41' },
                                { us: '8.5', usw: '10', uk: '7.5', cm: '26.5', eur: '42' },
                                { us: '9', usw: '10.5', uk: '8', cm: '27', eur: '42.5' },
                                { us: '9.5', usw: '11', uk: '8.5', cm: '27.5', eur: '43' },
                                { us: '10', usw: '11.5', uk: '9', cm: '28', eur: '44' },
                                { us: '10.5', usw: '12', uk: '9.5', cm: '28.5', eur: '44.5' },
                                { us: '11', usw: '12.5', uk: '10', cm: '29', eur: '45' },
                                { us: '12', usw: '13.5', uk: '11', cm: '30', eur: '46' },
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #ddd' }}>
                                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.us}</td>
                                    <td style={{ padding: '1rem', color: '#666' }}>{row.usw}</td>
                                    <td style={{ padding: '1rem', color: '#666' }}>{row.uk}</td>
                                    <td style={{ padding: '1rem', color: '#666' }}>{row.cm}</td>
                                    <td style={{ padding: '1rem', color: '#666' }}>{row.eur}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '4rem', padding: '2rem', background: '#F5F5F3' }}>
                    <h3>¿Tienes dudas con un par específico?</h3>
                    <p>Escríbenos por Instagram o WhatsApp. Conocemos cómo calza cada silueta (Jordan 1, Dunk, Yeezy, etc.) y podemos asesorarte personalmente.</p>
                </div>
            </div>
        </div>
    );
};

export default SizeGuide;

import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Shipping = () => {
    usePageMeta('Envíos y Devoluciones', 'Política de despachos express y devoluciones en Lukstore.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Envíos y Entregas</h1>

                <div className="kp-text-block">
                    <div className="policy-block" style={{ marginBottom: '3rem' }}>
                        <h3>Despacho Express (Santiago)</h3>
                        <p>
                            Sabemos que la espera desespera. Si compras antes de las 14:00 hrs en días hábiles,
                            procesamos tu pedido el mismo día. La entrega en RM suele ser en menos de 24 horas hábiles
                            a través de nuestros couriers privados.
                        </p>
                    </div>

                    <div className="policy-block" style={{ marginBottom: '3rem' }}>
                        <h3>Regiones</h3>
                        <p>
                            Enviamos a todo Chile vía Blue Express o Starken (por pagar).
                            El tiempo promedio es de 2 a 5 días hábiles dependiendo de la zona.
                            Recibirás un número de seguimiento apenas tu pedido salga de nuestra bodega.
                        </p>
                    </div>

                    <div className="policy-block" style={{ marginBottom: '3rem' }}>
                        <h3>Cambios y Devoluciones</h3>
                        <p>
                            Tienes 10 días desde la recepción para solicitar un cambio si el producto no fue utilizado.
                            El producto debe estar tal cual fue entregado: con sus etiquetas, accesorios y caja original en perfecto estado.
                        </p>
                        <p>
                            <strong>Importante:</strong> En productos "Pre-Loved" o "Vintage", las ventas son finales salvo que exista un error en la descripción del estado.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;

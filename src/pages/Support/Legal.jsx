import React from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import '../../pages/Institutional.css';

const Legal = () => {
    usePageMeta('Términos y Privacidad', 'Bases legales de Lukstore.');

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textTransform: 'uppercase' }}>Legal</h1>

                <div className="kp-text-block">
                    <h3>1. Privacidad de Datos</h3>
                    <p>
                        No vendemos tus datos. Tu correo y teléfono solo se usan para procesar tu pedido y comunicarnos contigo sobre el estado del mismo.
                        Si te suscribes al newsletter, solo recibirás contenido relevante (Drops y Sales), nada de spam diario.
                    </p>

                    <h3 style={{ marginTop: '3rem' }}>2. Términos de Servicio</h3>
                    <p>
                        Al comprar en Lukstore, aceptas nuestras políticas de envío y autenticidad.
                        Nos reservamos el derecho de cancelar pedidos sospechosos de fraude o reventa masiva no autorizada.
                    </p>

                    <h3 style={{ marginTop: '3rem' }}>3. Propiedad Intelectual</h3>
                    <p>
                        Todo el contenido gráfico y fotográfico de este sitio es propiedad de Lukstore o se usa con licencia.
                        "Selected Street Goods" es parte de nuestra identidad de marca.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Legal;

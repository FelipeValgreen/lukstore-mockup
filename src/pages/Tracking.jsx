import React, { useState } from 'react';
import { supabase } from '../supabase';
import { usePageMeta } from '../hooks/usePageMeta';
import { Search, Package, Check, Truck, Home } from 'lucide-react';
import './Institutional.css';

const Tracking = () => {
    usePageMeta('Seguimiento de Pedido', 'Rastrea el estado de tu compra en Lukstore.');
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleTrack = async (e) => {
        e.preventDefault();
        if (!orderId.trim()) return;

        setLoading(true);
        setError(null);
        setOrder(null);

        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .eq('id', orderId.trim())
                .single();

            if (error) throw error;
            setOrder(data);
        } catch (err) {
            console.error('Tracking error:', err);
            setError('No encontramos una orden con ese ID. Por favor verifica e intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    const StatusStep = ({ step, label, currentStatus, icon: Icon }) => {
        const steps = ['pending', 'paid', 'shipped', 'delivered'];
        const currentIndex = steps.indexOf(currentStatus || 'pending');
        const stepIndex = steps.indexOf(step);
        const isActive = stepIndex <= currentIndex;

        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                opacity: isActive ? 1 : 0.4
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isActive ? '#000' : '#ddd',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon size={20} />
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: isActive ? '600' : '400' }}>{label}</span>
            </div>
        );
    };

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '6rem 0', maxWidth: '600px', minHeight: '60vh' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Seguimiento</h1>

                <form onSubmit={handleTrack} style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}>
                    <input
                        type="text"
                        placeholder="Ingresa tu ID de Orden (ej: f47ac10b...)"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        style={{ flex: 1, padding: '1rem', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Buscando...' : <Search size={20} />}
                    </button>
                </form>

                {error && (
                    <div style={{ padding: '1rem', background: '#fff0f0', color: '#d32f2f', borderRadius: '4px', textAlign: 'center' }}>
                        {error}
                    </div>
                )}

                {order && (
                    <div className="tracking-result" style={{ border: '1px solid #eee', padding: '2rem', borderRadius: '8px' }}>
                        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem' }}>
                            <h3 style={{ margin: 0 }}>Orden #{order.id.slice(0, 8)}</h3>
                            <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>Hola, {order.customer_name.split(' ')[0]}</p>
                        </div>

                        {/* Status Timeline */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', position: 'relative' }}>
                            {/* Line connector background could go here */}
                            <StatusStep step="pending" label="Confirmado" currentStatus={order.status} icon={Check} />
                            <StatusStep step="paid" label="Pagado" currentStatus={order.status} icon={Package} />
                            <StatusStep step="shipped" label="Enviado" currentStatus={order.status} icon={Truck} />
                            <StatusStep step="delivered" label="Entregado" currentStatus={order.status} icon={Home} />
                        </div>

                        <div style={{ background: '#f9f9f9', padding: '1.5rem', borderRadius: '4px' }}>
                            <p><strong>Destino:</strong> {order.customer_city}, {order.customer_region}</p>
                            <p><strong>Fecha Compra:</strong> {new Date(order.created_at).toLocaleDateString('es-CL')}</p>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                                * Si tu pedido ya fue enviado, recuerda que el tracking del courier puede demorar hasta 24hrs en actualizarse.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tracking;

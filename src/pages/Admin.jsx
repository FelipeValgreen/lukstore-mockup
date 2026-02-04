import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { usePageMeta } from '../hooks/usePageMeta';
import { Package, Clock, CheckCircle, Truck, AlertCircle } from 'lucide-react';
import './Institutional.css'; // Reuse basic layout styles

const Admin = () => {
    usePageMeta('Admin Dashboard', 'Panel de administración de Lukstore.');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();

        // Real-time subscription could go here
    }, []);

    const fetchOrders = async () => {
        try {
            const { data, error } = await supabase
                .from('orders')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'paid': return <CheckCircle size={16} color="#28a745" />;
            case 'shipped': return <Truck size={16} color="#007bff" />;
            case 'pending': return <Clock size={16} color="#ffc107" />;
            default: return <AlertCircle size={16} color="#dc3545" />;
        }
    };

    return (
        <div className="institutional-page">
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1>Panel de Pedidos</h1>
                    <button onClick={fetchOrders} className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                        Actualizar
                    </button>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem' }}>Cargando pedidos...</div>
                ) : orders.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', background: '#f9f9f9', borderRadius: '8px' }}>
                        <Package size={48} color="#ccc" style={{ marginBottom: '1rem' }} />
                        <p>No hay pedidos registrados aún.</p>
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="editorial-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                            <thead>
                                <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #ddd' }}>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>ID Orden</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Fecha</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Cliente</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Total</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Estado</th>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Pago</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '1rem', fontFamily: 'monospace', color: '#666' }}>
                                            {order.id.slice(0, 8)}...
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            {new Date(order.created_at).toLocaleDateString('es-CL')} <br />
                                            <span style={{ fontSize: '0.8rem', color: '#999' }}>
                                                {new Date(order.created_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <strong>{order.customer_name}</strong><br />
                                            <span style={{ fontSize: '0.8rem', color: '#666' }}>{order.customer_email}</span>
                                        </td>
                                        <td style={{ padding: '1rem', fontWeight: 'bold' }}>
                                            ${order.total_amount.toLocaleString('es-CL')}
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                {getStatusIcon(order.status)}
                                                <span style={{ textTransform: 'capitalize' }}>{order.status}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1rem' }}>
                                            <span className="card-pill" style={{ background: '#eef', color: '#007bff' }}>
                                                {order.payment_method}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;

import React, { useMemo } from 'react';
import { useProducts } from '../hooks/useProducts';
import { usePageMeta } from '../hooks/usePageMeta';
import ProductCard from '../components/ProductCard';
import { Clock } from 'lucide-react';
import './Institutional.css';

const Drops = () => {
    usePageMeta('Drops Exclusivos', 'Lanzamientos limitados y colaboraciones especiales en Lukstore.');
    const { getActiveDrops, loading } = useProducts();
    const drops = useMemo(() => getActiveDrops(), [getActiveDrops]);

    return (
        <div className="institutional-page">
            {/* Hero Section */}
            <div className="kp-hero" style={{ height: '60vh', backgroundImage: 'url(/assets/hero-drops.png)', display: 'flex', alignItems: 'flex-end', paddingBottom: '4rem' }}>
                <div className="kp-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2, color: 'white' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FF3B30', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold', marginBottom: '1rem' }}>
                        <Clock size={16} />
                        <span>NEXT DROP: 24h 10m</span>
                    </div>
                    <h1 style={{ fontSize: '4rem', margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Limited Releases</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '500px' }}>
                        Acceso exclusivo a colaboraciones y siluetas difíciles de encontrar.
                        Stock limitado. Sin restocks.
                    </p>
                </div>
            </div>

            {/* Active Drops Grid */}
            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h2>Disponibles Ahora</h2>
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>{drops.length} lanzamientos activos</span>
                </div>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>Cargando drops...</div>
                ) : (
                    <div className="grid product-grid">
                        {drops.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                )}
            </div>

            {/* Newsletter / Notifications */}
            <div style={{ background: 'black', color: 'white', padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>No te pierdas el próximo</h2>
                    <p style={{ color: '#999', marginBottom: '2rem' }}>Recibe notificaciones 1 hora antes de cada lanzamiento.</p>

                    <form style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="Tu email aquí"
                            style={{ padding: '1rem', width: '300px', borderRadius: '4px', border: 'none' }}
                        />
                        <button className="btn btn-primary" style={{ background: 'white', color: 'black', border: 'none' }}>
                            Avísame
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Drops;

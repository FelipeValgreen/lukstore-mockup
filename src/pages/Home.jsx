import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import './Home.css';

const Home = () => {
    const { getFeaturedProducts, getUsedProducts, loading } = useProducts();

    const featuredProducts = getFeaturedProducts();
    const usedProducts = getUsedProducts();

    if (loading) {
        return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Cargando...</div>;
    }

    return (
        <div className="home">
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">
                    <h1>SELECTED STREET GOODS</h1>
                    <p>Zapatillas y accesorios urbanos. Nuevos y usados verificados.</p>
                    <div className="hero-buttons">
                        <Link to="/zapatillas" className="btn btn-primary">Ver Zapatillas</Link>
                        <Link to="/drops" className="btn btn-outline">Ver Drops</Link>
                    </div>
                </div>
            </section>

            {/* FEATURED / DROPS */}
            <section className="section-container">
                <div className="section-header">
                    <h2>NEW ARRIVALS</h2>
                    <Link to="/zapatillas" className="view-all">Ver todo</Link>
                </div>
                <div className="product-grid">
                    {featuredProducts.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* BANNER INSTITUCIONAL */}
            <section className="brand-banner">
                <h2>CULTURA REAL</h2>
                <p>No vendemos hype, vendemos historia.</p>
                <Link to="/nosotros" className="btn btn-white">Conoce Lukstore</Link>
            </section>

            {/* USED / PRE-LOVED */}
            <section className="section-container">
                <div className="section-header">
                    <h2>PRE-LOVED (USED)</h2>
                    <Link to="/zapatillas" className="view-all">Ver Usados</Link>
                </div>
                <div className="product-grid">
                    {usedProducts.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

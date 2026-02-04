import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import './Home.css';

const Home = () => {
    const { getFeaturedProducts, getUsedProducts, loading } = useProducts();
    const featuredProducts = getFeaturedProducts();
    const usedProducts = getUsedProducts();

    // Scroll manipulation for hero parallax if desired, or simple CSS.

    if (loading) {
        return <div className="loading-screen">CARGANDO...</div>;
    }

    return (
        <div className="home-editorial">
            {/* HERO SECTION */}
            <section className="hero-editorial">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-badge">Est. 2024 — Santiago, Chile</span>
                    <h1 className="hero-title">BASKETBALL<br />HERITAGE</h1>
                    <p className="hero-subtitle">
                        Colección curada de zapatillas y streetwear. <br />
                        Piezas auténticas, nuevas y verified pre-loved.
                    </p>
                    <div className="hero-actions">
                        <Link to="/zapatillas" className="btn btn-primary">Ver Colección</Link>
                        <Link to="/drops" className="btn btn-outline">Próximos Drops</Link>
                    </div>
                </div>
            </section>

            {/* MANIFESTO / BRAND */}
            <section className="manifesto-block container">
                <div className="manifesto-text">
                    <h2>Selected Street Goods</h2>
                    <p>
                        No vendemos hype. Vendemos historia. Cada par en Lukstore ha sido seleccionado
                        por su relevancia cultural y su estado impecable.
                    </p>
                </div>
            </section>

            {/* CATEGORIES GRID */}
            <section className="categories-section container">
                <div className="grid-categories">
                    <Link to="/zapatillas" className="cat-tile" style={{ backgroundImage: "url('/assets/cat-basketball.png')" }}>
                        <div className="cat-tile-content">
                            <h3>Basketball</h3>
                            <p>Retro & Performance</p>
                        </div>
                    </Link>
                    <Link to="/hombre" className="cat-tile" style={{ backgroundImage: "url('/assets/cat-streetwear.png')" }}>
                        <div className="cat-tile-content">
                            <h3>Streetwear</h3>
                            <p>Apparel & Accesorios</p>
                        </div>
                    </Link>
                    <Link to="/drops" className="cat-tile" style={{ backgroundImage: "url('/assets/cat-drops.png')" }}>
                        <div className="cat-tile-content">
                            <h3>Drops</h3>
                            <p>Limited Releases</p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* NEW ARRIVALS */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>NEW ARRIVALS</h2>
                    <Link to="/zapatillas" className="btn-link">Ver Todo</Link>
                </div>
                <div className="product-grid">
                    {featuredProducts.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* BANNER / BREAK */}
            <Link to="/nosotros" className="banner-sale-poster">
                <h2>CULTURA REAL</h2>
                <p>Conoce más sobre nuestra curaduría</p>
                <span className="btn-sale">Sobre Lukstore</span>
            </Link>

            {/* PRE-LOVED */}
            <section className="featured-section container" style={{ marginTop: '6rem' }}>
                <div className="section-header">
                    <h2>PRE-LOVED (USED)</h2>
                    <Link to="/zapatillas" className="btn-link">Ver Usados</Link>
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

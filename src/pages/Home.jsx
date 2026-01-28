import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { getFeaturedProducts, getUsedProducts } from '../data/products';
import './Home.css';

const Home = () => {
    useDocumentTitle('LUKSTORE | Selected Street Goods');
    const featured = getFeaturedProducts().slice(0, 4); // New Arrivals
    const used = getUsedProducts().slice(0, 4); // Pre-loved

    return (
        <div className="home-page">

            {/* 1. HERO: Editorial / Manifesto */}
            <section className="hero-editorial">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    {/* Removed Since 2024 */}
                    <h1 className="hero-title">
                        SELECTED<br />STREET<br />GOODS
                    </h1>
                    <p className="hero-subtitle">
                        Zapatillas, ropa y accesorios urbanos seleccionados uno a uno.<br />
                        Sin hype falso. Sin promesas vacías.
                    </p>
                    <div className="hero-actions">
                        <Link to="/zapatillas" className="btn btn-primary">Ver Zapatillas</Link>
                        <Link to="/drops" className="btn btn-secondary-outline">Ver Drops</Link>
                    </div>
                </div>
            </section>

            {/* 1b. PROMO BANNER: SUMMER SALE */}
            <div className="container" style={{ marginBottom: '4rem' }}>
                <Link to="/zapatillas">
                    <img src="/assets/banner-sale.png" alt="Summer Sale" style={{ width: '100%', display: 'block' }} />
                </Link>
            </div>

            {/* 2. MANIFESTO BLOCK: "Qué es Lukstore" */}
            <section className="manifesto-block">
                <div className="container">
                    <div className="manifesto-text">
                        <h2>Lukstore no es un retail.</h2>
                        <p>Es una selección curada de street goods con historia, carácter y uso real.</p>
                        <img src="/assets/logo-badge.png" alt="Clover" className="manifesto-icon" />
                    </div>
                </div>
            </section>

            {/* 3. NEW ARRIVALS (Recién Llegados) */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Nuevos Ingresos</h2>
                    <Link to="/zapatillas" className="link-arrow">Ver todo</Link>
                </div>
                <div className="grid product-grid">
                    {featured.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </section>

            {/* 3b. PROMO BANNER: DROPS - Editorial Style */}
            <div className="container" style={{ marginBottom: '5rem', marginTop: '2rem' }}>
                <Link to="/drops" className="banner-editorial">
                    <div className="banner-content">
                        <span className="banner-label">Limited Edition</span>
                        <h2>DROP DE LA SEMANA</h2>
                        <span className="btn-text">Comprar Ahora</span>
                    </div>
                </Link>
            </div>

            {/* 4. PRE-LOVED (Usados) */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Pre-Loved Select</h2>
                    <Link to="/zapatillas" className="link-arrow">Ver colección</Link>
                </div>
                <div className="grid product-grid">
                    {used.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </section>

            {/* 5. CATEGORIES GRID - Clean 4-col */}
            <section className="categories-section container">
                <div className="grid-categories">
                    <Link to="/zapatillas" className="cat-tile" style={{ backgroundImage: 'url(/assets/cat-basketball.png)' }}>
                        <h3>Zapatillas</h3>
                    </Link>
                    <Link to="/hombre" className="cat-tile" style={{ backgroundImage: 'url(/assets/cat-streetwear.png)' }}>
                        <h3>Hombre</h3>
                    </Link>
                    <Link to="/mujer" className="cat-tile" style={{ backgroundImage: 'url(/assets/hero-bg.png)' }}>
                        <h3>Mujer</h3>
                    </Link>
                    <Link to="/accesorios" className="cat-tile" style={{ backgroundColor: '#1a1a1a' }}>
                        <h3>Accesorios</h3>
                    </Link>
                </div>
            </section>

            {/* SEO / FOOTER CTA */}
            <div className="footer-cta-editorial">
                <div className="container">
                    <h2>Menos ruido. Más criterio.</h2>
                    <Link to="/nosotros" className="btn btn-secondary">Concoce nuestra historia</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;

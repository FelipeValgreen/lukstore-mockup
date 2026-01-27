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
                    <span className="hero-badge">Since 2024 — SCL</span>
                    <h1 className="hero-title">
                        SELECTED<br />STREET<br />GOODS
                    </h1>
                    <p className="hero-subtitle">
                        Zapatillas, ropa y accesorios urbanos seleccionados uno a uno.<br />
                        Sin hype falso. Sin promesas vacías.
                    </p>
                    <Link to="/streetwear" className="btn btn-primary">Ver Selección</Link>
                </div>
            </section>

            {/* 1b. PROMO BANNER: SUMMER SALE */}
            <div className="container" style={{ marginBottom: '4rem' }}>
                <Link to="/streetwear">
                    <img src="/assets/banner-sale.png" alt="Summer Sale" style={{ width: '100%', display: 'block' }} />
                </Link>
            </div>

            {/* 2. MANIFESTO BLOCK: "Qué es Lukstore" */}
            <section className="manifesto-block">
                <div className="container">
                    <div className="manifesto-text">
                        <h2>Lukstore no es un retail.</h2>
                        <p>Es una selección curada de street goods co historia, carácter y uso real.</p>
                        <img src="/assets/logo-isotype.png" alt="Clover" className="manifesto-icon" />
                    </div>
                </div>
            </section>

            {/* 3. NEW ARRIVALS (Recién Llegados) */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Nuevos Ingresos</h2>
                    <Link to="/streetwear" className="link-arrow">Ver todo</Link>
                </div>
                <div className="grid product-grid">
                    {featured.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </section>

            {/* 3b. PROMO BANNER: DROPS */}
            <div className="container" style={{ marginBottom: '6rem' }}>
                <Link to="/drops">
                    <img src="/assets/banner-drops.png" alt="Exclusive Drops" style={{ width: '100%', display: 'block' }} />
                </Link>
            </div>

            {/* 4. PRE-LOVED (Usados) */}
            <section className="featured-section container">
                <div className="section-header">
                    <h2>Streetwear Pre-Loved (Used)</h2>
                    <Link to="/streetwear" className="link-arrow">Ver colección</Link>
                </div>
                <div className="grid product-grid">
                    {used.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </section>

            {/* 5. CATEGORIES GRID */}
            <section className="categories-editorial container">
                {/* Reuse existing cat-card logic */}
                <Link to="/basketball" className="cat-card big" style={{ backgroundImage: 'url(/assets/cat-basketball.png)' }}>
                    <div className="cat-content">
                        <h3>Basketball</h3>
                        <p>Legacy on court.</p>
                        <span className="btn-text">Explorar</span>
                    </div>
                </Link>
                <div className="cat-column">
                    <div className="cat-card small" style={{ backgroundImage: 'url(/assets/cat-streetwear.png)', backgroundColor: '#333' }}>
                        <div className="cat-content">
                            <h3>Ropa</h3>
                            <span className="btn-text">Ver Ropa</span>
                        </div>
                    </div>
                    <div className="cat-card small text-only">
                        <div className="cat-content">
                            <h3>Accesorios</h3>
                            <Link to="/streetwear" className="btn-link">Ver Todo</Link>
                        </div>
                    </div>
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

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import './Home.css';

const Home = () => {
    const { getFeaturedProducts, getUsedProducts, loading } = useProducts();
    const featuredProducts = getFeaturedProducts();
    const usedProducts = getUsedProducts();

    if (loading) {
        return <div className="loading-screen">Cargando...</div>;
    }

    return (
        <div className="home-clean">
            {/* HERO SECTION */}
            <section className="hero-clean">
                <div className="hero-content">
                    <span className="hero-pretitle">Fall / Winter 2024</span>
                    <h1 className="hero-title">HERITAGE<br />COLLECTION</h1>
                    <div className="hero-actions">
                        <Link to="/zapatillas" className="btn btn-primary">Shop Footwear</Link>
                        <Link to="/drops" className="btn btn-outline">View Drops</Link>
                    </div>
                </div>
            </section>

            {/* MANIFESTO */}
            <section className="manifesto-clean container">
                <p>
                    Lukstore curates exceptional footwear and apparel from the past and present.
                    Authentic. Verified. Essential.
                </p>
            </section>

            {/* CATEGORIES - Clean Row */}
            <section className="categories-clean container">
                <Link to="/zapatillas" className="cat-link">
                    <div className="cat-image-wrap">
                        <img src="/assets/cat-basketball.png" alt="Basketball" />
                    </div>
                    <h3>Basketball</h3>
                </Link>
                <Link to="/hombre" className="cat-link">
                    <div className="cat-image-wrap">
                        <img src="/assets/cat-streetwear.png" alt="Streetwear" />
                    </div>
                    <h3>Streetwear</h3>
                </Link>
                <Link to="/drops" className="cat-link">
                    <div className="cat-image-wrap">
                        <img src="/assets/cat-drops.png" alt="Drops" />
                    </div>
                    <h3>Drops</h3>
                </Link>
            </section>

            {/* NEW ARRIVALS */}
            <section className="products-clean container">
                <div className="section-header-clean">
                    <h2>Latest Arrivals</h2>
                    <Link to="/zapatillas" className="link-underlined">View All</Link>
                </div>
                <div className="product-grid-clean">
                    {featuredProducts.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* BANNER - Typeset only */}
            <section className="banner-clean">
                <div className="container">
                    <h2>Authentic Culture</h2>
                    <Link to="/nosotros" className="btn btn-outline">About Us</Link>
                </div>
            </section>

            {/* PRE LOVED */}
            <section className="products-clean container">
                <div className="section-header-clean">
                    <h2>Pre-Loved Archive</h2>
                    <Link to="/zapatillas" className="link-underlined">View All</Link>
                </div>
                <div className="product-grid-clean">
                    {usedProducts.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

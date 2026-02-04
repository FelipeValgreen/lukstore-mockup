import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import './Home.css';

const Home = () => {
    const { getFeaturedProducts, getUsedProducts, loading } = useProducts();
    const featuredProducts = getFeaturedProducts() || [];
    const usedProducts = getUsedProducts() || [];

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    if (loading) {
        // A better loading state could be a skeleton, but text is fine for now
        return <div className="loading-screen">Loading Collection...</div>;
    }

    return (
        <div className="home-clean">
            <Helmet>
                <title>LUKSTORE | Premium Streetwear & Vintage</title>
                <meta name="description" content="Curated streetwear, vintage sneakers, and exclusive drops. Authenticated in Chile, shipping worldwide." />
            </Helmet>

            {/* HERO SECTION - ANIMATED */}
            <motion.section
                className="hero-clean"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="hero-content">
                    <motion.span variants={fadeInUp} className="hero-pretitle">Fall / Winter 2024</motion.span>
                    <motion.h1 variants={fadeInUp} className="hero-title">HERITAGE<br />COLLECTION</motion.h1>
                    <motion.div variants={fadeInUp} className="hero-actions">
                        <Link to="/zapatillas" className="btn btn-primary">Shop Footwear</Link>
                        <Link to="/drops" className="btn btn-outline">View Drops</Link>
                    </motion.div>
                </div>
            </motion.section>

            {/* TRUST BAR (New) */}
            <div className="trust-bar container">
                <span>Verified Authentic</span>
                <span className="separator">•</span>
                <span>Global Shipping</span>
                <span className="separator">•</span>
                <span>Curated Selection</span>
            </div>

            {/* MANIFESTO */}
            <motion.section
                className="manifesto-clean container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
            >
                <p>
                    "We don't just sell clothes. We archive culture." <br />
                    Lukstore curates exceptional footwear and apparel from the past and present.
                </p>
            </motion.section>

            {/* CATEGORIES */}
            <motion.section
                className="categories-clean container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.div variants={fadeInUp}>
                    <Link to="/zapatillas" className="cat-link">
                        <div className="cat-image-wrap">
                            <img src="/assets/cat-basketball.png" alt="Basketball Sneakers" loading="lazy" />
                        </div>
                        <h3>Basketball</h3>
                    </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <Link to="/hombre" className="cat-link">
                        <div className="cat-image-wrap">
                            <img src="/assets/cat-streetwear.png" alt="Streetwear Apparel" loading="lazy" />
                        </div>
                        <h3>Streetwear</h3>
                    </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <Link to="/drops" className="cat-link">
                        <div className="cat-image-wrap">
                            <img src="/assets/cat-drops.png" alt="Exclusive Drops" loading="lazy" />
                        </div>
                        <h3>Drops</h3>
                    </Link>
                </motion.div>
            </motion.section>

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

            {/* BANNER */}
            <section className="banner-clean">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Authentic Culture</h2>
                        <Link to="/nosotros" className="btn btn-outline">Read Our Story</Link>
                    </motion.div>
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

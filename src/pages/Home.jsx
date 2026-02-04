import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import './Home.css';

const Home = () => {
    const { getFeaturedProducts, getUsedProducts, loading } = useProducts();
    const newArrivals = getFeaturedProducts() || []; // "Nuevos Ingresos" logic (using featured for now)
    const featuredSelection = getUsedProducts() || []; // "Selección Destacada" logic (using used for variety)

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    if (loading) return <div className="loading-screen"></div>;

    return (
        <div className="home-clean">
            <Helmet>
                <title>LUKSTORE | Selected Street Goods</title>
                <meta name="description" content="Zapatillas, ropa y accesorios urbanos seleccionados uno a uno." />
            </Helmet>

            {/* 1. HERO PRINCIPAL */}
            <section className="hero-clean" style={{ backgroundImage: 'url(/assets/hero-street-editorial.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title"
                    >
                        SELECTED<br />STREET GOODS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        Zapatillas, ropa y accesorios urbanos seleccionados uno a uno.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="hero-actions"
                    >
                        <Link to="/zapatillas" className="btn btn-primary">Ver Zapatillas</Link>
                        <Link to="/drops" className="btn btn-outline-white">Ver Drops</Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. CATEGORÍAS */}
            <section className="container categories-section">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="categories-grid-5"
                >
                    {[
                        { title: 'Zapatillas', link: '/zapatillas', copy: 'Sneakers urbanos seleccionados por diseño, estado y autenticidad.' },
                        { title: 'Hombre', link: '/hombre', copy: 'Ropa urbana pensada para el día a día.' },
                        { title: 'Mujer', link: '/mujer', copy: 'Streetwear funcional con carácter.' },
                        { title: 'Accesorios', link: '/accesorios', copy: 'Detalles que completan el fit.' },
                        { title: 'Drops', link: '/drops', copy: 'Lanzamientos y selecciones limitadas.' }
                    ].map((cat) => (
                        <motion.div key={cat.title} variants={fadeInUp} className="cat-card-text">
                            <Link to={cat.link}>
                                <h3>{cat.title}</h3>
                                <p>{cat.copy}</p>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 3. NUEVOS INGRESOS */}
            <section className="container product-section">
                <div className="section-header">
                    <h2>Nuevos Ingresos</h2>
                    <Link to="/zapatillas" className="link-arrow">Ver todo</Link>
                </div>
                <div className="product-grid">
                    {newArrivals.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* 4. BANNER EDITORIAL */}
            <section className="banner-sale">
                <div className="banner-content">
                    <h2>SUMMER SALE</h2>
                    <p>Selección de temporada con descuentos limitados.</p>
                    <Link to="/drops" className="btn btn-white">Ver ofertas</Link>
                </div>
            </section>

            {/* 5. PRODUCTOS DESTACADOS */}
            <section className="container product-section">
                <div className="section-header">
                    <h2>Selección Destacada</h2>
                    <Link to="/drops" className="link-arrow">Ver selección</Link>
                </div>
                <div className="product-grid">
                    {featuredSelection.slice(0, 4).map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </section>

            {/* 6. CTA FINAL */}
            <section className="final-cta container">
                <div className="cta-box">
                    <h2>Completa tu fit</h2>
                    <div className="cta-buttons">
                        <Link to="/hombre" className="btn btn-secondary">Hombre</Link>
                        <Link to="/mujer" className="btn btn-secondary">Mujer</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

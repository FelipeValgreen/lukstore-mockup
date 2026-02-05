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

            {/* 6. TESTIMONIOS */}
            <section className="container testimonials-section">
                <div className="section-header">
                    <h2>Trusted by the Culture</h2>
                    <div className="google-badge">
                        <span className="g-icon">G</span>
                        <div className="g-rating">
                            <strong>4.9</strong>
                            <span className="g-stars">★★★★★</span>
                            <span className="g-count">(142 reseñas)</span>
                        </div>
                    </div>
                </div>
                {/* 6 Grid Google Style */}
                <div className="testimonials-grid-scroll">
                    {[
                        { name: "Martín Velasco", date: "hace 2 días", text: "La curaduría es excelente. Encontré pares que no veía hace años en Chile. El envío fue rapidísimo y el packaging es otro nivel.", initial: "M" },
                        { name: "Sofia Andrade", date: "hace 1 semana", text: "Calidad impecable. Se nota que revisan cada detalle antes de enviar. 100% recomendado para quienes buscan streetwear real.", initial: "S" },
                        { name: "Camilo Rojas", date: "hace 3 semanas", text: "Atención personalizada y honesta. Te dicen la posta sobre el fit y el estado. Volveré a comprar seguro.", initial: "C" },
                        { name: "Andrés P.", date: "hace 1 mes", text: "Llegó al día siguiente en RM. Las Jordan 4 estaban pristine. Nada que envidiar a tiendas de USA.", initial: "A" },
                        { name: "Bea T.", date: "hace 1 mes", text: "Me ayudaron mucho con la talla por Instagram. El servicio al cliente es súper cercano, no como otras tiendas grandes.", initial: "B" },
                        { name: "Javier M.", date: "hace 2 meses", text: "Compré en el drop de Yeezy y todo fluyó perfecto. Sin bots, sin filas falsas. Experiencia de compra 10/10.", initial: "J" }
                    ].map((review, i) => (
                        <div className="google-review-card" key={i}>
                            <div className="gr-header">
                                <div className="gr-avatar" style={{ backgroundColor: ['#ea4335', '#4285f4', '#fbbc05', '#34a853', '#666', '#ea4335'][i] }}>{review.initial}</div>
                                <div className="gr-meta">
                                    <span className="gr-name">{review.name}</span>
                                    <div className="gr-rating-row">
                                        <span className="gr-stars">★★★★★</span>
                                        <span className="gr-date">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="gr-text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. JOURNAL / BLOG */}
            <section className="container journal-section">
                <div className="section-header">
                    <h2>News & Culture</h2>
                    <Link to="/blog" className="link-arrow">Ver todo</Link>
                </div>
                <div className="journal-grid">
                    <div className="journal-card">
                        <div className="j-img" style={{ backgroundImage: 'url(/assets/hero-street-editorial.png)' }}></div>
                        <div className="j-content">
                            <span className="j-tag">Cultura</span>
                            <h3>La historia detrás de las Jordan 4 "Bred"</h3>
                            <Link to="/blog/historia-jordan-4-bred" className="j-link">Leer nota</Link>
                        </div>
                    </div>
                    <div className="journal-card">
                        <div className="j-img" style={{ backgroundImage: 'url(/assets/cat-basketball.png)' }}></div>
                        <div className="j-content">
                            <span className="j-tag">Guías</span>
                            <h3>Cómo cuidar tus sneakers de gamuza</h3>
                            <Link to="/blog/cuidado-sneakers-gamuza" className="j-link">Leer nota</Link>
                        </div>
                    </div>
                    <div className="journal-card">
                        <div className="j-img" style={{ backgroundImage: 'url(/assets/cat-streetwear.png)' }}></div>
                        <div className="j-content">
                            <span className="j-tag">Estilo</span>
                            <h3>Essentials: 5 prendas para este invierno</h3>
                            <Link to="/blog/essentials-invierno" className="j-link">Leer nota</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. INSTAGRAM FEED */}
            <section className="instagram-section">
                <div className="container">
                    <div className="ig-header">
                        <h2>@lukstore._</h2>
                        <a href="https://www.instagram.com/lukstore._/" target="_blank" rel="noreferrer" className="btn btn-outline">Seguir en Instagram</a>
                    </div>
                    <div className="ig-grid">
                        {/* 9 Placeholder Images mimicking an IG feed */}
                        {/* 9 Placeholder Images mimicking an IG feed */
                            [
                                '/assets/prod-jordan1.png',
                                '/assets/prod-jordan4.png',
                                '/assets/prod-airmax.png',
                                '/assets/hero-home.png',
                                '/assets/banner-sale.png',
                                '/assets/cat-streetwear.png',
                                '/assets/prod-jordan4-back.png',
                                '/assets/jordan_4_cement_lifestyle.png',
                                '/assets/cat-basketball.png'
                            ].map((src, i) => (
                                <a key={i} href="https://www.instagram.com/lukstore._/" target="_blank" rel="noreferrer" className="ig-item">
                                    <img src={src} alt="Instagram Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className="ig-overlay"><span className="ig-icon">📸</span></div>
                                </a>
                            ))}
                    </div>
                </div>
            </section>

            {/* 9. CTA FINAL */}
            <section className="final-cta container">
                <div className="cta-box">
                    <h2>Completa tu fit</h2>
                    <div className="cta-buttons">
                        <Link to="/hombre" className="btn btn-secondary">Hombre</Link>
                        <Link to="/mujer" className="btn btn-secondary">Mujer</Link>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;

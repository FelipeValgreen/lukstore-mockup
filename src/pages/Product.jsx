import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageMeta } from '../hooks/usePageMeta';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { useProducts } from '../hooks/useProducts';
import './Product.css';

const Product = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { getProductById, products, loading } = useProducts();
    const [selectedSize, setSelectedSize] = useState(null);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (!loading && products.length > 0) {
            const found = getProductById(id);
            setProduct(found || null);
        }
    }, [id, products, loading, getProductById]);

    if (loading) return <div style={{ height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cargando producto...</div>;
    if (!product) return <div style={{ padding: '4rem', textAlign: 'center' }}>Producto no encontrado. <Link to="/">Volver al inicio</Link></div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Por favor selecciona una talla");
            return;
        }
        addToCart(product, selectedSize);
    };

    // Filtramos productos relacionados por categoría
    const RELATED = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="product-page">
            <PageMeta
                title={product.title}
                description={`Compra ${product.title} en Lukstore. ${product.condition === 'new' ? 'Nuevo' : 'Pre-Loved'} y autenticado.`}
            />

            <div className="container product-main">
                {/* Left: Gallery */}
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={product.image} alt={product.title} />
                        {product.condition === 'used' && <span className="pdp-badge-used">Pre-Loved</span>}
                    </div>
                </div>

                {/* Right: Info */}
                <div className="product-details">
                    <div className="p-header">
                        <span className="p-brand">Jordan Brand / Nike</span>
                        <h1 className="p-title">{product.title}</h1>
                        <p className="p-price">
                            ${product.price}
                            {product.condition === 'used' && <span className="price-note"> (Pre-Loved)</span>}
                        </p>
                    </div>

                    <div className="p-condition-info">
                        <strong>Estado: {product.condition === 'new' ? 'Nuevo / Deadstock' : 'Pre-Loved / Usado'}</strong>
                        <p>{product.condition === 'new'
                            ? 'Producto 100% nuevo, sin uso, en su caja original.'
                            : 'Producto verificado por nuestro equipo. Condición 9/10. Caja original incluida.'}
                        </p>
                    </div>

                    <div className="size-selector">
                        <div className="size-header">
                            <label>Seleccionar Talla (US)</label>
                            <Link to="/guia-tallas" className="size-guide-link">Guía de tallas</Link>
                        </div>
                        <div className="size-options">
                            {['7', '8', '8.5', '9', '10', '11'].map(s => (
                                <button
                                    key={s}
                                    className={`size-btn ${selectedSize === s ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-actions">
                        <button className="btn btn-primary btn-block" onClick={handleAddToCart}>AGREGAR AL CARRITO</button>
                        {/* 6. Descripción Real */}
                        <div className="p-short-desc" style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '0.9rem', uppercase: 'true', marginBottom: '0.5rem' }}>Detalles</h3>
                            <p>{product.description || "Uno de los modelos más icónicos del basketball y el streetwear. Diseño clásico, comodidad y presencia que no pasan desapercibidas."}</p>
                        </div>

                        {/* 7, 8, 9. Info Blocks (Accordion Style or List) */}
                        <div className="p-info-list" style={{ borderTop: '1px solid #eee' }}>
                            <div className="info-item" style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Guía de Tallas</h4>
                                <p style={{ fontSize: '0.8rem', color: '#666' }}>Las tallas pueden variar. <Link to="/guia-tallas" style={{ textDecoration: 'underline' }}>Ver tabla de conversiones.</Link></p>
                            </div>
                            <div className="info-item" style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Envíos y Devoluciones</h4>
                                <p style={{ fontSize: '0.8rem', color: '#666' }}>Realizamos envíos a todo Chile. Tiempos varían según ubicación. <Link to="/envios" style={{ textDecoration: 'underline' }}>Ver políticas.</Link></p>
                            </div>
                            <div className="info-item" style={{ padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Autenticidad</h4>
                                <p style={{ fontSize: '0.8rem', color: '#666' }}>
                                    Todos nuestros productos son revisados antes de ser publicados. La información entregada busca ayudarte a tomar una decisión informada.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related - Cross Sell */}
                <div className="container related-products">
                    <div className="section-header">
                        <h2>Completa el Fit</h2>
                        <Link to="/hombre" className="link-arrow">Ver más</Link>
                    </div>
                    <div className="grid product-grid">
                        {RELATED.map(p => <ProductCard key={p.id} {...p} />)}
                    </div>
                </div>
            </div>
            );
};

            export default Product;

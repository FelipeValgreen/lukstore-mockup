import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import './Product.css';

const Product = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);

    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0]; // Fallback to first if not found (mock safety)

    if (!product) return <div>Product not found</div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Por favor selecciona una talla");
            return;
        }
        addToCart(product, selectedSize);
        // Optional: Feedback to user
        // alert("Agregado al carrito");
    };

    // Mock Related Data
    const RELATED = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="product-page">
            <div className="container product-main">
                {/* Left: Gallery */}
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
                        <span className="p-brand">Jordan Brand</span>
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
                            <a href="/guia-de-tallas" className="size-guide-link">Guía de tallas</a>
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
                        <button className="btn btn-primary btn-block" onClick={handleAddToCart}>Agregar al carrito</button>
                        <p className="shipping-note">Envío gratis a todo Chile en compras sobre $100.000</p>
                    </div>

                    {/* Trust / Service Accordion (Visual) */}
                    <div className="p-service-block">
                        <div className="service-item">
                            <span className="icon">🛡️</span>
                            <div className="text">
                                <strong>Autenticidad Garantizada</strong>
                                <p>Todos nuestros productos son revisados y seleccionados antes de ser publicados. La información entregada busca ayudarte a tomar una decisión informada.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <span className="icon">🚚</span>
                            <div className="text">
                                <strong>Despacho Express</strong>
                                <p>Envíos a Santiago en 24h. Regiones 2-5 días hábiles.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-short-desc">
                        <h3>Detalles</h3>
                        <p>{product.description || "Uno de los modelos más icónicos del basketball y el streetwear. Diseño clásico, comodidad y presencia que no pasan desapercibidas."}</p>
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

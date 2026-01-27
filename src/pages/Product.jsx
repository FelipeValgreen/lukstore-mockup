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
                <div className="product-gallery">
                    <div className="main-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="thumbnails">
                        <img src={product.image} alt="Thumb" />
                        <img src={product.image} alt="Thumb" />
                        <img src={product.image} alt="Thumb" />
                        <img src={product.image} alt="Thumb" />
                    </div>
                </div>

                {/* Right: Info */}
                <div className="product-details">
                    <h1 className="p-title">{product.title}</h1>
                    <p className="p-price">${product.price}</p>

                    <ul className="p-benefits">
                        <li>✔ Producto original</li>
                        <li>✔ Stock disponible</li>
                        <li>✔ Envíos a todo Chile</li>
                    </ul>

                    <div className="size-selector">
                        <label>Talla (US)</label>
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
                        <button className="btn btn-secondary btn-block">Consultar por WhatsApp</button>
                    </div>

                    <div className="p-short-desc">
                        <p>{product.description || "Uno de los modelos más icónicos del basketball y el streetwear. Diseño clásico, comodidad y presencia que no pasan desapercibidas."}</p>
                    </div>
                </div>
            </div>

            <div className="container product-content-blocks">
                {/* Trust Block */}
                <div className="trust-block">
                    <div className="trust-item">Envíos a todo Chile</div>
                    <div className="trust-item">Productos 100% originales</div>
                    <div className="trust-item">Atención directa por WhatsApp</div>
                </div>

                {/* SEO Description */}
                <div className="long-desc">
                    <h2>Descripción</h2>
                    <p>Las Air Jordan 3 White Cement son uno de los modelos más reconocidos en la historia del basketball y la cultura urbana. Su diseño combina materiales de alta calidad, una silueta atemporal y detalles que las convierten en un par imprescindible tanto para la cancha como para el uso diario. En Lukstore trabajamos exclusivamente con productos originales, garantizando stock real y una experiencia de compra confiable. Este modelo está disponible en tallas seleccionadas, con envío a todo Chile y atención directa para resolver cualquier duda antes de tu compra.</p>
                </div>

                {/* Specs */}
                <div className="specs">
                    <h3>Especificaciones</h3>
                    <dl>
                        <dt>Marca</dt><dd>Jordan</dd>
                        <dt>Modelo</dt><dd>{product.title}</dd>
                        <dt>Color</dt><dd>White Cement</dd>
                        <dt>Uso</dt><dd>{product.category}</dd>
                    </dl>
                </div>

                {/* FAQs */}
                <div className="faqs">
                    <h3>Preguntas Frecuentes</h3>
                    <div className="faq-item">
                        <strong>¿Son originales?</strong>
                        <p>Sí, todos nuestros productos son 100% originales.</p>
                    </div>
                    <div className="faq-item">
                        <strong>¿Hacen envíos?</strong>
                        <p>Sí, enviamos a todo Chile.</p>
                    </div>
                </div>
            </div>

            {/* Related */}
            <div className="container related-products">
                <h2>También te podría gustar</h2>
                <div className="grid product-grid">
                    {RELATED.map(p => <ProductCard key={p.id} {...p} />)}
                </div>
            </div>
        </div>
    );
};

export default Product;

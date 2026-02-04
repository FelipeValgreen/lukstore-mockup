import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './Cart.css'; // Reusing Cart styles for layout

const Checkout = () => {
    useDocumentTitle('Checkout');
    const navigate = useNavigate();
    const { cartItems, cartTotal, clearCart } = useCart();

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        region: ''
    });

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>Tu carrito está vacío (Checkout)</h2>
                <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
            </div>
        );
    }

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            clearCart();
            navigate('/success');
        }, 1500);
    };

    return (
        <div className="cart-page container"> {/* Reusing cart-page layout class for padding */}
            <h1 className="cart-title">Finalizar Compra</h1>

            <div className="cart-grid">
                {/* Left: Form */}
                <div className="checkout-form-container">
                    <form id="checkoutForm" onSubmit={handleSubmit} className="checkout-form">
                        <h3>Datos de Envío</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input required type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>

                        <div className="form-group">
                            <label>Dirección</label>
                            <input required type="text" name="address" value={formData.address} onChange={handleInputChange} />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Ciudad</label>
                                <input required type="text" name="city" value={formData.city} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Región</label>
                                <select required name="region" value={formData.region} onChange={handleInputChange}>
                                    <option value="">Selecciona...</option>
                                    <option value="RM">Metropolitana</option>
                                    <option value="V">Valparaíso</option>
                                    <option value="VIII">Biobío</option>
                                    {/* ... others */}
                                </select>
                            </div>
                        </div>

// ... existing code ...
                        <h3>Pago</h3>
                        <div className="payment-mock mp-payment">
                            <div className="payment-header">
                                <span style={{ color: '#009EE3', fontWeight: '800' }}>mercadopago</span>
                            </div>
                            <div className="payment-option selected">
                                <div className="mp-radio"></div>
                                <span>Tarjetas (Crédito, Débito, Prepago)</span>
                            </div>
                            <div className="payment-logos">
                                <span className="card-pill">Visa</span>
                                <span className="card-pill">Mastercard</span>
                                <span className="card-pill">Amex</span>
                                <span className="card-pill">Mach</span>
                            </div>
                            <p className="payment-note">
                                Estás en un servidor seguro. Al confirmar, serás redirigido a MercadoPago para completar la transacción.
                            </p>
                        </div>

                    </form>
                </div>

                {/* Right: Summary Order */}
                <div className="cart-summary">
                    {/* ... (existing summary code) ... */}
                    <h2>Tu Pedido</h2>
                    <div className="order-items-preview">
                        {cartItems.map(item => (
                            <div key={`${item.id}-${item.size}`} className="order-preview-row">
                                <span>{item.title} x {item.quantity}</span>
                                <span>${(parseInt(String(item.price).replace(/\./g, '')) * item.quantity).toLocaleString('es-CL')}</span>
                            </div>
                        ))}
                    </div>
                    <div className="summary-divider"></div>
                    <div className="summary-row total">
                        <span>Total a Pagar</span>
                        <span>${cartTotal.toLocaleString('es-CL')}</span>
                    </div>
                    <button type="submit" form="checkoutForm" className="btn btn-primary btn-block mp-btn">
                        Pagar con MercadoPago
                    </button>
                    <Link to="/cart" className="continue-shopping" style={{ marginTop: '1rem' }}>
                        Volver al carrito
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

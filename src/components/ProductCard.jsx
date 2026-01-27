import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, category, condition, discount, originalPrice, isDrop }) => {
    return (
        <Link to={`/product/${id}`} className="product-card">
            <div className="product-image-container">
                <img src={image} alt={title} className="product-image" />
                <div className="card-badges">
                    {isDrop && <span className="badge badge-drop">Drop</span>}
                    {condition === 'used' && <span className="badge badge-used">Pre-Loved</span>}
                    {discount && <span className="badge badge-sale">-{discount}%</span>}
                </div>
            </div>
            <div className="product-info">
                <p className="product-category">{category} {condition === 'used' ? '• Used' : ''}</p>
                <h3 className="product-title">{title}</h3>
                <div className="price-row">
                    <p className="product-price">${price}</p>
                    {originalPrice && <p className="product-price-original">${originalPrice}</p>}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

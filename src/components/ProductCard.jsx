import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, image, title, price, category, condition, discount, originalPrice, isDrop }) => {
    // The instruction implies that 'product' object is passed, and 'loading' state is managed.
    // For this change, we'll assume 'product' is available and 'loading' state is handled
    // by the parent or within the component (e.g., using useState).
    // Since the instruction only provides the JSX change, we'll adapt the existing props
    // to match the new JSX structure as closely as possible, assuming 'product' is not
    // explicitly passed but its properties are available via the existing props.
    // We'll also need to add useState for 'loading' to make the provided snippet syntactically correct.
    const [loading, setLoading] = React.useState(true);

    return (
        <Link to={`/product/${id}`} className="product-card">
            <div className={`product-image-container ${loading ? 'loading' : ''}`}>
                <img src={image} alt={title} className="product-image" onLoad={() => setLoading(false)} />
                <div className="card-badges">
                    {isDrop && <span className="badge badge-drop">DROP</span>}
                    {!isDrop && condition === 'new' && <span className="badge badge-new">NUEVO</span>}
                    {!isDrop && condition === 'used' && <span className="badge badge-used">USED</span>}
                    {/* The original discount badge was removed in the provided snippet, so we remove it here too. */}
                </div>

                {/* Heritage Isotype Overlay */}
                <div className="card-isotype">
                    <img src="/assets/logo-isotype.png" alt="" />
                </div>
            </div>
            <div className="product-info">
                <p className="product-category">{category} {condition === 'used' ? '• Used' : ''}</p>
                <h3 className="product-title">{title}</h3>
                <div className="price-row">
                    <p className="product-price">
                        {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price)}
                    </p>
                    {originalPrice && (
                        <p className="product-price-original">
                            {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(originalPrice)}
                        </p>
                    )}
                </div>
                <button className="btn-view-product">Ver producto</button>
            </div>
        </Link>
    );
};

export default ProductCard;

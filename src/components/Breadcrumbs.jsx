import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ items }) => {
    // items example: [{ label: 'Zapatillas', url: '/zapatillas' }, { label: 'Jordan', url: '/zapatillas/jordan' }]

    // Generate Schema.org JSON-LD
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": `https://lukstore.cl${item.url}`
        }))
    };

    return (
        <nav className="breadcrumbs-container" aria-label="Breadcrumb">
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>

            <ol className="breadcrumbs-list">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className={`breadcrumb-item ${index === items.length - 1 ? 'current' : ''}`}>
                        {index === items.length - 1 ? (
                            <span>{item.label}</span>
                        ) : (
                            <Link to={item.url}>{item.label}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;

import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './Category.css'; // Re-use category grid styles

const Search = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q') || '';

    useDocumentTitle(`Resultados para "${query}"`);

    // Simple search filter
    const results = PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="category-page">
            <div className="container breadcrumbs" style={{ marginTop: '2rem' }}>
                <span>Home</span> / <span className="current">Búsqueda</span>
            </div>

            <section className="container cat-body">
                <div className="cat-products" style={{ width: '100%' }}> {/* Full width, no sidebar */}
                    <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Resultados para: "{query}"</h2>

                    {results.length > 0 ? (
                        <div className="grid product-grid">
                            {results.map(p => <ProductCard key={p.id} {...p} />)}
                        </div>
                    ) : (
                        <div style={{ padding: '3rem 0', textAlign: 'center' }}>
                            <h3>No encontramos resultados.</h3>
                            <p>Intenta con otra palabra clave o revisa nuestras categorías.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Search;

import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageMeta } from '../hooks/usePageMeta';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { PRODUCTS } from '../data/products';
import { getClusterData } from '../data/clusters'; // Import the new helper
import './Category.css';

const ClusterPage = () => {
    const { category, brand, model } = useParams();

    // 1. Fetch Rich Cluster Data
    const clusterData = getClusterData(category, brand, model);

    // 2. Filter products based on hierarchy AND active filters
    const [filters, setFilters] = useState({ size: 'all', sort: 'newest' });

    const filteredProducts = useMemo(() => {
        let result = PRODUCTS.filter(p => {
            const h = p.hierarchy.map(x => x.toLowerCase());

            // Broad Category Logic (Hombre/Mujer/Zapatillas)
            const catLower = category ? category.toLowerCase() : '';

            // 1. Direct Hierarchy Match
            let catMatch = !category || h.includes(catLower);

            // 2. Gender Fallback for 'hombre'/'mujer'
            if (!catMatch && (catLower === 'hombre' || catLower === 'mujer')) {
                const productGender = p.gender ? p.gender.toLowerCase() : 'unisex';
                if (productGender === catLower || productGender === 'unisex') {
                    catMatch = true;
                }
            }
            // 3. 'Zapatillas' fallback (usually in hierarchy, but just in case)
            if (!catMatch && catLower === 'zapatillas') {
                catMatch = true; // Assume all products are zapatillas for now in this store
            }

            const brandMatch = !brand || h.includes(brand.toLowerCase());
            const modelMatch = !model || h.includes(model.replace(/-/g, ' ').toLowerCase());
            return catMatch && brandMatch && modelMatch;
        });

        // Apply visual filters (Mock logic as sizes aren't fully in data yet)
        if (filters.size !== 'all') {
            // In a real app, check p.sizes.includes(filters.size)
            // For mock, we just shuffle or keep all to not hide products unnecessarily
        }

        // Sort
        if (filters.sort === 'price-asc') {
            result.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'price-desc') {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [category, brand, model, filters]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    // 3. Fallback Content if no specific cluster data exists
    const title = clusterData?.title || (model
        ? `${model.replace(/-/g, ' ').toUpperCase()} - Colección Chile`
        : brand
            ? `${brand.toUpperCase()} - Zapatillas y Streetwear`
            : category.toUpperCase());

    const description = clusterData?.description || `Explora la mejor selección de ${title} en Lukstore. Modelos originales y verificados.`;
    const heroImage = clusterData?.heroImage || '/assets/hero-street-editorial.png';

    // Breadcrumbs
    const crumbs = [
        { label: category, url: `/${category}` },
        ...(brand ? [{ label: brand, url: `/${category}/${brand}` }] : []),
        ...(model ? [{ label: model, url: `/${category}/${brand}/${model}` }] : [])
    ];

    return (
        <div className="cluster-page category-page">
            <PageMeta title={title} description={description} />

            <div className="container">
                <Breadcrumbs items={crumbs} />

                {/* HERO SECTION */}
                <section className="cat-hero" style={{ backgroundImage: `url('${heroImage}')` }}>
                    <div className="cat-hero-overlay"></div>
                    <div className="container cat-hero-content">
                        <h1>{title}</h1>
                        <p>{clusterData?.subtitle || description}</p>
                    </div>
                </section>

                {/* PRODUCT GRID & FILTERS */}
                <div className="cat-body" style={{ marginTop: '3rem' }}>
                    <aside className="cat-filters">
                        <h3>Filtros</h3>
                        <div className="filter-group">
                            <label>Ordenar por</label>
                            <select value={filters.sort} onChange={(e) => handleFilterChange('sort', e.target.value)}>
                                <option value="newest">Más nuevos</option>
                                <option value="price-asc">Precio: Menor a Mayor</option>
                                <option value="price-desc">Precio: Mayor a Menor</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label>Talla</label>
                            <select value={filters.size} onChange={(e) => handleFilterChange('size', e.target.value)}>
                                <option value="all">Todas</option>
                                <option value="7">US 7</option>
                                <option value="8">US 8</option>
                                <option value="9">US 9</option>
                                <option value="10">US 10</option>
                            </select>
                        </div>
                    </aside>

                    <main className="cat-products">
                        <div className="grid product-grid">
                            {filteredProducts.map(p => <ProductCard key={p.id} {...p} />)}
                        </div>
                        {filteredProducts.length === 0 && <p style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>Estamos reponiendo stock para esta colección.</p>}
                    </main>
                </div>

                {/* RICH PILLAR CONTENT (SEO ENGINE) */}
                {clusterData?.content && (
                    <section className="seo-content-block" style={{ marginTop: '4rem', padding: '3rem', background: '#f5f5f5', borderRadius: '8px' }}>
                        <div className="seo-text" dangerouslySetInnerHTML={{ __html: clusterData.content }}></div>

                        {/* FAQ Schema Markup & Visuals */}
                        {clusterData.faq && clusterData.faq.length > 0 && (
                            <div className="cluster-faq" style={{ marginTop: '2rem', borderTop: '1px solid #ddd', paddingTop: '2rem' }}>
                                <h3>Preguntas Frecuentes</h3>
                                <div className="faq-grid">
                                    {clusterData.faq.map((item, index) => (
                                        <div key={index} className="faq-item" style={{ marginBottom: '1rem' }}>
                                            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{item.q}</strong>
                                            <p style={{ margin: 0, color: '#555' }}>{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* FAQ Schema Script */}
                        {clusterData.faq && (
                            <script type="application/ld+json">
                                {JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "FAQPage",
                                    "mainEntity": clusterData.faq.map(f => ({
                                        "@type": "Question",
                                        "name": f.q,
                                        "acceptedAnswer": {
                                            "@type": "Answer",
                                            "text": f.a
                                        }
                                    }))
                                })}
                            </script>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
};

export default ClusterPage;

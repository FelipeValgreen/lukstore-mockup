import React from 'react';
import ProductCard from '../components/ProductCard';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import './Category.css';

import { getProductsByCategory } from '../data/products';

// Content Config
const CATEGORY_META = {
    basketball: {
        title: "Basketball Heritage",
        description: "Modelos con origen, silueta y uso real. Zapatillas que definieron la cultura y el juego.",
        image: "/assets/cat-basketball.png"
    },
    streetwear: {
        title: "Streetwear Selected",
        description: "Streetwear funcional. Corte, material y actitud. Piezas seleccionadas para el día a día.",
        image: "/assets/cat-streetwear.png"
    },
    drops: {
        title: "Limited Drops",
        description: "Lanzamientos especiales. Cuando se acaban, no vuelven. Sin hype falso.",
        image: "/assets/cat-drops.png"
    }
};

const Category = ({ type }) => {
    const meta = CATEGORY_META[type];
    const [products, setProducts] = React.useState([]);
    const [filters, setFilters] = React.useState({ size: 'all', sort: 'newest' });

    // Initial load & Filter logic
    React.useEffect(() => {
        let result = getProductsByCategory(type);

        // Filter by Size (Mock logic as data doesn't have explicit sizes per product in this mock, assuming all have all sizes for demo, or we can random filter)
        // For this mock, we'll just log it or maybe randomize
        if (filters.size !== 'all') {
            // Mock: Filter out some products randomly to simulate size availability
            // In a real app: result = result.filter(p => p.sizes.includes(filters.size));
        }

        // Sort
        if (filters.sort === 'price-asc') {
            result.sort((a, b) => parseInt(a.price.replace(/\./g, '')) - parseInt(b.price.replace(/\./g, '')));
        } else if (filters.sort === 'price-desc') {
            result.sort((a, b) => parseInt(b.price.replace(/\./g, '')) - parseInt(a.price.replace(/\./g, '')));
        }
        // 'newest' is default order in data

        setProducts([...result]);
    }, [type, filters]);

    useDocumentTitle(meta ? meta.title : 'Categoría');

    if (!meta) return <div>Category not found</div>;

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div className="category-page">
            {/* Hero Category */}
            <section className="cat-hero" style={{ backgroundImage: `url('${meta.image}')` }}>
                <div className="cat-hero-overlay"></div>
                <div className="container cat-hero-content">
                    <h1>{meta.title}</h1>
                    <p>{meta.description}</p>
                </div>
            </section>

            {/* Breadcrumbs (Visual only) */}
            <div className="container breadcrumbs">
                <span>Home</span> / <span className="current">{type}</span>
            </div>

            {/* Filters & Grid */}
            <section className="container cat-body">
                <aside className="cat-filters">
                    <h3>Filtros</h3>
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
                    <div className="filter-group">
                        <label>Ordenar por</label>
                        <select value={filters.sort} onChange={(e) => handleFilterChange('sort', e.target.value)}>
                            <option value="newest">Más nuevos</option>
                            <option value="price-asc">Precio: Menor a Mayor</option>
                            <option value="price-desc">Precio: Mayor a Menor</option>
                        </select>
                    </div>
                </aside>

                <div className="cat-products">
                    <div className="grid product-grid">
                        {products.map(p => <ProductCard key={p.id} {...p} />)}
                    </div>
                    {products.length === 0 && <p>No hay productos que coincidan con los filtros.</p>}
                </div>
            </section>
        </div>
    );
};

export default Category;

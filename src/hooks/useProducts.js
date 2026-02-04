
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*');

                if (error) throw error;

                // Parse prices from numeric string/number to formatted string if needed
                // But for now, let's keep the raw data and let components handle display formatting if possible
                // OR map it to match the exact shape expected by components.

                // Existing code expects 'price' as string "199.990" (formatted)
                // DB stores numeric 199990. 
                // We need to format it back to match the mock data shape to avoid breaking UI.

                const formattedData = data.map(p => ({
                    ...p,
                    price: p.price.toLocaleString('es-CL'),
                    originalPrice: p.original_price ? p.original_price.toLocaleString('es-CL') : null,
                    isDrop: p.is_drop, // DB: snake_case -> App: camelCase
                    // category, title, image, size, condition, description are same
                    // discount is same
                }));

                setProducts(formattedData);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getActiveDrops = useCallback(() => products.filter(p => p.isDrop), [products]);
    const getFeaturedProducts = useCallback(() => products.filter(p => p.condition === 'new'), [products]);
    const getUsedProducts = useCallback(() => products.filter(p => p.condition === 'used'), [products]);

    // Helper to filter locally (since we fetch all at once for this small store)
    const getProductsByCategory = useCallback((cat) => {
        if (!products.length) return [];
        if (cat === 'drops') return getActiveDrops();
        return products.filter(p =>
            p.category.toLowerCase().includes(cat.toLowerCase()) ||
            p.title.toLowerCase().includes(cat.toLowerCase())
        );
    }, [products, getActiveDrops]);

    const getProductById = useCallback((id) => products.find(p => p.id === id), [products]);

    return {
        products,
        loading,
        error,
        getActiveDrops,
        getFeaturedProducts,
        getUsedProducts,
        getProductsByCategory,
        getProductById
    };
};

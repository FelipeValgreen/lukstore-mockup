import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { PRODUCTS } from '../data/products';

export const useProducts = () => {
    const [products, setProducts] = useState(PRODUCTS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*');

                if (error) throw error;
                if (data) setProducts(data);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError(err.message);
                // Fallback to mock data if DB fails or is empty, to prevent blank screen
                setProducts(PRODUCTS);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    const getActiveDrops = useCallback(() => products.filter(p => p.isDrop), [products]);
    const getFeaturedProducts = useCallback(() => products.filter(p => p.condition === 'new'), [products]);
    const getUsedProducts = useCallback(() => products.filter(p => p.condition === 'used'), [products]);

    // Helper to filter locally
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

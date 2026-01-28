import { useEffect } from 'react';

export const usePageMeta = (title, description) => {
    useEffect(() => {
        // Set Title
        document.title = `${title} | LUKSTORE`;

        // Set Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = "description";
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", description || "LUKSTORE. Selected Street Goods. Zapatillas, ropa y accesorios urbanos seleccionados uno a uno.");

    }, [title, description]);
};

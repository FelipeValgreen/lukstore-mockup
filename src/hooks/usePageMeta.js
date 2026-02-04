import React from 'react';
import { Helmet } from 'react-helmet';

export const PageMeta = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title} | LUKSTORE</title>
            <meta name="description" content={description || "Streetwear curado y esenciales vintage. Autenticados en Chile."} />
        </Helmet>
    );
};

export const usePageMeta = (title, description) => {
    // Legacy hook wrapper if needed, or we can just export the component. 
    // Given usage in About.jsx is `usePageMeta(...)`, let's keep the hook signature but it might be better to just use the component in the pages.
    // Actually, Helmet is a component. Hooks can't return JSX. 
    // The previous hook was a side-effect hook. Helmet manages side effects via Component.
    // So usually we render <Helmet> in the component.
    // I will deprecated this hook or make it a "dumb" no-op and instruct usage of <Helmet> or <PageMeta /> component.

    // BUT to avoid breaking existing pages immediately, I'll keep the DOM effect OR refactor pages to use <PageMeta />.
    // Refactoring pages is cleaner.
};


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


import React from 'react';

const SEOBlock = ({ title, content }) => {
    return (
        <section className="container" style={{ margin: '6rem auto', maxWidth: '800px', textAlign: 'center' }}>
            <div style={{ opacity: 0.6 }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#666' }}>{content}</p>
            </div>
        </section>
    );
};

export default SEOBlock;

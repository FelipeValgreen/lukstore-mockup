export const PRODUCTS = [
    // --- JORDAN 4 CLUSTER ---
    {
        id: 'j4-red-thunder',
        title: "Nike Air Jordan 4 Retro Red Thunder",
        slug: "red-thunder",
        price: 189990,
        sku: "J4-RT-001",
        stock: 5,
        image: "/assets/hero_red_thunder.png",
        images: ["/assets/hero_red_thunder.png", "/assets/prod-jordan4-back.png"],
        condition: "new",
        isDrop: true, // Mark as Drop

        // IKEA-Style Architecture Data
        cluster: "jordan-4",
        hierarchy: ["Zapatillas", "Jordan", "Jordan 4"],
        gender: "Hombre",
        seo: {
            title: "Nike Air Jordan 4 Retro Red Thunder - Originales - Envío a Chile",
            description: "Compra las Air Jordan 4 Red Thunder en Lukstore. 100% Originales y verificadas. Envío rápido a todo Chile. Cuotas sin interés."
        },
        shortDescription: "El clásico diseño Thunder regresa con toques de rojo carmesí. Nobuk premium y malla de rejilla.",
        longDescription: `
            <h3>Historia del Modelo</h3>
            <p>Las Air Jordan 4, lanzadas originalmente en 1989, fueron el segundo modelo diseñado por Tinker Hatfield. Esta edición "Red Thunder" toma el bloqueo de color del icónico "Thunder" de 2006 pero reemplaza el amarillo Tour por un rojo carmesí vibrante.</p>
            
            <h3>Diseño y Materiales</h3>
            <p>Parte superior de nobuk negro de alta calidad que ofrece durabilidad y un acabado premium. Los detalles en rojo en los ojales moldeados, la lengüeta interior y la entresuela crean un contraste audaz. Mantiene la clásica malla de rejilla en los paneles laterales para ventilación.</p>
            
            <h3>Autenticidad Garantizada</h3>
            <p>Cada par en Lukstore pasa por una verificación de 8 puntos: costuras, etiqueta de talla, olor, luz UV, caja, accesorios, plantilla y suela. Garantizamos 100% de originalidad o te devolvemos tu dinero.</p>
        `,
        specs: {
            brand: "Jordan",
            model: "Jordan 4",
            colorway: "Black/White/Red",
            releaseYear: "2022"
        },
        faq: [
            { q: "¿Son originales?", a: "Sí, todos nuestros productos son 100% originales verificados." },
            { q: "¿Cómo tallan?", a: "Las Jordan 4 suelen tallar 'true to size' (fieles a la talla)." }
        ]
    },
    {
        id: 'j4-military-blue',
        title: "Nike Air Jordan 4 Retro Military Blue",
        slug: "military-blue",
        price: 184990,
        sku: "J4-MB-002",
        stock: 4,
        image: "/assets/jordan_4_military_blue.png",
        images: ["/assets/jordan_4_military_blue.png"],
        condition: "new",
        isDrop: true,

        cluster: "jordan-4",
        hierarchy: ["Zapatillas", "Jordan", "Jordan 4"],
        gender: "Hombre",
        seo: {
            title: "Nike Air Jordan 4 Military Blue (2024) - Originales Lukstore",
            description: "El regreso del ícono. Jordan 4 Military Blue con Nike Air en el talón. Disponibles en Chile con envío express."
        },
        shortDescription: "El colorway OG de 1989 regresa con la marca Nike Air en el talón. Cuero blanco y azul militar.",
        longDescription: `
            <h3>El Regreso de una Leyenda</h3>
            <p>Después de años de espera, el "Military Blue" regresa en su forma más fiel a la original de 1989. Conocidas por su estética limpia de cuero blanco y acentos azules industriales.</p>
            
            <h3>Detalles OG</h3>
            <p>A diferencia de los lanzamientos de 2006 y 2012, esta versión 2024 trae el logotipo "Nike Air" en el talón, un detalle purista que los coleccionistas valoran inmensamente.</p>
        `,
        specs: {
            brand: "Jordan",
            model: "Jordan 4",
            colorway: "White/Military Blue/Neutral Grey",
            releaseYear: "2024"
        },
        faq: [
            { q: "¿Incluye caja original?", a: "Sí, se envía con doble caja para protección." }
        ]
    },
    {
        id: 'j4-lightning',
        title: "Nike Air Jordan 4 Retro Lightning",
        slug: "lightning",
        price: 179990,
        sku: "J4-LG-003",
        stock: 6,
        image: "/assets/jordan_4_lightning_style.png",
        images: ["/assets/jordan_4_lightning_style.png"],
        condition: "new",
        isDrop: true,

        cluster: "jordan-4",
        hierarchy: ["Zapatillas", "Jordan", "Jordan 4"],
        gender: "Hombre",
        seo: {
            title: "Nike Air Jordan 4 Lightning - Amarillo Tour - Lukstore Chile",
            description: "Uno de los pares más buscados. Jordan 4 Lightning disponible en tallas seleccionadas."
        },
        shortDescription: "Vibrante durabuck amarillo tour. Un grial relanzado para una nueva generación.",
        longDescription: `
            <h3>Un Grial Moderno</h3>
            <p>Originalmente lanzado en 2006 exclusivamente online, el Jordan 4 Lightning se convirtió en una leyenda. Su llamativo color amarillo lo hace imposible de ignorar.</p>
        `,
        specs: {
            brand: "Jordan",
            model: "Jordan 4",
            colorway: "Tour Yellow/Dark Blue Grey",
            releaseYear: "2021"
        },
        faq: []
    },

    // --- JORDAN 1 CLUSTER (Example of another cluster) ---
    {
        id: 'j1-chicago-lost-found',
        title: "Air Jordan 1 Retro High OG Lost & Found",
        slug: "lost-and-found",
        price: 249990,
        sku: "J1-LF-001",
        stock: 3,
        image: "/assets/prod-jordan1.png",
        images: ["/assets/prod-jordan1.png"],
        condition: "new",
        isDrop: true,

        cluster: "jordan-1",
        hierarchy: ["Zapatillas", "Jordan", "Jordan 1"],
        gender: "Hombre",
        seo: {
            title: "Air Jordan 1 Chicago Lost & Found - La Reinvención del Clásico",
            description: "El colorway Chicago con estética vintage. Stock limitado en Lukstore."
        },
        shortDescription: "La historia de un par perdido en el inventario. Cuero agrietado y caja vintage.",
        longDescription: `
            <h3>Storytelling: Lost & Found</h3>
            <p>Este par reimagina cómo se vería un Jordan 1 Chicago de 1985 encontrado décadas después en el sótano de una tienda "Mom & Pop".</p>
        `,
        specs: {
            brand: "Jordan",
            model: "Jordan 1",
            colorway: "Varsity Red/Black/Sail/Muslin",
            releaseYear: "2022"
        },
        faq: []
    },

    // --- ACCESSORIES CLUSTER ---
    {
        id: 'lukstore-socks-3pack',
        title: "Calcetines Lukstore Essential (3-Pack)",
        slug: "calcetines-essential-3pack",
        price: 14990,
        sku: "AC-SK-021",
        stock: 50,
        image: "/assets/hero-street-editorial.png",
        images: ["/assets/hero-street-editorial.png"],
        condition: "new",

        cluster: "accesorios-textil",
        hierarchy: ["Accesorios", "Textil", "Calcetines"],
        seo: {
            title: "Pack Calcetines Crew Streetwear - Algodón Premium",
            description: "Calcetines blancos con logo minimalista. El complemento perfecto para tus sneakers."
        },
        shortDescription: "Pack de 3 pares. Algodón peinado.",
        longDescription: "<p>Básicos no tan básicos. Diseñados para no bajarse y mantener la forma.</p>",
        specs: {
            brand: "Lukstore",
            model: "Crew Socks",
            colorway: "White",
            releaseYear: "2024"
        },
        faq: []
    },
    {
        id: 'lukstore-cap-black',
        title: "Jockey Lukstore 5-Panel Black",
        slug: "cap-5panel-black",
        price: 24990,
        sku: "AC-CP-022",
        stock: 20,
        image: "/assets/cat-basketball.png",
        images: ["/assets/cat-basketball.png"],
        condition: "new",

        cluster: "accesorios-headwear",
        hierarchy: ["Accesorios", "Headwear", "Gorros"],
        seo: {
            title: "Gorra 5-Panel Negra - Estilo Urbano Tech",
            description: "Nylon resistente al agua y ajuste perfecto."
        },
        shortDescription: "Gorra 5-panel técnica.",
        longDescription: "<p>Inspirada en el techwear y la funcionalidad urbana.</p>",
        specs: {
            brand: "Lukstore",
            model: "5-Panel",
            colorway: "Black",
            releaseYear: "2024"
        },
        faq: []
    },
    {
        id: 'lukstore-tote-canvas',
        title: "Tote Bag Lukstore Heavy Canvas",
        slug: "tote-canvas-heavy",
        price: 19990,
        sku: "AC-TB-023",
        stock: 30,
        image: "/assets/cat-drops.png",
        images: ["/assets/cat-drops.png"],
        condition: "new",

        cluster: "accesorios-bolsos",
        hierarchy: ["Accesorios", "Bolsos", "Totes"],
        seo: {
            title: "Tote Bag Canvas Grueso - Streetwear Chile",
            description: "Resistente y con estilo. Cabe tu laptop y tus sneakers."
        },
        shortDescription: "Canvas pesado 12oz.",
        longDescription: "<p>La bolsa definitiva para el día a día.</p>",
        specs: {
            brand: "Lukstore",
            model: "Tote",
            colorway: "Natural",
            releaseYear: "2024"
        },
        faq: []
    },
    {
        id: 'dunk-low-rose-whisper',
        title: "Nike Dunk Low Rose Whisper (W)",
        slug: "rose-whisper",
        price: 139990,
        sku: "NK-DL-005",
        stock: 8,
        image: "/assets/dunk_low_olive.png", // Placeholder image 
        images: ["/assets/dunk_low_olive.png"],
        condition: "new",
        isDrop: true,

        cluster: "dunk-low",
        hierarchy: ["Zapatillas", "Nike", "Dunk Low"],
        gender: "Mujer",
        seo: {
            title: "Nike Dunk Low Rose Whisper - Mujer - Lukstore",
            description: "El tono rosa suave perfecto para cualquier temporada. Dunk Low originales en tallas de mujer."
        },
        shortDescription: "Tonos tierra y rosados suaves. Cuero premium.",
        longDescription: "<p>Un colorway que se ha convertido en un esencial instantáneo. Combina con todo.</p>",
        specs: {
            brand: "Nike",
            model: "Dunk Low",
            colorway: "White/Rose Whisper",
            releaseYear: "2023"
        },
        faq: []
    }
];

// --- HELPER FUNCTIONS (Updated to support new structure) ---

export const getActiveDrops = () => {
    // Logic: Products explicitly marked as drops
    return PRODUCTS.filter(p => p.isDrop === true);
};

export const getFeaturedProducts = () => PRODUCTS.filter(p => p.price > 170000);

export const getProductsByCategory = (cat) => {
    const cleanCat = cat.toLowerCase();

    // Direct hierarchy match
    const hierarchyMatch = PRODUCTS.filter(p =>
        p.hierarchy.some(h => h.toLowerCase() === cleanCat)
    );
    if (hierarchyMatch.length > 0) return hierarchyMatch;

    // Fallback URL mapping
    if (cleanCat === 'zapatillas') return PRODUCTS.filter(p => p.hierarchy.includes('Zapatillas'));
    if (cleanCat === 'streetwear') return PRODUCTS.filter(p => p.hierarchy.includes('Hombres') || p.sku.includes('AP'));
    if (cleanCat === 'accesorios') return PRODUCTS.filter(p => p.hierarchy.includes('Accesorios'));
    // Fixed: Broad Match for Gender
    if (cleanCat === 'hombre') return PRODUCTS.filter(p => p.gender === 'Hombre' || p.gender === 'Unisex');
    if (cleanCat === 'mujer') return PRODUCTS.filter(p => p.gender === 'Mujer' || p.gender === 'Unisex');

    // Loose search
    return PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(cleanCat) ||
        (p.tags && p.tags.some(t => t.includes(cleanCat)))
    );
};

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);
export const getProductBySlug = (slug) => PRODUCTS.find(p => p.slug === slug);

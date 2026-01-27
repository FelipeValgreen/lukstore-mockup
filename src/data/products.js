// Basic mock data with New/Used flags and Categories

export const PRODUCTS = [
    // --- JORDANS (High, Mid, Low) ---
    {
        id: 'j1-high-bred',
        title: "Air Jordan 1 Retro High OG 'Bred'",
        price: "199.990",
        image: "/assets/prod-jordan1.png",
        category: "Basketball",
        size: ["8", "9", "10", "11"],
        condition: 'new',
        isDrop: true,
        description: "El clásico que lo inició todo. Cuero premium, colores icónicos."
    },
    {
        id: 'j4-cement',
        title: "Air Jordan 4 Retro 'White Cement'",
        price: "361.200",
        image: "/assets/prod-jordan4.png",
        category: "Basketball",
        size: ["9", "10"],
        condition: 'new',
        description: "Diseño atemporal de Tinker Hatfield. Malla lateral y soporte."
    },
    {
        id: 'j1-low-black-toe',
        title: "Air Jordan 1 Low 'Black Toe'",
        price: "126.990",
        image: "/assets/prod-jordan1.png", // Reusing for consistency unless I gen specific low
        category: "Streetwear",
        size: ["7", "8", "9", "10"],
        condition: 'new',
        description: "Perfil bajo para el día a día. Comodidad y estilo heritage."
    },
    {
        id: 'j4-sb-navy',
        title: "Jordan 4 Retro SP x Nike SB",
        price: "479.000",
        image: "/assets/prod-jordan4.png",
        category: "Skateboarding",
        size: ["10"],
        condition: 'new',
        isDrop: true
    },
    {
        id: 'j7-retro-geo',
        title: "Air Jordan 7 Retro 'Geometric'",
        price: "649.937",
        image: "/assets/prod-jordan1.png", // Placeholder reuse
        category: "Basketball",
        size: ["9"],
        condition: 'new'
    },

    // --- USED / PRE-LOVED (Condition: used) ---
    {
        id: 'j1-mid-dark-used',
        title: "Jordan 1 Mid Dark Chocolate (Used)",
        price: "150.000",
        originalPrice: "190.000",
        image: "/assets/prod-jordan1.png",
        category: "Streetwear",
        size: ["9.5"],
        condition: 'used',
        discount: 20
    },
    {
        id: 'j1-bubblegum-used',
        title: "Jordan 1 Retro High OG Bubble Gum (Used)",
        price: "110.000",
        originalPrice: "149.000",
        image: "/assets/prod-jordan1.png",
        category: "Streetwear",
        size: ["7"],
        condition: 'used',
        discount: 25
    },
    {
        id: 'j5-retro-oreo-used',
        title: "Jordan 5 Retro Oreo (Used)",
        price: "200.000",
        image: "/assets/prod-jordan4.png", // Using bulky silhouette placeholder
        category: "Basketball",
        size: ["10"],
        condition: 'used'
    },

    // --- AIR MAX & OTHERS ---
    {
        id: 'am90-premium',
        title: "Nike Air Max 90 Premium",
        price: "152.990",
        image: "/assets/prod-airmax.png",
        category: "Streetwear",
        size: ["8", "9", "10"],
        condition: 'new'
    },
    {
        id: 'am-nuaxis',
        title: "Nike Air Max Nuaxis Urban",
        price: "84.990",
        image: "/assets/prod-airmax.png",
        category: "Running",
        size: ["7", "8", "9", "11"],
        condition: 'new'
    },
    {
        id: 'am-flight-court',
        title: "Jordan Flight Court",
        price: "70.990",
        originalPrice: "85.000",
        image: "/assets/prod-jordan4.png",
        category: "Basketball",
        size: ["8", "9"],
        condition: 'new',
        discount: 15
    },
    {
        id: 'am-1-pro-green',
        title: "Air Max 1 'Pro Green'",
        price: "194.990",
        image: "/assets/prod-airmax.png",
        category: "Streetwear",
        size: ["9", "10.5"],
        condition: 'new'
    },
    {
        id: 'j8-retro',
        title: "Air Jordan 8 Retro",
        price: "352.117",
        image: "/assets/prod-jordan4.png",
        category: "Basketball",
        size: ["10"],
        condition: 'new'
    },
    {
        id: 'j1-mid-se',
        title: "Air Jordan 1 Mid SE",
        price: "144.990",
        image: "/assets/prod-jordan1.png",
        category: "Streetwear",
        size: ["8.5", "9"],
        condition: 'new'
    }
];

export const getActiveDrops = () => {
    return PRODUCTS.filter(p => p.isDrop);
};

export const getFeaturedProducts = () => PRODUCTS.filter(p => p.condition === 'new');
export const getUsedProducts = () => PRODUCTS.filter(p => p.condition === 'used');

export const getProductsByCategory = (cat) => {
    if (cat === 'drops') return getActiveDrops();
    return PRODUCTS.filter(p => p.category.toLowerCase().includes(cat.toLowerCase()) || p.title.toLowerCase().includes(cat.toLowerCase()));
};

export const getProductById = (id) => PRODUCTS.find(p => p.id === id);

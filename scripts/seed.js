
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tvxmahurihmbceyzcxfl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_kKVyDuEfQF2gH1m0lRfCgQ_pr0XbQA7'; // Anon key

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const PRODUCTS = [
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
        image: "/assets/prod-jordan1.png",
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
        image: "/assets/prod-jordan1.png",
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
        image: "/assets/prod-jordan4.png",
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

const parsePrice = (priceStr) => {
    if (!priceStr) return null;
    if (typeof priceStr === 'number') return priceStr;
    // Remove dots and parse as integer
    return parseInt(priceStr.replace(/\./g, ''), 10);
};

const seed = async () => {
    console.log('Seeding database...');

    // Transform data
    const records = PRODUCTS.map(p => ({
        id: p.id,
        title: p.title,
        price: parsePrice(p.price),
        original_price: parsePrice(p.originalPrice),
        image: p.image,
        category: p.category,
        size: p.size,
        condition: p.condition,
        is_drop: p.isDrop || false,
        description: p.description || null,
        discount: p.discount || null
    }));

    const { data, error } = await supabase
        .from('products')
        .upsert(records, { onConflict: 'id' })
        .select();

    if (error) {
        console.error('Error seeding data:', error);
        console.log('\nNOTE: If you got a Row-Level Security (RLS) error, you need to execute the SQL insert manually or enable insert permissions.');
    } else {
        console.log('Success! Inserted/Updated', data.length, 'records.');
    }
};

seed();

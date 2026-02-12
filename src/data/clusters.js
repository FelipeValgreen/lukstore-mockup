export const CLUSTERS = {
    // KEYS match the URL slugs: /category/brand/model 
    // or just /category/brand

    // BRAND PILLARS
    "hombre": {
        title: "Colección Hombre",
        subtitle: "Streetwear, Sneakers & Accesorios",
        heroImage: "/assets/cat-streetwear.png", // Unique banner
        description: "Lo último en moda urbana para hombre. Jordan, Yeezy, Nike y más.",
        content: `
            <h3>Estilo Urbano Masculino</h3>
            <p>Encuentra las siluetas que definen la cultura sneaker actual. Desde los cortes altos de Jordan 1 hasta la comodidad técnica de Yeezy.</p>
        `
    },
    "mujer": {
        title: "Ellas en el Juego",
        subtitle: "Fuerza, Estilo y Cultura Sneaker",
        heroImage: "/assets/jordan_4_cement_lifestyle.png",
        description: "Una selección curada de zapatillas y streetwear pensada para ti. Jordan, Dunk y exclusivas en tallas W.",
        content: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
                <div style="background: #f9f9f9; padding: 2rem;">
                    <h3 style="margin-bottom: 1rem;">Jordan Women's Exclusive</h3>
                    <p>Modelos diseñados exclusivamente con siluetas y colores únicos. Desde los tonos pastel hasta los clásicos reinventados.</p>
                </div>
                <div style="background: #f9f9f9; padding: 2rem;">
                    <h3 style="margin-bottom: 1rem;">Dunk Low Essentials</h3>
                    <p>El par que no puede faltar en tu rotación. Versatilidad para cualquier outfit.</p>
                </div>
            </div>
            <h3>Tendencias de Temporada</h3>
            <p>Descubre los lanzamientos que están marcando la pauta en la moda urbana femenina.</p>
        `,
        faq: [
            { q: "¿Qué diferencia hay entre tallas W y GS?", a: "Las tallas W (Women's) están diseñadas específicamente para la anatomía del pie femenino. Las GS (Grade School) son tallas juveniles que a menudo sirven para tallas pequeñas de mujer, pero tienen una horma ligeramente más estrecha." }
        ]
    },
    "accesorios": {
        title: "Essential Gear",
        subtitle: "El detalle final para tu outfit.",
        heroImage: "/assets/hoodie_navy_urban.png",
        description: "Complementos esenciales para elevar tu estilo. Calcetines, gorras y cuidado de zapatillas.",
        content: `
            <h3>Detalles que Importan</h3>
            <p>Un buen outfit no está completo sin los accesorios correctos. Desde calcetines premium que muestran tu estilo hasta productos de limpieza para mantener tus sneakers impecables.</p>
        `
    },
    "zapatillas/jordan": {
        title: "Jordan Retro Chile - Colección Exclusiva",
        subtitle: "El legado de Michael Jordan en tus pies.",
        heroImage: "/assets/banner-jordan.png", // We need to ensure we have assets or use placeholders
        description: "Encuentra la colección más completa de Air Jordan en Chile. Desde los clásicos High OG hasta las colaboraciones más exclusivas.",
        content: `
            <h3>El Fenómeno Jordan</h3>
            <p>Desde 1985, la marca Jordan ha redefinido lo que significa el calzado deportivo. No son solo zapatillas de baloncesto; son iconos culturales que trascienden el deporte.</p>
            <h3>Modelos Disponibles</h3>
            <ul>
                <li><strong>Jordan 1:</strong> El que lo empezó todo. Silueta atemporal.</li>
                <li><strong>Jordan 4:</strong> Diseño industrial, malla y soporte.</li>
                <li><strong>Jordan 11:</strong> Elegancia con charol para la cancha y la calle.</li>
            </ul>
        `,
        faq: [
            { q: "¿Venden Jordan originales?", a: "Sí, todos nuestros pares pasan por un riguroso proceso de autenticación." },
            { q: "¿Tienen tallas de mujer?", a: "Sí, contamos con tallaje GS (Grade School) y Women's exclusivo." }
        ]
    },

    // MODEL PILLARS (The "Money" Pages)
    "zapatillas/jordan/jordan-4": {
        title: "Nike Air Jordan 4 - La Silueta Definitiva",
        subtitle: "Historia, Tecnología y Estilo.",
        heroImage: "/assets/hero_red_thunder.png",
        description: "Compra Air Jordan 4 originales en Chile. Red Thunder, Military Blue, Lightning y más. Verificación de autenticidad incluida.",
        content: `
            <h3>Historia: El Vuelo del 89</h3>
            <p>Diseñadas por el legendario Tinker Hatfield, las Air Jordan 4 debutaron en 1989. Fueron las primeras en lanzarse al mercado global y aparecieron en la película "Do The Right Thing" de Spike Lee, consolidando su estatus cultural.</p>
            
            <h3>Características Técnicas</h3>
            <p>El Jordan 4 introdujo paneles de malla de uretano sobremoldeado para mayor transpirabilidad y el sistema de soporte de cordones "Wings" para un ajuste personalizado. La unidad Air visible en el talón completa el diseño.</p>

            <h3>Guía de Estilo</h3>
            <p>Las Jordan 4 son conocidas por su versatilidad. Su silueta de corte medio funciona perfectamente con pantalones cargo, jeans anchos o joggers. La lengüeta prominente permite lucirlas con los cordones sueltos para un look más relajado.</p>
        `,
        faq: [
            { q: "¿Cómo tallan las Jordan 4?", a: "Generalmente son True To Size (TTS). Si tienes el pie ancho, recomendamos subir media talla." },
            { q: "¿Cómo identificar unas Jordan 4 falsas?", a: "Revisa la red lateral: en los pares originales debe estar alineada con la diagonal del zapato, no recta. Además, la etiqueta de la lengüeta debe tener el brazo de Jumpman bien definido." }
        ]
    },

    "zapatillas/jordan/jordan-1": {
        title: "Air Jordan 1 - El Inicio del Mito",
        subtitle: "High, Mid y Low. Todos los clásicos.",
        heroImage: "/assets/prod-jordan1.png",
        description: "El par que rompió las reglas de la NBA. Air Jordan 1 en sus colorways más icónicos: Chicago, Bred, Royal y nuevas reediciones.",
        content: `
            <h3>Más que una Zapatilla</h3>
            <p>Cuando la NBA prohibió las zapatillas negras y rojas de Michael Jordan en 1985, nació una leyenda. Las Jordan 1 representan la rebeldía y el estilo que definieron una era.</p>
            <h3>High vs Mid vs Low</h3>
            <p>Ofrecemos las tres variantes. Las <strong>High OG</strong> son las más codiciadas por los puristas. Las <strong>Mid</strong> ofrecen una alternativa más accesible y con colores variados. Las <strong>Low</strong> son perfectas para el verano.</p>
        `,
        faq: [
            { q: "¿Qué significa OG?", a: "OG significa 'Original'. Refiere a los colorways y formas que se lanzaron en 1985." }
        ]
    }
};

export const getClusterData = (category, brand, model) => {
    // Construct key based on URL params
    // e.g. zapatillas/jordan/jordan-4
    let key = `${category}`;
    if (brand) key += `/${brand}`;
    if (model) key += `/${model}`;

    return CLUSTERS[key.toLowerCase()] || null;
};

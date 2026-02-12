
import { createClient } from '@supabase/supabase-js';
import { PRODUCTS } from '../src/data/products.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env manually to avoid extra dependencies
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.resolve(__dirname, '../.env');
const envConfig = {};

if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const [key, val] = line.split('=');
        if (key && val) {
            envConfig[key.trim()] = val.trim();
        }
    });
}

const supabaseUrl = envConfig.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseKey = envConfig.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedProducts() {
    console.log(`Starting seed of ${PRODUCTS.length} products...`);

    // We need to map PRODUCTS to valid DB columns. 
    // Assuming the DB schema matches the keys or we map them.
    // Based on previous conversations, schema likely has:
    // id, title, price, image, category, brand, model, description, etc.
    // Let's inspect the first product to see structure.

    for (const p of PRODUCTS) {
        // Transform images array to something specific if needed, or pass as is if DB supports array/jsonb
        const { error } = await supabase
            .from('products')
            .upsert({
                id: p.id,
                title: p.title,
                slug: p.slug,
                brand: p.brand,
                model: p.model,
                gender: p.gender,
                category: p.category,
                price: p.price,
                stock: p.stock, // Ensure column exists, otherwise might fail.
                image: p.image,
                description: p.description,
                condition: p.condition,
                // If there are extra fields not in DB, upsert might complain if strict, 
                // generally Supabase ignores extra fields if not providing specific columns in TS but via JS it sends strictly what we give
                // Let's try sending all matching fields.
                // NOTE: 'images' array and 'tags' array might need to be JSONB or specific table.
                // For now, let's assume simple schema or JSONB columns for arrays.

                // If the schema is simple:
                // created_at: new Date() // handled by DB default usually
            }, { onConflict: 'id' });

        if (error) {
            console.error(`Error inserting ${p.id}:`, error.message);
        } else {
            console.log(`Upserted: ${p.title}`);
        }
    }
    console.log('Seeding complete.');
}

seedProducts();

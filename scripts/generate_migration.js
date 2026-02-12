
import { PRODUCTS } from '../src/data/products.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, '../supabase_update.sql');

const sqlHeader = `
-- Migration to update products table and seed new catalog
-- Run this in your Supabase SQL Editor

-- 1. Add missing columns
ALTER TABLE products ADD COLUMN IF NOT EXISTS brand text;
ALTER TABLE products ADD COLUMN IF NOT EXISTS model text;
ALTER TABLE products ADD COLUMN IF NOT EXISTS gender text;
ALTER TABLE products ADD COLUMN IF NOT EXISTS sku text;
ALTER TABLE products ADD COLUMN IF NOT EXISTS stock integer DEFAULT 0;
ALTER TABLE products ADD COLUMN IF NOT EXISTS tags text[];

-- 2. Clear old data (optional, to avoid conflicts or mixed data)
-- TRUNCATE products CASCADE; 

-- 3. Insert new data
INSERT INTO products (id, title, slug, brand, model, gender, category, price, sku, stock, image, images, description, condition, is_drop, tags)
VALUES
`;

const escapeText = (text) => {
    if (!text) return 'NULL';
    return `'${text.replace(/'/g, "''")}'`;
};

const escapeArray = (arr) => {
    if (!arr || arr.length === 0) return "'{}'";
    const content = arr.map(item => `"${item.replace(/"/g, '\\"')}"`).join(',');
    return `'${"{" + content + "}"}'`; // Postgres array format: '{"a","b"}'
};

const sqlValues = PRODUCTS.map(p => {
    return `(
    ${escapeText(p.id)},
    ${escapeText(p.title)},
    ${escapeText(p.slug)},
    ${escapeText(p.brand)},
    ${escapeText(p.model)},
    ${escapeText(p.gender)},
    ${escapeText(p.category)},
    ${p.price},
    ${escapeText(p.sku)},
    ${p.stock || 0},
    ${escapeText(p.image)},
    ${escapeArray(p.images)},
    ${escapeText(p.description)},
    ${escapeText(p.condition)},
    ${p.isDrop ? 'true' : 'false'},
    ${escapeArray(p.tags)}
)`;
}).join(',\n');

const sqlFooter = `
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    slug = EXCLUDED.slug,
    brand = EXCLUDED.brand,
    model = EXCLUDED.model,
    gender = EXCLUDED.gender,
    category = EXCLUDED.category,
    price = EXCLUDED.price,
    sku = EXCLUDED.sku,
    stock = EXCLUDED.stock,
    image = EXCLUDED.image,
    images = EXCLUDED.images,
    description = EXCLUDED.description,
    condition = EXCLUDED.condition,
    is_drop = EXCLUDED.is_drop,
    tags = EXCLUDED.tags;
`;

const fullSql = sqlHeader + sqlValues + sqlFooter;

fs.writeFileSync(outputPath, fullSql);

console.log(`Migration file generated at: ${outputPath}`);

-- 1. Create the products table
create table if not exists products (
  id text primary key,
  title text not null,
  price numeric not null,
  original_price numeric,
  image text not null,
  category text not null,
  size text[] not null,
  condition text not null check (condition in ('new', 'used')),
  is_drop boolean default false,
  description text,
  discount integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Enable Row Level Security (RLS)
alter table products enable row level security;

-- 3. Create a policy that allows anyone to read products
drop policy if exists "Public products are viewable by everyone" on products;
create policy "Public products are viewable by everyone"
  on products for select
  using ( true );

-- 4. Seed data from current mock products (src/data/products.js)
-- Use ON CONFLICT DO NOTHING to avoid duplicate key errors
insert into products (id, title, price, original_price, image, category, size, condition, is_drop, description, discount)
values
  ('j1-high-bred', 'Air Jordan 1 Retro High OG ''Bred''', 199990, null, '/assets/prod-jordan1.png', 'Basketball', ARRAY['8', '9', '10', '11'], 'new', true, 'El clásico que lo inició todo. Cuero premium, colores icónicos.', null),
  ('j4-cement', 'Air Jordan 4 Retro ''White Cement''', 361200, null, '/assets/prod-jordan4.png', 'Basketball', ARRAY['9', '10'], 'new', false, 'Diseño atemporal de Tinker Hatfield. Malla lateral y soporte.', null),
  ('j1-low-black-toe', 'Air Jordan 1 Low ''Black Toe''', 126990, null, '/assets/prod-jordan1.png', 'Streetwear', ARRAY['7', '8', '9', '10'], 'new', false, 'Perfil bajo para el día a día. Comodidad y estilo heritage.', null),
  ('j4-sb-navy', 'Jordan 4 Retro SP x Nike SB', 479000, null, '/assets/prod-jordan4.png', 'Skateboarding', ARRAY['10'], 'new', true, null, null),
  ('j7-retro-geo', 'Air Jordan 7 Retro ''Geometric''', 649937, null, '/assets/prod-jordan1.png', 'Basketball', ARRAY['9'], 'new', false, null, null),
  ('j1-mid-dark-used', 'Jordan 1 Mid Dark Chocolate (Used)', 150000, 190000, '/assets/prod-jordan1.png', 'Streetwear', ARRAY['9.5'], 'used', false, null, 20),
  ('j1-bubblegum-used', 'Jordan 1 Retro High OG Bubble Gum (Used)', 110000, 149000, '/assets/prod-jordan1.png', 'Streetwear', ARRAY['7'], 'used', false, null, 25),
  ('j5-retro-oreo-used', 'Jordan 5 Retro Oreo (Used)', 200000, null, '/assets/prod-jordan4.png', 'Basketball', ARRAY['10'], 'used', false, null, null),
  ('am90-premium', 'Nike Air Max 90 Premium', 152990, null, '/assets/prod-airmax.png', 'Streetwear', ARRAY['8', '9', '10'], 'new', false, null, null),
  ('am-nuaxis', 'Nike Air Max Nuaxis Urban', 84990, null, '/assets/prod-airmax.png', 'Running', ARRAY['7', '8', '9', '11'], 'new', false, null, null),
  ('am-flight-court', 'Jordan Flight Court', 70990, 85000, '/assets/prod-jordan4.png', 'Basketball', ARRAY['8', '9'], 'new', false, null, 15),
  ('am-1-pro-green', 'Air Max 1 ''Pro Green''', 194990, null, '/assets/prod-airmax.png', 'Streetwear', ARRAY['9', '10.5'], 'new', false, null, null),
  ('j8-retro', 'Air Jordan 8 Retro', 352117, null, '/assets/prod-jordan4.png', 'Basketball', ARRAY['10'], 'new', false, null, null),
  ('j1-mid-se', 'Air Jordan 1 Mid SE', 144990, null, '/assets/prod-jordan1.png', 'Streetwear', ARRAY['8.5', '9'], 'new', false, null, null)
on conflict (id) do nothing;

-- 5. Create Orders Table
create table if not exists orders (
  id uuid default gen_random_uuid() primary key,
  customer_name text not null,
  customer_email text not null,
  customer_address text not null,
  customer_city text not null,
  customer_region text not null,
  total_amount numeric not null,
  status text default 'pending' check (status in ('pending', 'paid', 'shipped')),
  payment_method text default 'mercadopago',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 6. Create Order Items Table
create table if not exists order_items (
  id uuid default gen_random_uuid() primary key,
  order_id uuid references orders(id) on delete cascade,
  product_id text references products(id),
  product_title text not null,
  quantity integer not null,
  price_at_purchase numeric not null
);

-- Enable RLS for Orders (Public insert, Private select/update for now, or just public for demo)
alter table orders enable row level security;
alter table order_items enable row level security;

drop policy if exists "Anyone can create orders" on orders;
create policy "Anyone can create orders"
  on orders for insert
  with check ( true );

drop policy if exists "Anyone can create order items" on order_items;
create policy "Anyone can create order items"
  on order_items for insert
  with check ( true );

-- Consider allowing users to read their own orders if we had auth, but for guest checkout:
drop policy if exists "Public read orders (demo)" on orders;
create policy "Public read orders (demo)"
  on orders for select
  using ( true );

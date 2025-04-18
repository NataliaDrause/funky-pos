This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SQL script to create database tables

-- USERS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- TAX CLASSES
CREATE TABLE tax_classes (
    id SERIAL PRIMARY KEY,
    title TEXT,
    rate NUMERIC
);

-- PRODUCT CATEGORIES
CREATE TABLE product_categories (
    id SERIAL PRIMARY KEY,
    title TEXT
);

-- CUSTOMERS
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    phone TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- PRODUCTS
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    regular_price NUMERIC,
    discounted_price NUMERIC,
    tax_class_id INTEGER REFERENCES tax_classes(id),
    category_id INTEGER REFERENCES product_categories(id),
    sku TEXT,
    stock INTEGER,
    images TEXT,
    thumbnail TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- SETTINGS
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    store_name TEXT,
    currency TEXT,
    tax_included BOOLEAN,
    theme TEXT,
    cash_rounding BOOLEAN,
    created_at TIMESTAMP DEFAULT NOW()
);

-- ORDERS
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    customer_id INTEGER REFERENCES customers(id),
    total NUMERIC,
    total_paid NUMERIC,
    total_tax NUMERIC,
    status TEXT,
    type TEXT, -- 'order' or 'refund'
    refunded_order_id INTEGER REFERENCES orders(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- ORDER ITEMS
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER,
    unit_price NUMERIC,
    unit_tax NUMERIC
);

-- PAYMENTS
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    method TEXT,
    amount NUMERIC,
    transaction_details JSONB,
    status TEXT,
    paid_at TIMESTAMP DEFAULT NOW()
);

# 9SIXTY Ecommerce

React + Vite storefront with a Laravel API backend for a premium 9SIXTY ecommerce site.

## Structure

- `backend/`: Laravel API, Sanctum auth, MySQL migrations, seeders, local uploads, admin/customer routes.
- `frontend/`: React/Vite storefront and admin UI. Production builds output to `backend/public/app`.
- `docs/`: cPanel/Krystal deployment guide source and generated PDF.

## Local Setup

```bash
cd backend
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan storage:link
php artisan serve
```

```bash
cd frontend
npm install
npm run dev
```

Demo accounts after seeding:

- Admin: `admin@9sixty.test` / `Password123!`
- Customer: `customer@9sixty.test` / `Password123!`

## Production Build

```bash
cd frontend
npm run build
```

The built SPA is placed in `backend/public/app`. Laravel serves the SPA through `routes/web.php`; API routes stay under `/api`.

## Key Features Included

- Product/category/variant schema and admin API.
- Guest and logged-in checkout order creation.
- Stripe integration placeholders including wallet support metadata.
- Editable shipping fee and free-shipping threshold settings.
- Tree count calculation: one tree per full £50 subtotal.
- Encrypted API setting storage for Stripe, SMTP2GO, Mailchimp, Tree-Nation and Shiptheory.
- Product reviews restricted to authenticated users and pending admin approval.
- Blog posts with slugs, featured images and SEO metadata.
- Media upload endpoint using local Laravel public storage.
- SEO assets: `robots.txt`, `sitemap.xml`, canonical-ready SPA metadata, product/blog schema from API.

## cPanel/Krystal

See `docs/9SIXTY-cPanel-Deployment-Guide.md` and `docs/9SIXTY-cPanel-Deployment-Guide.pdf`.

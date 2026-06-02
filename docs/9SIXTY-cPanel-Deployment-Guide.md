# 9SIXTY cPanel/Krystal Deployment Guide

## Recommended Layout

Upload the Laravel backend outside `public_html` where possible, for example:

- Laravel app: `/home/CPANEL_USER/9sixty/backend`
- Public web root: `/home/CPANEL_USER/public_html`
- React build: generated into `backend/public/app`

Point the domain document root to `backend/public` if Krystal allows it. If it must use `public_html`, copy the contents of `backend/public` into `public_html` and update `index.php` paths to the backend folder.

## Backend Upload

1. Build locally or on the server with Composer available.
2. Upload `backend/` except development caches such as `.git`, `node_modules`, and local test databases.
3. Keep `.env` private and outside any public folder.
4. Ensure `vendor/` is present if Composer is not available on the hosting plan.

## Frontend Build

Run locally:

```bash
cd frontend
npm install
npm run build
```

This writes the production React/Vite site into:

```text
backend/public/app
```

Upload that folder with the Laravel public files.

## MySQL

1. In cPanel, create a MySQL database.
2. Create a MySQL user and assign all privileges to the database.
3. Set these in `backend/.env`:

```env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=cpaneluser_9sixty
DB_USERNAME=cpaneluser_9sixty
DB_PASSWORD=strong-password
```

## Environment Variables

Set:

```env
APP_NAME=9SIXTY
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com
FILESYSTEM_DISK=public
SESSION_DRIVER=database
QUEUE_CONNECTION=database
```

Secret API keys are managed in the admin Settings/API Keys screen and encrypted in the database. Do not expose Stripe secret keys, SMTP2GO credentials, Mailchimp API keys, Tree-Nation keys or Shiptheory keys to the frontend.

## Permissions

Set writable permissions for:

```text
backend/storage
backend/bootstrap/cache
```

Typical cPanel permissions are `755` for directories and `644` for files. If Laravel cannot write cache/log/upload files, set only those writable directories to `775`.

## Storage Uploads

Run:

```bash
php artisan storage:link
```

If symlinks are blocked, create `public/storage` manually and point it to `storage/app/public`, or configure the media upload path to write directly under `public/storage`.

## Migrations And Seeders

From the backend directory:

```bash
php artisan key:generate
php artisan migrate --force
php artisan db:seed --force
```

Seeded admin:

```text
admin@9sixty.test / Password123!
```

Change this immediately after first login.

## Domain/Subdomain

Best option: set the domain root to `backend/public`.

Fallback option when cPanel only supports `public_html`:

1. Copy `backend/public/*` to `public_html`.
2. Edit `public_html/index.php` so it requires the backend app from `../9sixty/backend/vendor/autoload.php` and `../9sixty/backend/bootstrap/app.php`.
3. Keep all Laravel source files outside `public_html`.

## Updating The Site

1. Pull or upload changed files.
2. Run `composer install --no-dev --optimize-autoloader` if dependencies changed.
3. Run `php artisan migrate --force`.
4. Run:

```bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

5. Rebuild and upload the frontend if React files changed.

## cPanel/Krystal Notes

- Long-running queues may not be available on shared hosting. Use cron to run `php artisan queue:work --stop-when-empty` every minute if needed.
- Stripe webhooks need a public HTTPS endpoint and should be added when live payment keys are configured.
- Apple Pay requires domain verification through Stripe.
- Shiptheory label creation should run after an order is paid; retry failures should be logged for admin review.
- SMTP2GO should be configured for all Laravel mail transport before launch.

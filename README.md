# E2E Testing PBL - ClipHub

Automated End-to-End (E2E) testing untuk aplikasi PBL **ClipHub** menggunakan Playwright dengan Page Object Model (POM) dan terintegrasi dengan GitHub Actions.

## Fitur yang Diuji
1. **Autentikasi (`tests/auth.spec.ts`)**
   - Kreator berhasil login dengan akun demo (`kreator@cliphub.com` / `password`) dan diarahkan ke `/kreator/dashboard`.
   - Login gagal dengan password salah, tetap di `/login`, dan muncul pesan error.
2. **Gabung Campaign (`tests/gabung-campaign.spec.ts`)**
   - Login sebagai kreator -> buka Marketplace (`/kreator/campaigns`) -> buka detail `Promo Waktu Indonesia Belanja (WIB)` -> klik `Gabung Campaign` -> verifikasi status `Sudah Bergabung`.

## Catatan Penting (Database State)
Test `gabung-campaign.spec.ts` mengubah state database (menambahkan participant campaign). Sebelum menjalankan test ulang secara lokal, reset database aplikasi Laravel terlebih dahulu:
```bash
php artisan migrate:fresh --seed
```

## Setup Lokal
Pastikan aplikasi Laravel **ClipHub** sudah berjalan di `http://localhost:8000`.

```bash
# Di folder aplikasi ClipHub
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate:fresh --seed
php artisan serve --port=8000
```

Lalu di folder E2E ini:
```bash
# 1. Install dependencies
npm install

# 2. Install Chromium Playwright
npx playwright install chromium

# 3. Salin .env
cp .env.example .env

# 4. Jalankan test
npm test

# Mode interaktif (UI / Headed)
npm run test:ui
npm run test:headed

# Lihat laporan
npm run test:report
```

## Akun Demo (dari Seeder)
| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@cliphub.com | password |
| Kreator | kreator@cliphub.com | password |
| Brand | brand@cliphub.com | password |

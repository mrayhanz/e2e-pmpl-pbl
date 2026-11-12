# E2E Testing PBL - TesYuk!

Automated End-to-End (E2E) testing untuk aplikasi PBL **TesYuk!** menggunakan Playwright dengan Page Object Model (POM) dan terintegrasi dengan GitHub Actions.

## Fitur yang Diuji
1. **Autentikasi (`tests/auth.spec.ts`)**
   - Tester berhasil login dengan kredensial valid.
   - Login gagal dengan password salah (tetap di halaman `/login`).
2. **Pengambilan Misi (`tests/ambil-misi.spec.ts`)**
   - Login sebagai tester -> buka menu `Cari Misi` -> buka detail `Aplikasi Uji E2E` -> klik `Ambil Misi` -> verifikasi notifikasi berhasil.

## Catatan Penting (Database State)
Test `ambil-misi.spec.ts` mengubah state database (mengambil misi). Sebelum menjalankan test ulang secara lokal, reset database aplikasi Laravel terlebih dahulu:
```bash
php artisan migrate:fresh --seed
```

## Setup Lokal
Pastikan aplikasi Laravel **TesYuk!** sudah berjalan di `http://localhost:8000` (`php artisan serve --port=8000`).

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

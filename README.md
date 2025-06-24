<h1 align="center">NOTIP-WEB</h1>

<p align="center"><i>Empowering Seamless Web Experiences with Innovation</i></p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/luqmaaaaann/Notip-Web" alt="last commit" />
  <img src="https://img.shields.io/badge/javascript-88.9%25-yellow" alt="JavaScript usage" />
  <img src="https://img.shields.io/github/languages/count/luqmaaaaann/Notip-Web" alt="Languages used" />
</p>

<p align="center"><i>Built with the tools and technologies:</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/JSON-000?logo=json&logoColor=white" alt="JSON" />
  <img src="https://img.shields.io/badge/Markdown-000?logo=markdown&logoColor=white" alt="Markdown" />
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="npm" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint" />
</p>

## 🧩 Overview
**Aplikasi Notip-Web** memungkinkan pengguna mencatat titipan makanan secara digital dengan fitur CRUD lengkap (Buat, Baca, Edit, Hapus) menggunakan layanan backend eksternal, di mana pengguna pertama kali menginput nama via cookie-based authentication sederhana, lalu dapat:

- 📋 Mencatat titipan baru (melalui form dengan input: penitip, pesanan, keterangan, duit)
- 👀 Melihat daftar titipan dalam tabel terstruktur dengan mengetahui hasil inputan, total titipan, tanggal dan aksi
- ⚙️ Mengedit/menghapus entri via dialog interaktif
- ✅ Mendapat notifikasi real-time (sukses/gagal operasi) menggunakan library Sonner
- 🔃 Auto-refresh data setelah perubahan tanpa reload manual (revalidatePath)
  
*Semua operasi backend dijalankan langsung via Server Actions Next.js tanpa API endpoint tradisional, dengan UI responsif menggunakan komponen shadcn/ui dan Tailwind CSS.*



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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

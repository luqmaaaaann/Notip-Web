<h1 align="center">NOTIP-WEB</h1>

<p align="center"><i>One Web for All Deliveries</i></p>

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
**The Notip-Web application** allows users to digitally record food delivery notes with full CRUD functionality (Create, Read, Update, Delete) using an external backend service. Users first input their name through simple cookie-based authentication, then can:

- 📋 Record new deliveries (via a form with fields: sender, order, notes, and money)
- 👀 View the list of deliveries in a structured table with submitted data, total orders, date, and available actions
- ⚙️ Edit/delete entries through interactive dialogs
- ✅ Receive real-time notifications (success/failure) using the Sonner library
- 🔃 Automatically refresh data after changes without manual reload (via revalidatePath)
  
*All backend operations are executed directly using Next.js Server Actions & appbackend.io no traditional API endpoints—paired with a responsive UI built using shadcn/ui components and Tailwind CSS.*


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

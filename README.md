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

To learn more about chadcn/next-template, take a look at the following resources:

- [chadcn/next-template GitHub repository](https://github.com/chadcn/next-template)
- [ui.shadcn.com](https://ui.shadcn.com/)
- [shadcnui-blocks.com](https://www.shadcnui-blocks.com/)

## Project Structure

```
src/
├── app/
│   ├── (auth)/                  # Authentication route group
│   │   ├── layout.tsx           # Auth layout — Noto Sans Thai font
│   │   ├── sign-in/
│   │   │   └── page.tsx         # /sign-in
│   │   └── sign-up/
│   │       └── page.tsx         # /sign-up
│   ├── (front)/                 # Public-facing route group
│   │   ├── layout.tsx           # Front layout — Sarabun / Noto / Prompt fonts
│   │   ├── page.tsx             # / (home)
│   │   └── about/
│   │       └── page.tsx         # /about
│   ├── favicon.ico
│   └── globals.css              # Tailwind v4 imports + shadcn/ui theme tokens
├── components/
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       └── spinner.tsx
└── lib/
    └── utils.ts                 # cn() utility (clsx + tailwind-merge)
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

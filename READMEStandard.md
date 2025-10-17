
## Hello ##

### Project Structure (high-level)
- `app/`
  - `page.tsx`: Landing page
  - `layout.tsx`: Global layout with header/footer
  - `blog/`: Listing and post detail pages
    - `page.tsx`: All posts with category filter
    - `[slug]/page.tsx`: Individual post
  - `dashboard/`: Admin pages
    - `page.tsx`: Dashboard index
    - `posts/`: List, new, edit
    - `categories/`: Manage categories
- `app/actions/`: Server Actions for Posts and Categories
- `lib/prisma.js`: Prisma client instance (imports from custom generated client)
- `lib/generated/prisma`: Prisma Client output directory (generated)
- `prisma/`: Schema and migrations

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

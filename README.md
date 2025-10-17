### Setup & Run Locally
```bash
# 1) Install deps
npm install

# 2) Setting up Postgres 
Sign up on Supabase:
    > Create Organisation
    > Create New Project ( remember Password)
    > Click connect : Select ORM : Copy the Url and direct_URL
    > create .env file in app then paste the url and direct_url
    > paste your project passowrd in <your_password_ section in both urls 
# 2) Generate Prisma Client
npx prisma init
npx prisma generate

# 3) Create and/or migrate database
npx prisma migrate dev  

# 4) Start dev server
npm run dev

# Open http://localhost:3000
```
## Blogging App (Next.js + Prisma + Supabase)
Clean, functional blogging platform built with Next.js (App Router), TypeScript, Prisma ORM, and Supabase Postgres.

### Tech Stack
- **Framework**: Next.js 15 (App Router) + React + TypeScript
- **Styling**: Tailwind CSS
- **ORM/DB**: Prisma + Supabase Postgres
- **Data fetching**: Server Components + Server Actions (no REST/tRPC layer)

### Features Implemented
- **Priority 1**
  - Blog post CRUD operations (create, read, update, delete)
  - Category CRUD operations
  - Assign one or more categories to posts
  - Blog listing page showing all posts
  - Individual post view page
  - Category filtering on listing page
  - Basic responsive navigation
  - Clean, professional UI (functional, minimal)
  - Landing page with 3+ sections (Hero, Features, Footer)
  - Dashboard page for managing posts and categories

### Key Decisions & Trade-offs
- **Use of Prisma over Drizzle**: Due to time contraits i decided to use Prisma ORM instead of Drizzle,but due to good learning curve i can easily learn that too.
- **Server Actions over REST/tRPC**: In this project i used Next.js Server Actions instead of tRPC.I used Server Actions were chosen to reduce boilerplate and leverage App Router.
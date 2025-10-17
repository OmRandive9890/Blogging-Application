import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Write. Share. Grow.</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A clean, minimal blogging platform built with Next.js and Prisma on Supabase.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/blog" className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-black">
            Browse Blog
          </Link>
          <Link href="/dashboard" className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium">
            Go to Dashboard
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 border-y">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 sm:grid-cols-3">
          <div className="rounded-lg border bg-white dark:bg-black p-6">
            <h3 className="font-semibold">Fast & Modern</h3>
            <p className="mt-2 text-sm text-muted-foreground">Powered by Next.js App Router and server actions.</p>
          </div>
          <div className="rounded-lg border bg-white dark:bg:black p-6">
            <h3 className="font-semibold">Typed & Safe</h3>
            <p className="mt-2 text-sm text-muted-foreground">TypeScript, Prisma, and validated forms.</p>
          </div>
          <div className="rounded-lg border bg-white dark:bg:black p-6">
            <h3 className="font-semibold">Clean UI</h3>
            <p className="mt-2 text-sm text-muted-foreground">Minimal components that get out of your way.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold">Start publishing today</h2>
        <p className="mt-2 text-muted-foreground">Create posts, manage categories, and share your ideas.</p>
        <div className="mt-6">
          <Link href="/dashboard" className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-black">
            Open Dashboard
          </Link>
        </div>
      </section>
    </div>
  );
}

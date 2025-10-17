import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">Manage your posts and categories.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/dashboard/posts" className="rounded-lg border p-6 block hover:bg-muted/40">
          <h2 className="font-semibold">Posts</h2>
          <p className="text-sm text-muted-foreground">Create, edit, and publish posts.</p>
        </Link>
        <Link href="/dashboard/categories" className="rounded-lg border p-6 block hover:bg-muted/40">
          <h2 className="font-semibold">Categories</h2>
          <p className="text-sm text-muted-foreground">Organize your content.</p>
        </Link>
      </div>
    </div>
  );
}



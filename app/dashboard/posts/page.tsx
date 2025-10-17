import Link from "next/link";
import { db } from "@/lib/prisma";
import { deletePost } from "@/app/actions/posts";

export const dynamic = "force-dynamic";

export default async function PostsDashboard() {
  const posts = await db.post.findMany({
    orderBy: { updatedAt: "desc" },
    include: { categories: { include: { category: true } } },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Posts</h1>
        <Link href="/dashboard/posts/new" className="inline-flex items-center rounded-md bg-black text-white px-3 py-2 text-sm font-medium dark:bg-white dark:text-black">New Post</Link>
      </div>
      <div className="mt-6 divide-y border rounded-lg bg-white dark:bg-black">
        {posts.map((post) => (
          <div key={post.id} className="p-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-medium">{post.title}</div>
              <div className="text-xs text-muted-foreground">{post.published ? "Published" : "Draft"}</div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={`/dashboard/posts/${post.id}`} className="text-sm underline">Edit</Link>
              <form action={async () => { 'use server'; await deletePost(post.id); }}>
                <button className="text-sm text-red-600">Delete</button>
              </form>
            </div>
          </div>
        ))}
        {posts.length === 0 && (
          <div className="p-4 text-sm text-muted-foreground">No posts yet.</div>
        )}
      </div>
    </div>
  );
}



import { db } from "@/lib/prisma";
import { createPost } from "@/app/actions/posts";

export default async function NewPostPage() {
  const categories = await db.category.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">New Post</h1>
      <form action={createPost} className="mt-6 grid gap-5">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input name="title" className="mt-1 w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea name="content" className="mt-1 w-full border rounded-md px-3 py-2 min-h-40" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Categories</label>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">
            {categories.map((c: { id: string; name: string }) => (
              <label key={c.id} className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="categoryIds" value={c.id} /> {c.name}
              </label>
            ))}
          </div>
        </div>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" name="published" /> Publish now
        </label>
        <div>
          <button className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-black">Create</button>
        </div>
      </form>
    </div>
  );
}



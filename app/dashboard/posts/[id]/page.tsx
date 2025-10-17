import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { updatePost } from "@/app/actions/posts";

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const post = await db.post.findUnique({
    where: { id: params.id },
    include: { categories: true },
  });
  const categories = await db.category.findMany({ orderBy: { name: "asc" } });

  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <form action={async (fd) => { "use server"; await updatePost(post.id, fd); }} className="mt-6 grid gap-5">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input name="title" defaultValue={post.title} className="mt-1 w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea name="content" defaultValue={post.content} className="mt-1 w-full border rounded-md px-3 py-2 min-h-40" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Categories</label>
          <div className="mt-2 grid sm:grid-cols-2 gap-2">
            {categories.map((c) => (
              <label key={c.id} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  name="categoryIds"
                  value={c.id}
                  defaultChecked={post.categories.some((pc) => pc.categoryId === c.id)}
                />
                {c.name}
              </label>
            ))}
          </div>
        </div>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" name="published" defaultChecked={post.published} /> Publish
        </label>
        <div>
          <button className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-black">Save</button>
        </div>
      </form>
    </div>
  );
}



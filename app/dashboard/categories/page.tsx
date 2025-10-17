import { db } from "@/lib/prisma";
import { createCategory, deleteCategory } from "@/app/actions/categories";

export const dynamic = "force-dynamic";

export default async function CategoriesDashboard() {
  const categories = await db.category.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold">Categories</h1>
      <form action={createCategory} className="mt-6 grid gap-3 sm:grid-cols-[2fr_3fr_auto] items-end">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" className="mt-1 w-full border rounded-md px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <input name="description" className="mt-1 w-full border rounded-md px-3 py-2" />
        </div>
        <div>
          <button className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium dark:bg-white dark:text-black">Add</button>
        </div>
      </form>

      <div className="mt-8 divide-y border rounded-lg bg-white dark:bg-black">
        {categories.map((c: { id: string; name: string; description: string | null }) => (
          <div key={c.id} className="p-4 flex items-center justify-between gap-4">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-muted-foreground">{c.description}</div>
            </div>
            <form action={async () => { 'use server'; await deleteCategory(c.id); }}>
              <button className="text-sm text-red-600">Delete</button>
            </form>
          </div>
        ))}
        {categories.length === 0 && (
          <div className="p-4 text-sm text-muted-foreground">No categories yet.</div>
        )}
      </div>
    </div>
  );
}



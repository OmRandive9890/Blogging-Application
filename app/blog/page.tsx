import Link from "next/link";
import { db } from "@/lib/prisma";
import CategorySelect from "@/components/CategorySelect";

type UiCategory = { id: string; name: string; slug: string };
type PostListItem = {
  id: string;
  title: string;
  content: string;
  slug: string;
  categories: { categoryId: string; category: UiCategory }[];
};

export const dynamic = "force-dynamic";

async function getData(categorySlug?: string) {
  const categories = await db.category.findMany({ orderBy: { name: "asc" } });

  const posts = await db.post.findMany({
    where: {
      published: true,
      ...(categorySlug
        ? {
            categories: {
              some: { category: { slug: categorySlug } },
            },
          }
        : {}),
    },
    include: {
      categories: { include: { category: true } },
    },
    orderBy: { publishedAt: "desc" },
  });

  return { categories, posts };
}

export default async function BlogList({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category: categorySlug } = await searchParams;
  const { categories, posts } = await getData(categorySlug);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <div>
          <CategorySelect categories={categories} initialValue={categorySlug} />
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {(posts as PostListItem[]).map((post: PostListItem) => (
          <article key={post.id} className="rounded-lg border p-5 bg-white dark:bg-black flex flex-col">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.content}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.categories.map((pc: { categoryId: string; category: UiCategory }) => (
                <span key={pc.categoryId} className="text-xs border rounded px-2 py-0.5">
                  {pc.category.name}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <Link href={`/blog/${post.slug}`} className="text-sm underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-muted-foreground">No posts found.</p>
        )}
      </div>
    </div>
  );
}



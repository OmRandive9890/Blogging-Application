import { notFound } from "next/navigation";
import { db } from "@/lib/prisma";

export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  return db.post.findUnique({
    where: { slug },
    include: { categories: { include: { category: true } } },
  });
}

export default async function PostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post || !post.published) return notFound();

  type UiCategory = { id: string; name: string; slug: string };
  type PostCategoryJoin = { categoryId: string; category: UiCategory };

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.categories.map((pc: PostCategoryJoin) => (
          <span key={pc.categoryId} className="text-xs border rounded px-2 py-0.5">
            {pc.category.name}
          </span>
        ))}
      </div>
      <div className="prose prose-neutral dark:prose-invert mt-6">
        <p>{post.content}</p>
      </div>
    </article>
  );
}



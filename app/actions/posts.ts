"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const published = Boolean(formData.get("published"));
  const categoryIds = (formData.getAll("categoryIds") as string[]) || [];

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const slug = slugify(title);

  await db.post.create({
    data: {
      title,
      content,
      slug,
      published,
      publishedAt: published ? new Date() : null,
      categories: {
        create: categoryIds.map((categoryId) => ({ categoryId })),
      },
    },
  });

  revalidatePath("/blog");
  revalidatePath("/dashboard");
}

export async function updatePost(postId: string, formData: FormData) {
  const title = String(formData.get("title") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const published = Boolean(formData.get("published"));
  const categoryIds = (formData.getAll("categoryIds") as string[]) || [];

  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const slug = slugify(title);

  await db.post.update({
    where: { id: postId },
    data: {
      title,
      content,
      slug,
      published,
      publishedAt: published ? new Date() : null,
      categories: {
        deleteMany: {},
        create: categoryIds.map((categoryId) => ({ categoryId })),
      },
    },
  });

  revalidatePath("/blog");
  revalidatePath("/dashboard");
}

export async function deletePost(postId: string) {
  await db.post.delete({ where: { id: postId } });
  revalidatePath("/blog");
  revalidatePath("/dashboard");
}


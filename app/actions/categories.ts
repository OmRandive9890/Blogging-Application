"use server";

import { revalidatePath } from "next/cache";
import { db } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export async function createCategory(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!name) throw new Error("Name is required");

  await db.category.create({
    data: {
      name,
      description: description || null,
      slug: slugify(name),
    },
  });

  revalidatePath("/dashboard/categories");
}

export async function updateCategory(categoryId: string, formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!name) throw new Error("Name is required");

  await db.category.update({
    where: { id: categoryId },
    data: {
      name,
      description: description || null,
      slug: slugify(name),
    },
  });

  revalidatePath("/dashboard/categories");
}

export async function deleteCategory(categoryId: string) {
  await db.category.delete({ where: { id: categoryId } });
  revalidatePath("/dashboard/categories");
}


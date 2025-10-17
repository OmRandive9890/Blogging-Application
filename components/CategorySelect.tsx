"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

type Category = {
  id: string;
  name: string;
  slug: string;
};

export default function CategorySelect({
  categories,
  initialValue,
}: {
  categories: Category[];
  initialValue?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <select
      className="border rounded-md px-2 py-1 text-sm"
      defaultValue={initialValue || ""}
      onChange={(e) => {
        const value = e.target.value;
        const params = new URLSearchParams(searchParams?.toString());
        if (!value) {
          params.delete("category");
        } else {
          params.set("category", value);
        }
        const query = params.toString();
        router.push(`${pathname}${query ? `?${query}` : ""}`);
      }}
    >
      <option value="">All categories</option>
      {categories.map((c) => (
        <option key={c.id} value={c.slug}>
          {c.name}
        </option>
      ))}
    </select>
  );
}



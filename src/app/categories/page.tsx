import { Category } from "@/common/types/Category";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

async function fetchCategories(): Promise<Category[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    cache: "no-store",
  });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    const err = await res.json();
    const { message } = err;
    throw new Error(message);
  }
  return await res.json();
}

export default async function Categories() {
  const categories = await fetchCategories();
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {categories.map((category) => (
          <li key={category.id} className="col-span-1">
            <Link href={`/categories/${category.slug}`}>
              <h2>{category.name}</h2>
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={400}
                unoptimized
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

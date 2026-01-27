import { Category } from "@/common/types/Category";
import Image from "next/image";

const fetchCategoryBySlug = async (slug: string): Promise<Category> => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/slug/${slug}`,
  );
  return res.json();
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await fetchCategoryBySlug(slug);
  return (
    <div>
      <h2>{category.name}</h2>
      <Image
        src={category.image}
        alt={category.name}
        width={400}
        height={400}
        unoptimized
      />
    </div>
  );
}
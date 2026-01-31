import { Product } from "@/common/types/Product";
import ProductCard from "@/components/product-card";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 },
    //   cache: "force-cache", // default
  });
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();
  return (
    <section>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

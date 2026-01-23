import { Product } from "@/common/types/Product";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<Product> = (product) => {
  const { id, title, price, images } = product;
  return (
    <div className="p-4 bg-gray-300 rounded-2xl max-w-64 min-h-100 flex flex-col gap-4 items-center justify-center">
      <h3>
        <Link href={`/products/${id}`}>{title}</Link>
      </h3>
      <Image src={images[0]} alt={title} width={300} height={400} unoptimized />
      <p>{price}$</p>
    </div>
  );
};

export default ProductCard;

"use client";
import { Product } from "@/payload-types";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/config";
import { cn, formatprice } from "@/lib/utils";
import ImageSlider from "./ImageSlider";

interface ProductListingprops {
  product: Product | null;
  index: number;
}

const ProductListing = ({ product, index }: ProductListingprops) => {
  const [isvisible, setisvisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisvisible(true);
    }, index * 75);
    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isvisible) return <Productplaceholder />;

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label;

  const validUrls = product.images
    .map(({ image }) => {
      if (typeof image === "string") {
        return image;
      } else if (image && typeof image.url === "string") {
        return image.url;
      } else {
        return null;
      }
    })
    .filter(Boolean) as string[];

  if (isvisible && product) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isvisible,
        })}
        href={`/product/${product.id}`}
      >
        <div className="flex flex-col w-full">
          <ImageSlider urls={validUrls} />

          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{label}</p>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {formatprice(product.price)}
          </p>
        </div>
      </Link>
    );
  }
};

const Productplaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};

export default ProductListing;

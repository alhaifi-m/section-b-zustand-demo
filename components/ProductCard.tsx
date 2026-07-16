"use client";

import type { Product } from "@/data/products";
import { useCartStore } from "@/stores/useCartStore";

import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <p className="font-semibold text-gray-900">{product.name}</p>
        <p className="text-sm text-gray-500">{product.price}</p>
      </div>
      <button
        onClick={() => addItem(product)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

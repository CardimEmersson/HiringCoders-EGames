import { useState } from "react";
import dataProducts from "../products.json";

export interface ProductsProps {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
}

function useProducts() {
  const [products, setProducts] = useState<ProductsProps[]>(dataProducts);

  return { products, setProducts };
}

export { useProducts };

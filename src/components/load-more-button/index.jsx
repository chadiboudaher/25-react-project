import { useState, useEffect } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fecthProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div className="container"></div>;
}

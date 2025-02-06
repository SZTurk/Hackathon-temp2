"use client";

import { useEffect, useState } from "react";
import { useCart } from "../../context/cartcontext"; // ✅ Import useCart

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart(); // ✅ Get addToCart function

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("https://hackathon-apis.vercel.app/api/products");
        if (!response.ok) throw new Error("Failed to fetch");

        const products = await response.json();
        const foundProduct = products.find((p: any) => p._id === params.id);
        if (!foundProduct) throw new Error("Product not found");

        setProduct(foundProduct);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) return <p>Loading...</p>;
  if (error || !product) return <p>Product not found.</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
        {product.image && (
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-md" />
        )}
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <h3 className="text-xl font-semibold mt-2">Price: ${product.price}</h3>

        <button
          onClick={() => addToCart(product)} // ✅ Add to cart
          className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
}

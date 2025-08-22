// src/components/ProductCard.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-40 object-cover rounded-xl mb-2"
      />
      <h3 className="font-semibold text-lg text-center">{product.name}</h3>
      <p className="text-green-700 font-bold mb-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}

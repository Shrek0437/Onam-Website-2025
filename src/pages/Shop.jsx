import React from "react";
import products from "src/product.jsx";

export default function Shop() {
  return (
    <div className="bg-white min-h-screen py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
        🛍️ Onam Specials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-yellow-50 rounded-2xl shadow-md p-5 hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-green-900">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-bold text-green-700">₹{product.price}</p>
            <button className="mt-4 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


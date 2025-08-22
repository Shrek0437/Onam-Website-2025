import React from "react";
import products from "../product";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-green-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-12 text-center bg-gradient-to-r from-green-600 to-yellow-400 text-white mb-8 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-lg">Welcome to the Onam Shop 🎉</h1>
        <p className="text-lg md:text-2xl mb-4">Celebrate Onam with jasmine, snacks, mundu & more!</p>
        <a href="/shop" className="inline-block bg-white text-green-700 font-bold px-6 py-2 rounded-full shadow hover:bg-yellow-100 transition">Shop Now</a>
      </section>

      {/* Featured Products */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                ...product,
                image: product.image.startsWith("/images/")
                  ? "https://placehold.co/200x200?text=" + encodeURIComponent(product.name)
                  : product.image
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

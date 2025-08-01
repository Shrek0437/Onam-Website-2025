// src/pages/Shop.jsx
import products from "../products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🌼 Onam Specials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

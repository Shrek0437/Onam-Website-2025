import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-green-600 text-white p-4">
      <h1 className="text-xl font-bold">🌼 Onam Shop</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/checkout" className="hover:underline">Checkout</Link>
      </div>
    </nav>
  );
}

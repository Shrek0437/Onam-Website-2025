import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          🌼 Onam Fundraiser
        </h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/shop" className="hover:text-yellow-300">Shop</Link>
          <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
        </div>
      </div>
    </nav>
  );
}


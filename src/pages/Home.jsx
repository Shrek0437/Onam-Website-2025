import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-yellow-100 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-extrabold text-green-800 mb-6">
        🌼 Celebrate Onam with Us!
      </h1>
      <p className="text-lg max-w-2xl text-gray-700 mb-8">
        Support our college fundraiser by purchasing Onam essentials — 
        Jasmine bundles, Kerala snacks, Mundu, and more! 🌿
      </p>
      <Link
        to="/shop"
        className="px-6 py-3 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-800 transition"
      >
        Start Shopping
      </Link>
    </div>
  );
}

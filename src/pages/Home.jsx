import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react"; // for cart icon
import { Link } from "react-router-dom";

export default function Home() {
  // Logos in different languages
  const logos = ["ADHARVAM", "അധർവം", "अधरवम्"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2000); // change every 2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-end items-center gap-8 px-10 py-6 text-lg">
        <Link to="/" className="hover:text-yellow-400">HOME</Link>
        <Link to="/about" className="hover:text-yellow-400">ABOUT</Link>
        <Link to="/cart">
          <ShoppingCart size={24} className="hover:text-yellow-400" />
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Animated Logo */}
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-yellow-200 to-yellow-600 text-transparent bg-clip-text transition-all duration-500">
          {logos[index]}
        </h1>

        {/* Shop Now Button */}
        <Link
          to="/shop"
          className="mt-10 text-xl border-b-2 border-white hover:text-yellow-400 hover:border-yellow-400 transition-all"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

import { CiShoppingCart } from "react-icons/ci"; // for cart icon
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // Logo translations
  const logos = ["ADHARVAM", "അധർവം", "अधरवम्"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-end items-center gap-8 px-12 py-6 text-lg font-[Cinzel]">
        <Link to="/" className="hover:text-gray-300 transition">HOME</Link>
        <Link to="/about" className="hover:text-gray-300 transition">ABOUT</Link>
        <Link to="/cart" className="hover:text-gray-300 transition">
          <ShoppingCart size={22} />
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        {/* Animated Logo */}
        <h1
          className="text-7xl md:text-8xl font-extrabold 
                     bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 
                     text-transparent bg-clip-text tracking-wider 
                     transition-opacity duration-700 ease-in-out font-[Oswald]"
          key={index} // force fade transition
        >
          {logos[index]}
        </h1>

        {/* Shop Now */}
        <Link
          to="/shop"
          className="mt-10 text-xl font-[Cinzel] tracking-wide hover:text-gray-300 transition"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

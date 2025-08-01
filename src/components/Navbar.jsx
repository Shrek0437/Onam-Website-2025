// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="bg-yellow-100 shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-green-700">OnamBazaar 🎉</Link>
      <div className="flex gap-4">
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </div>
    </nav>
  );
}

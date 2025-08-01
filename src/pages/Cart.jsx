// src/pages/Cart.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between bg-white p-4 shadow rounded-xl">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
                <button
                  className="text-red-600 hover:underline"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{total}</h3>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="bg-gray-300 px-4 py-1 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

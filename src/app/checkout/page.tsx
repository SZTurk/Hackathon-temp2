"use client";

import { useCart } from "../context/cartcontext"; // ✅ Import cart context
import { useRouter } from "next/navigation";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart } = useCart(); // ✅ Access cart functions
  const router = useRouter(); // ✅ For redirecting to payment page

  // ✅ Calculate Total Price Safely
  const totalPrice = cart.length > 0
    ? cart.reduce((total: number, item: CartItem) => total + item.price * item.quantity, 0).toFixed(2)
    : "0.00";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] text-center">
        <h1 className="text-2xl font-bold mb-4">🛒 Checkout</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="w-full">
            {cart.map((item: CartItem) => ( // ✅ Use defined CartItem type
              <li key={item._id} className="p-2 border-b flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>

                {/* ✅ Quantity Counter */}
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 text-black rounded"
                    onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                  >
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 text-black rounded"
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    ➕
                  </button>
                </div>

                {/* ❌ Remove Button */}
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => removeFromCart(item._id)}
                >
                  ❌ Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* ✅ Total Price Section */}
        <div className="mt-4 text-lg font-bold">
          Total: ${totalPrice}
        </div>

        {/* ✅ Proceed to Payment */}
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          onClick={() => router.push("/payment")}
          disabled={cart.length === 0} // ✅ Disable if cart is empty
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

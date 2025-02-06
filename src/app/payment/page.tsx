"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const router = useRouter();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment successful! 🎉");
    router.push("/"); // Redirect to homepage after payment
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center">
        <h1 className="text-2xl font-bold mb-4">💳 Payment</h1>

        <form onSubmit={handlePayment} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Card Number"
            className="border p-2 rounded"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            className="border p-2 rounded"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CVV"
            className="border p-2 rounded"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
          >
            Pay Now 💰
          </button>
        </form>
      </div>
    </div>
  );
}

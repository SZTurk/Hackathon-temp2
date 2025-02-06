"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/cartcontext';

export default function Header() {
  const { cart } = useCart(); // ✅ Get cart data

  return (
    <header className="bg-white w-full h-[70px] flex justify-between items-center mx-auto px-6">
      <Link href="/" className="text-gray-600 hover:text-gray-900 text-3xl font-bold">
        Avion
      </Link>

      <div className="flex items-center space-x-8">
        <div className="flex gap-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900">
            Blog
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Image src="/Search.png" alt="Search Icon" width={16} height={16} />

          {/* ✅ Cart Link with Count */}
          <Link href="/checkout" legacyBehavior>
            <button className="relative">
              <Image src="/cart.png" alt="Cart Icon" width={16} height={16} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>

          <Link href="/acc-page" legacyBehavior>
            <button>
              <Image src="/user-avatar.png" alt="User Icon" width={16} height={16} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}


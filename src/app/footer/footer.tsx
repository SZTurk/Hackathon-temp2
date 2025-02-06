import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2A2B4B]  py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 mr-auto mb-8">
         
          {/* Menu */}
          <div>
            <h3 className="text-gray-400 text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  New arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Best sellers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Popular this week
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  All products
                </Link>
              </li>
            </ul>
          </div>

 {/* Categories */}
 <div>
            <h3 className="text-gray-400 text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Crockery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Homeware
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Plant pots
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Chairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-gray-400 text-lg font-semibold mb-4">Our company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Vacancies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Returns policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Mailing List */}
          <div>
            <h3 className="text-gray-400 text-lg font-semibold mb-4">Join our mailing list</h3>
            <form className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex bg-[#423964] text-white px-4 h-12 rounded-l-md w-full placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-[#726ca8]"
            />
              <button
              type="submit"
              className="flex items-center bg-white text-[#26204A] h-12 w-22 px-4 py-2 mr-auto rounded-r-md hover:bg-gray-200 transition"
            >
              Sign up
            </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright 2022 Avion LTD
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Skype</span>
              <FaSkype size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Pinterest</span>
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  variable: '--font-space-grotesk', 
  weight: ['400', '500', '600', '700'], 
});

export default function Hero2() {
  return (
    <div className={`w-full bg-white ${spaceGrotesk.className}`}>
      {/* Title */}
      <h2 className="text-2xl lg:text-3xl font-semibold text-[#25244d] mb-8 text-center">
        Our popular products
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Items */}
        {[
          {
            src: "/sofa.jpg",
            alt: "A stylish suede sofa",
            title: "The Popular Suede Sofa",
            price: "£250",
            width: 850,
            height: 625,
          },
          {
            src: "/chair1.png",
            alt: "A sleek dandy chair",
            title: "The Dandy Chair",
            price: "£155",
            width: 160,
            height: 175,
          },
          {
            src: "/chair2.png",
            alt: "A chair2",
            title: "The Dandy Chair ",
            price: "£125",
            width: 125,
            height: 275,
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-auto object-contain"
            />
            <h3 className="mt-4 text-lg font-medium text-[#25244d]">{item.title}</h3>
            <p className="text-sm text-[#25244d] mt-1">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 mb-10">
        <button className="bg-white text-[#25244d] border border-[#25244d] py-2 px-8 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#25244d]">
          View collection
        </button>
      </div>
    </div>
  );
}

  
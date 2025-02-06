import Image from 'next/image';
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  variable: '--font-space-grotesk', 
  weight: ['400', '500', '600', '700'], 
});

export default function NewCeramics() {
    return (
      <div className="w-full px-8 lg:px-20 py-10 bg-white">
        {/* Title */}
            <h2 className={`text-2xl lg:text-3xl  text-[#25244d] mb-8 ${spaceGrotesk.className}`}>
          New ceramics
        </h2>
  
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className=" flex-col ">
            <Image
              src="/chair1.png"
              alt="The Dandy chair"
              width={305}
              height={385}
              className="w-full h-auto object-contain"
            />
            <h3 className="mt-4 text-lg font-medium text-[#25244d]">
              The Dandy chair
            </h3>
            <p className="text-sm text-[#25244d] mt-1">£250</p>
          </div>
  
          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/Vases3.png"
              alt="Rustic Vase Set"
              width={305}
              height={375}
              className="w-full h-full object-contain"
            />
            <h3 className="mt-4 text-lg font-medium text-[#25244d]">
              Rustic Vase Set
            </h3>
            <p className="text-sm text-[#25244d] mt-1">£155</p>
          </div>
  
          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/vase1.png"
              alt="The Silky Vase"
              width={305}
              height={375}
              className="w-full h-auto object-contain"
            />
            <h3 className="mt-4 text-lg font-medium text-[#25244d]">
              The Silky Vase
            </h3>
            <p className="text-sm text-[#25244d] mt-1">£125</p>
          </div>
  
          {/* Item 4 */}
          <div className="flex flex-col ">
            <Image
              src="/lamp1.png"
              alt="The Lucy Lamp"
              width={305}
              height={375}
              className="w-full h-auto object-contain"
            />
            <h3 className="mt-4 text-lg font-medium text-[#25244d]">
              The Lucy Lamp
            </h3>
            <p className="text-sm text-[#25244d] mt-1">£399</p>
          </div>
        </div>
  
        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-white text-[#25244d] border border-[#25244d] py-3 px-8 rounded hover:bg-gray-100">
            View collection
          </button>
        </div>
      </div>
    );
  }
  
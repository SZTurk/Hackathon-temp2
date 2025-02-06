import Image from 'next/image';
import { Space_Grotesk } from '@next/font/google';
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  variable: '--font-space-grotesk', 
  weight: ['400', '500', '600', '700'], 
});

export default function Hero1() {
    return(
    
          <div className="flex justify-items-center flex-col lg:flex-row w-1440 h-704 ml-24 mt-24 mr-16 bg-[#25244d]">
            {/* Left Text Section */}
            <div className={`flex-1  px-14 mt-8  text-white ${spaceGrotesk.className}`}>
              <h3 className="text-medium lg:text-2xl mt-6">
                The furniture brand for the <br/> 
                future, with timeless designs
              </h3>
              <Link href="/productlisting">
              <button className="bg-[#38375a] hover:bg-[#4a496d] text-white py-3 px-6 mt-14 rounded mb-10">
                View collection
              </button>
              </Link>
              <p className="text-sm lg:text-base text-gray-400 mt-40">
                A new era in eco-friendly furniture with Avelon, the French luxury retail brand 
                with nice fonts, tasteful colors, and a beautiful way to display things digitally 
                using modern web technologies.
              </p>
            </div>
      
            {/* Right Image Section */}
            <div className="flex-1 bg-white  ">
              {/* Replace src below with your image path */}
              <Image
                src="/chair1.png"
                alt="Chair Showcase"
                width={600}
                height={800}
                className="w-auto h-auto "
              />
            </div>
          </div>
        );
      }
      

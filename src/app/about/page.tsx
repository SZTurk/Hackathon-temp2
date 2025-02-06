import Image from "next/image";
import Piece1 from "../pieces/pcs1/pcs1";
import Piece2 from "../pieces/pcs2/pcs2";
import Features from "../pieces/pcs3/pcs3";
import { Space_Grotesk } from '@next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  variable: '--font-space-grotesk', 
  weight: ['400', '500', '600', '700'], 
});




export default function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white w-full h-64 flex items-center justify-center font-space">
        <p className="text-center mt-8 px-12 text-3xl">
          A brand built on the love of craftsmanship, <br />
          quality, and outstanding customer service
        </p>
      </div>
     <Piece1></Piece1>
     <Piece2></Piece2>
     <Features></Features>
     <div className="flex-1 bg-white  ">
             <Image
               src="/image3.png"
               alt="Features"
               width={1440}
               height={100}
               className="object-cover"
             />
           </div>
    </>
  );
}

  
import Image from "next/image";

import Hero1 from "./components/hero1/hero1";
import Hero2 from "./components/hero2/hero2";
import Newceramics from "./newceramics/newceramics";
import Piece1 from "./pieces/pcs1/pcs1";
import Features from "./pieces/pcs3/pcs3";

export default function Home(){
    return(
        <div>
          <Hero1></Hero1> 
          <Newceramics></Newceramics>
          <Hero2></Hero2>
            
          <div className="flex-1 bg-white  ">
                         <Image
                           src="/image3.png"
                           alt="Features"
                           width={1440}
                           height={80}
                           className="object-cover"
                         />
                       </div>

          <Piece1></Piece1>
          <Features></Features>

        </div>
    )
}
import Image from "next/image";

export default function Piece2() {
  return(
    

<div className="flex flex-col lg:flex-row h-auto lg:h-96 w-full mt-8 font-space">
  {/* Right Box with Image */}
  <div className="flex bg-white ">
    <Image
      src="/image2.png"
      alt="Another Furniture Showcase"
      width={600}
      height={400}
      className="object-cover"
    />
  </div>

  {/* Left Content with Text */}
  <div className="flex-1 flex flex-col justify-center ml-8 mr-4 bg-white">
    <h1 className="text-xl font-semibold mb-4">
      Our service isn’t just personal; it’s hyper-personally exquisite
    </h1>
    <p className="text-base text-gray-700 mb-6">
      When we started Avion, the idea was simple: make high-quality furniture affordable and available for the mass market.
      <br />
      <br />
      Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique became
      the hotbed for the London interior design community.
    </p>
    <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium h-14 w-32 rounded mt-10">
      Get in touch
    </button>
  </div>
</div>
    

  )
}
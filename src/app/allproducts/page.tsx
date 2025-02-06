import Image from "next/image";

const products = [
  {
    src: "/chair1.png",
    alt: "The Dandy chair",
    name: "The Dandy Chair",
    price: "£250",
  },
  {
    src: "/Vases3.png",
    alt: "Rustic Vase Set",
    name: "Rustic Vase Set",
    price: "£155",
  },
  {
    src: "/Parent.png",
    alt: "The Dandy Stool",
    name: "The Dandy Stool",
    price: "£125",
  },
  {
    src: "/singleV.png",
    alt: "The Silky Vase",
    name: "The Silky Vase",
    price: "£250",
  },
  {
    src: "/ceilingL.png",
    alt: "ceiling lamp",
    name: "The Ceiling Lamp",
    price: "£399",
  },
  {
    src: "/chair2.png",
    alt: "The Dandy Chair",
    name: "The Dandy Chair",
    price: "£105",
  },
  {
    src: "/lamps.png",
    alt: "Ceiling Lamps",
    name: "The Ceiling Lamps",
    price: "£250",
  },
  {
    src: "/whiteV.png",
    alt: "The White Vase",
    name: "The White Vase",
    price: "£299",
  },
  {
    src: "/chairs.png",
    alt: "The Dandy Chairs",
    name: "The Chairs",
    price: "£105",
  },
];

export default function Allproducts() {
  return (
    <div>
      {/* Header */}
      <div className="bg-white">
        <Image
          src="/pagehdr.png"
          alt="header"
          width={1440}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Main Layout */}
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <div className="w-[335px] bg-white h-full p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Product type</h2>
          <div className="mb-6">
            {["Furniture", "Homeware", "Sofas", "Light fittings", "Accessories"].map(
              (type) => (
                <label key={type} className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  {type}
                </label>
              )
            )}
          </div>

          <h2 className="text-xl font-semibold mb-4">Price</h2>
          <div className="mb-6">
            {["0 - 100", "101 - 250", "250+"].map((range) => (
              <label key={range} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                {range}
              </label>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">Designer</h2>
          <div>
            {["Robert Smith", "Liam Gallagher", "Biggie Smalls", "Thom Yorke"].map(
              (designer) => (
                <label key={designer} className="flex items-center mb-2">
                  <input type="checkbox" className="mr-2" />
                  {designer}
                </label>
              )
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="flex flex-col">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={305}
                  height={375}
                  className="w-full h-auto object-contain"
                />
                <h3 className="mt-4 text-lg font-medium text-[#25244d]">
                  {product.name}
                </h3>
                <p className="text-sm text-[#25244d] mt-1">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-4 mb-10 flex justify-center">
            <button className="px-6 py-2 bg-slate-300 text-gray-800 text-lg font-semibold rounded hover:bg-blue-700">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Blog() {
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
      <div className="min-h-screen flex flex-col items-center bg-gray-50 py-10">
        <h1 className="text-3xl font-bold text-[#25244d] mb-6">Our Blog</h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl">
          Stay updated with the latest trends, design inspirations, and news from Avion. Dive into our curated articles crafted to inspire and inform.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl">
          {/* Blog Post 1 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <Image
              src="/dSpace.png"
              alt="Blog Post 1"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#25244d] mb-2">
                Designing Your Dream Space
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Learn how to create a harmonious and functional living space with our expert design tips.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <Image
              src="/futureF.jpeg"
              alt="Blog Post 2"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#25244d] mb-2">
                Top 10 Furniture Trends for 2025
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Discover the latest trends shaping the world of furniture and home decor this year.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded shadow-lg overflow-hidden">
            <Image
              src="/sustainableL.jpeg"
              alt="Blog Post 3"
              width={400}
              height={250}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#25244d] mb-2">
                Sustainable Living: A Guide
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Explore tips and ideas for making your home more eco-friendly and sustainable.
              </p>
              <a
                href="#"
                className="text-blue-500 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-2 bg-slate-300 text-gray-800 text-lg font-semibold rounded hover:bg-blue-700">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

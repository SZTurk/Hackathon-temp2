import Image from "next/image";

export default function Contact() {
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
        <h1 className="text-3xl font-bold text-[#25244d] mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
          Have questions or need assistance? We'd love to hear from you. Fill out the form below or reach us through our social media platforms.
        </p>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Images */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <Image
            src="/customerS.png"
            alt="Customer Service"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
          <Image
            src="/supportT.png"
            alt="Support Team"
            width={400}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-[#25244d] mb-4">Follow Us</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

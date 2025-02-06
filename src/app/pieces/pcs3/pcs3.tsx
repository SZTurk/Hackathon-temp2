import Image from "next/image";

export default function Features() {
    return (
      <div className="bg-white py-16 mt-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10">
            What makes our brand different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <Image
                        src="/icons/Delivery.png"
                        alt="delivery"
                        width={18}
                        height={18}
                        className="w-4 h-4"
                      /> 
              <h3 className="text-lg font-medium text-left text-gray-800">Next day as standard</h3>
              <p className="text-medium text-left text-gray-600 mt-2">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="flex flex-col items-center">
            <Image
                        src="/icons/checkmark--outline.png"
                        alt="check-sign"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      /> 
              <h3 className="text-lg font-medium text-left text-gray-800">Made by true artisans</h3>
              <p className="text-medium text-left text-gray-600 mt-2">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div className="flex flex-col items-center">
            <Image
                        src="/icons/Purchase.png"
                        alt="wallet"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      /> 
              <h3 className="text-lg font-medium text-left text-gray-800">Unbeatable prices</h3>
              <p className="text-medium text-left text-gray-600 mt-2">
                For our materials and quality, you won’t find better prices anywhere.
              </p>
            </div>
  
            {/* Feature 4 */}
            <div className="flex flex-col items-center">
            <Image
                        src="/icons/Sprout.png"
                        alt="sprout"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      /> 
              <h3 className="text-lg font-medium text-left text-gray-800">Recycled packaging</h3>
              <p className="text-medium text-left text-gray-600 mt-2">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
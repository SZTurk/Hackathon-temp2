export default function JoinClub() {
    return (
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/background-image.jpg')", // Replace with your actual image path
        }}
      >
        <div className="text-center text-white">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-4xl font-semibold mb-4">
            Join the club and get the benefits
          </h2>
  
          {/* Subheading */}
          <p className="text-sm sm:text-base mb-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
  
          {/* Features */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center space-x-2">
              <span className="text-lg">✔️</span>
              <span className="text-sm sm:text-base">Exclusive offers</span>
            </div>
  
            <div className="flex items-center space-x-2">
              <span className="text-lg">✔️</span>
              <span className="text-sm sm:text-base">Free events</span>
            </div>
  
            <div className="flex items-center space-x-2">
              <span className="text-lg">✔️</span>
              <span className="text-sm sm:text-base">Large discounts</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
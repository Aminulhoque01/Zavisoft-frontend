export default function HeroSection() {
  return (
    <div className="  flex items-center justify-center  ">
      
      {/* Main Container */}
      <div className="w-full container  mt-2 ">
        
        {/* Heading */}
        <h1 className="text-9xl font-extrabold  mb-3 text-center">
          <span className="text-black">DO IT </span>
          <span className="text-blue-500">RIGHT</span>
        </h1>

        {/* Product Card */}
        <div className="relative bg-[#c98a2e] rounded-3xl overflow-hidden p-10 flex items-center justify-between">
          
          {/* Left Content */}
          <div className="text-white max-w-md">
            <h2 className="text-4xl font-bold mb-4">NIKE AIR MAX</h2>
            <p className="text-sm opacity-90 mb-6">
              Nike introducing the new air max for everyone’s comfort
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-semibold transition">
              SHOP NOW
            </button>
          </div>

          {/* Center Image */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src="/shoe.png"
              alt="Nike Shoe"
              className="w-[420px] drop-shadow-2xl"
            />
          </div>

          {/* Right Thumbnails */}
          <div className="flex flex-col gap-4">
            <div className="border-2 border-pink-500 rounded-xl p-1 bg-white">
              <img src="/shoe.png" alt="" className="w-20 h-20 object-contain" />
            </div>

            <div className="rounded-xl p-1 bg-white">
              <img src="/shoe.png" alt="" className="w-20 h-20 object-contain" />
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}
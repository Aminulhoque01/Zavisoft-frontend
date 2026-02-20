import Image from "next/image";
import heroImage from "../../app/assest/heroImage.jpg"
import heroImage2 from "../../app/assest/hero2.jpg"
import heroImage3 from "../../app/assest/hero3.jpg"

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

       

        <div className="relative rounded-3xl overflow-hidden p-10 flex items-center justify-between min-h-[450px]">
          
          {/* Background Image */}
          <Image
            src={heroImage}
            alt="Nike Shoe Background"
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay (optional but recommended) */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content Wrapper (important!) */}
          <div className="relative z-5 flex items-center justify-between w-full mt-10 pt-10">
            
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

            {/* Right Thumbnails */}
            <div className="flex flex-col gap-4">
              <div className="rounded p-1 ">
                <Image src={heroImage2} alt="" width={180} height={80} className="object-contain rounded-md" />
              </div>

              <div className="rounded p-1 ">
                <Image src={heroImage3} alt="" width={180} height={80} className="object-contain rounded-md" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
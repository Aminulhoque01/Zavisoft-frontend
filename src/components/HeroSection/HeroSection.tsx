import Image from "next/image";
import heroImage from "../../app/assest/heroImage.jpg"
import heroImage2 from "../../app/assest/hero2.jpg"
import heroImage3 from "../../app/assest/hero3.jpg"

export default function HeroSection() {
  return (
    <div className=" md:flex items-center justify-center  ">
      
      {/* Main Container */}
      <div className="md:w-full container  mt-2 ">
        
        {/* Heading */}
        <h1 className="md:text-9xl font-extrabold  mb-3 text-center">
          <span className="text-black">DO IT </span>
          <span className="text-blue-500">RIGHT</span>
        </h1>

       

        <div className="relative rounded-3xl overflow-hidden p-6 md:p-10 min-h-[450px] flex items-center">

  {/* Background Image */}
  <Image
    src={heroImage}
    alt="Nike Shoe Background"
    fill
    priority
    className="object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content Wrapper */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10">

    {/* Left Content */}
    <div className="text-white max-w-md text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        NIKE AIR MAX
      </h2>

      <p className="text-sm md:text-base opacity-90 mb-6">
        Nike introducing the new air max for everyone’s comfort
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-semibold transition">
        SHOP NOW
      </button>
    </div>

    {/* Right Thumbnails */}
    <div className="flex flex-row md:flex-col gap-4 mt-8 md:mt-0">
      <Image
        src={heroImage2}
        alt=""
        width={180}
        height={80}
        className="object-contain rounded-md"
      />

      <Image
        src={heroImage3}
        alt=""
        width={180}
        height={80}
        className="object-contain rounded-md"
      />
    </div>

  </div>
</div>
      </div>
    </div>
  );
}
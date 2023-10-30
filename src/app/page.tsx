import Image from "next/image";
import Navbar from "../components/ui/layout/navbar";
import Slide1 from "@/components/ui/layout/homePageSlides/slide1";
import Slide2 from "@/components/ui/layout/homePageSlides/slide2";
import Slide3 from "@/components/ui/layout/homePageSlides/slide3"
import Slide4 from "@/components/ui/layout/homePageSlides/slide4";
import Slide5 from "@/components/ui/layout/homePageSlides/slide5";
import Footer from "@/components/ui/layout/footer";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full">
          <Image
            src="/Hero.svg"
            alt="Description"
            className="relative w-full"
            width={300}
            height={200}
          />
          {/* Other content */}
        </div>
        <div className="absolute top-0 left-0 flex flex-col items-center w-full h-full">
          <Navbar />
        </div>

        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 text-start top-1/2 left-1/4">
          <p className="font-extrabold text-[#FFFFFF] text-7xl font-montserat pb-5">
            Master the Art of <br /> Baking with Video- <br /> Assisted
            Tutorials
          </p>
          <p className="text-lg font-semibold font-montserrat text-[#FFFFFF] pb-5">
            Elevate Your Baking Skills to Perfection
          </p>
          <button className="bg-[#BA80E6] gap-3 rounded-xl px-7 py-3 flex items-center border-2 font-montserrat text-xl font-bold item-center">
            Sign Up Now
            <Image
              src="/arrow-right.svg"
              alt="right-arrow"
              width={30}
              height={30}
            />
          </button>
        </div>
        <div className="absolute justify-center transform -translate-x-1/2 -translate-y-1/2 item-center bottom-10 left-1/2">
          <Image
            src="/player-img.svg"
            alt="right-arrow"
            width={2000}
            height={500}
          /> 
        </div>
      </section>
      <section>
        <Slide1/>
        <Slide2/>
        <Slide3/>
        <Slide4/>
        <Slide5/>
        <Footer/>
      </section>
    </main>
  );
}

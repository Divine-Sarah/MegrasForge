import React from 'react'
import Image from "next/image";

function footer() {
  return (
    <main>
      <section>
        <div className="w-[90%] xl:w-[1280px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]">
          <div className="content bg-[#C68CF2] md:py-[110px] py-[20px] lg:py-[40px] px-[10px] gap-20 lg:px-[34px] rounded-3xl md:flex items-center">
            <div>
              <Image src="/footer.svg" alt="slide1" width={300} height={300} />
            </div>
            <div className="text md:w-1/2">
              <p className="text-[20px] font-[500] font-montserrat justify-center items-center flex">
                Start baking, start learning, start connecting – it all begins
                here. Join our community of passionate bakers and let's create
                something delicious together!
              </p>
              <div className="py-[50px]">
                <button className="bg-[#391952] gap-3 text-white px-[23px] py-[12px] flex items-center rounded-2xl font-[700]">
                  Explore Our Library
                  <Image
                    src="/slide3arrow.svg"
                    alt="right-arrow"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default footer
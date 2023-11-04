import React from 'react'
import Image from "next/image";

function slide4() {
  return (
    <main className="bg-[#E6C5FF]">
      <section className="p-8 w-[100%] xl:w-[1490px] px-5  mx-auto py-[70px]  lg:py-[40px]">
        <p className="text-[64px] font-montserrat text-[#391952] font-[700] pb-5">
          Why Choose Us?
        </p>
        <div className="flex gap-5">
          <Image
            src="/slide4img.svg"
            alt="slide1"
            width={500}
            height={500}
          />
          <Image
            src="/slide4img2.svg"
            alt="slide1"
            width={500}
            height={500}
          />
          <Image
            src="/slide4img3.svg"
            alt="slide1"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}

export default slide4
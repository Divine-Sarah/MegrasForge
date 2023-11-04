import React from 'react'
import Image from "next/image";

function slide5() {
  return (
    <main>
      <section className="mt-5 bg-black">
        <div className="p-8 w-[100%] xl:w-[1490px] px-5  mx-auto py-[70px]  lg:py-[40px] pb-10">
          <p className="text-[#fff]  font-[600] text-[64px] pb-7">
            User Testimonials
          </p>
          <div className="flex gap-5">
            <Image src="/slide5img.svg" alt="slide1" width={500} height={500} />
            <Image
              src="/slide5img2.svg"
              alt="slide1"
              width={500}
              height={500}
            />
            <Image
              src="/slide5img3.svg"
              alt="slide1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default slide5
import React from 'react'
import Image from "next/image";

function slide2() {
  return (
    <main className="bg-[#F5F5F5]">
      <section className="p-8 w-[100%] xl:w-[1490px] px-5  mx-auto py-[70px]  lg:py-[40px]">
        <div className="text-black">
          <p className="flex items-center gap-3 mb-5 text-5xl font-bold font-montserrat">
            Meet Our
            <Image
              src="/slide2img.svg"
              alt="right-arrow"
              width={100}
              height={100}
            />
            Expert Tutors
          </p>
          <p className="text-lg font-medium font-montserrat">
            Get to know our experienced instructors, each with a wealth of
            knowledge and a passion for baking.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Image
            src="/slide2img1.svg"
            alt="right-arrow"
            width={500}
            height={500}
          />
          <Image
            src="/slide2img2.svg"
            alt="right-arrow"
            width={600}
            height={600}
          />

          <Image
            src="/slide2img6.svg"
            alt="right-arrow"
            width={500}
            height={500}
          />
          <Image
            src="/slide2img5.svg"
            alt="right-arrow"
            width={650}
            height={650}
          />
        </div>
      </section>
    </main>
  );
}

export default slide2
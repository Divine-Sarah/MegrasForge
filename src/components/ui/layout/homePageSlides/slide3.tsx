import React from "react";
import Image from "next/image";

function slide3() {
  return (
    <main className="bg-[#fff]">
      <section className=" font-poppins">
        <div className="w-[90%] xl:w-[1290px] mx-auto py-[60px] md:py-[60px] lg:py-[49px]">
          <div className="content bg-[#BA80E6] md:py-[110px] py-[20px] lg:py-[100px] px-[20px] lg:px-[34px] rounded-3xl md:flex items-center">
            <div className="text md:w-1/2">
              <p className="font-[700] lg:text-[64px] text-[#2F0F48] leading-[36px] lg:leading-[48px] font-montserrat flex items-center gap-3">
                Join a Baking Community
                <Image
                  src="/slide3cookie.svg"
                  alt="slide1"
                  width={100}
                  height={100}
                />
              </p>
              <p className="pt-[18px] font-[500] font-montserrat text-[#391952] pb-5">
                Get ready to embark on a baking journey that's bound to delight
                your taste buds. Join our community of bakers today and take the
                first step towards becoming a baking maestro!
                <br />
                <br />
                Join us and let's bake up a storm together. Are you ready to
                rise to the occasion?
              </p>
              <div>
                <button className="bg-[#391952] gap-3 text-white px-[23px] py-[12px] flex items-center rounded-2xl font-[700]">
                  Get Started Now
                  <Image
                    src="/slide3arrow.svg"
                    alt="right-arrow"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/slide3img.svg"
                alt="slide1"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default slide3;

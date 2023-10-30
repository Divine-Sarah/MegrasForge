import React from 'react'
import Image from "next/image";

function slide1() {
  return (
    <main>
      <div className="rounded-3xl bg-[rgb(57,25,82)] w-[100%] xl:w-[1490px] px-5  mx-auto py-[70px] mt-10 lg:py-[40px]">
        <p className="text-center text-[#fff] font-montserrat font-semibold text-lg">
          Welcome to the ultimate baking destination where you can learn the art
          of baking like never before. Our video-assisted bakery products
          learning platform is designed to inspire, educate, and empower baking
          enthusiasts of all levels. Whether you're a novice in the kitchen or a
          seasoned pro, we've got something delicious in store for you.
        </p>
      </div>
      <div className="bg-[#FFF]">
        <div className="w-[90%] xl:w-[1280px] mx-auto py-[64px] md:py-[67px] lg:py-[49px]">
          <div className="content  md:py-[110px] py-[20px] lg:py-[40px] px-[20px] lg:px-[40px] rounded-3xl md:flex items-center gap-10">
            <div className="flex items-center justify-center image md:w-1/2">
              <Image
                src="/slide1.svg"
                alt="slide1"
                width={1004}
                height={670.15}
              />
            </div>
            <div className="text md:w-1/2">
              <div>
                <p className="rounded-2xl bg-[#391952] justify-center flex font-montserrat text-xl font-semibold px-10 py-3 text-[#fff] text-center mb-5">
                  Watch & Learn
                  <Image
                    src="/slideimg2.svg"
                    alt="right-arrow"
                    width={30}
                    height={30}
                  />
                </p>
                <p className="mb-5 text-lg font-medium font-montserrat">
                  Our extensive video library brings the magic of baking to your
                  screen. From delectable bread to mouthwatering pastries, and
                  sumptuous cakes to irresistible cookies, there's something for
                  everyone.
                </p>
              </div>
              <div className="">
                <p className="rounded-2xl bg-[#EDDDFA] flex justify-center font-montserrat text-xl font-semibold px-10 py-3 text-[#391952] text-center mb-5">
                  Hands-On Experience
                  <Image
                    src="/slide1img2.svg"
                    alt="right-arrow"
                    width={30}
                    height={30}
                  />
                </p>

                <p className="text-lg font-medium font-montserrat">
                  Our step-by-step tutorials guide you through every recipe,
                  helping you gain the confidence and skills to master the art
                  of baking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default slide1
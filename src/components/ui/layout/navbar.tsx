import React from 'react'
import Link from "next/link";
import Image from "next/image";

function navbar() {
  return (
    <main>
      <div className="relative">
        <header className="w-[90%] xl:w-[1280px] mx-auto flex items-center justify-between flex-wrap py-[20px]">
          <div className="flex items-center mr-6 text-white flex-no-shrink">
            <Link href="/">
              <h1 className="text-xl font-black text-white font-montserat">
                MergasForge
              </h1>
            </Link>
          </div>
          <div className="hidden lg:flex space-x-[40px] font-[700] text-[18px] font-montserrat items-center justify-center">
            <div className="hover:font-[800]">
              <Link href="/">
                <h1 className="text-lg font-[700] text-white">Home</h1>
              </Link>
            </div>
            <div className="hover:font-[800]">
              <Link href="/">
                <h1 className="text-lg font-[700] text-white">Tutor Courses</h1>
              </Link>
            </div>
            <div className="hover:font-[800]">
              <Link href="/">
                <h1 className="text-lg font-[700] text-white">About us</h1>
              </Link>
            </div>
            <div className="hover:font-[800]">
              <Link href="/">
                <h1 className="text-lg font-[700] text-white">Contact us</h1>
              </Link>
            </div>
          </div>
          <div className="flex space-x-[43px] font-poppins font-[700] items-center">
            <div>
              <button className="hidden md:block bg-[#BA80E6] rounded-2xl px-[23px] py-[11px]  text-[#391952]">
                Sign Up
              </button>
            </div>
            <div>
              <button className="hidden md:block border-[#BA80E6] border-4 rounded-2xl px-[23px] py-[11px] text-[#391952]">
                Become a Tutor
              </button>
            </div>
          </div>
        </header>
      </div>
    </main>
  );
}

export default navbar
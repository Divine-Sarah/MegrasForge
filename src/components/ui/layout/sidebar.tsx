"use client";
import { AdminNavLinks, UserNavLinks } from "@/mock/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaMediumM } from "react-icons/fa";
// import { Disclosure } from "@headlessui/react";
// import { GiHamburgerMenu } from "react-icons/gi";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <main className="w-full mt-5 ">
      <aside className="sidebar">
        <div className="fixed top-0 z-20 w-1/2 h-screen p-2 duration-200 ease-out delay-150 bg-gray-200 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition">
          <div className="flex flex-col items-center justify-start">
            <div className="flex justify-center mx-auto">
              {/* < FaMediumM  size={50}/> */}
              <h1 className="w-full pb-4 text-base font-bold text-center text-blue-500 border-b border-black cursor-pointer">
                MegrasForge
              </h1>
            </div>
            <div className="pb-4 my-4 border-b border-gray-100">
              <div className="flex items-center justify-start gap-4 p-2 pl-5 m-auto mb-2 rounded cursor-pointer hover:bg-grounded-md group hover:shadow-lg"></div>
            </div>
            <div className="mt-[4rem] w-full border-2">
              <ul className="flex flex-col">
                {UserNavLinks.map((link, index) => (
                  <li className="block  mb-4 h-[40px]" key={index}>
                    <Link
                      href={link.path}
                      className={`flex items-center rounded 
              text-center cursor-pointer transition-colors  
              ${
                pathname === `${link.path}`
                  ? "bg-[#00B0F0] h-full text-white"
                  : "bg-white hover:bg-[#dcebf9] h-full text-black"
              }
              `}
                    >
                      <span className="inline-block ml-4">
                        <p className={`capitalize`}>{link.title}</p>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

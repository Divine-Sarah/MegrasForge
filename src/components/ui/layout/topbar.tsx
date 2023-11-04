"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImSearch } from "react-icons/im";
import { RiVideoAddLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

import MenuBar from "../../../components/ui/layout/menuBar";

export default function Topbar() {
  const router = useRouter();
  return (
    <main>
      <div className="bg-[#391952] w-full p-1">
        <div className="flex items-center justify-between w-2/3 gap-10 mx-auto my-5">
          <div className=" rounded-full p-[12px] md:flex hidden items-center space-x-[24px] w-full border-2 border-[#F5F5F5]">
            <Input
              className="items-center border-none rounded-full w-[500%] md:flex text-[#FFFFFF]"
              placeholder="Search"
            />
            <Button className="bg-gradient-to-r from-[#BA80E6] to-[#BA80E6] px-11 rounded-3xl">
              <ImSearch />
            </Button>
          </div>
          <div className="flex justify-between">
            <Button className="mx-5">
              <RiVideoAddLine
                className="text-white w-7 h-7"
                onClick={() => router.push("/dashboard/uploadVideo")}
              />
            </Button>

            <Button>
              <MenuBar />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

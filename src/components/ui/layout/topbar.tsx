import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ImSearch } from "react-icons/im";
import { RiVideoAddLine } from "react-icons/ri";


import MenuBar from "../../../components/ui/layout/menuBar";

export default function Topbar() {
  return (
    <main className="bg-[#181818] w-full">
      <div className="flex items-center justify-between w-2/3 gap-10 mx-auto my-5">
        <div className=" rounded-full p-[12px] md:flex hidden items-center space-x-[24px] w-full border-2 border-[#383838] ">
          <Input
            className="items-center border-none rounded-full w-[500%] md:flex text-[#FFFFFF]"
            placeholder="Search"
          />
          <Button className="bg-gradient-to-r from-[#1E73BE] to-[#00BFEF] px-11 rounded-3xl">
            <ImSearch />
          </Button>
        </div>
        <div className="flex justify-between">
          <Button className="mx-5">
            <RiVideoAddLine className=" w-7 h-7" />
          </Button>
         
          <Button>
            <MenuBar />
          </Button>
        </div>
      </div>
    </main>
  );
}

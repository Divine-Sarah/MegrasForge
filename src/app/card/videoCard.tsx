"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function VideoCard() {
  const router = useRouter();
  return (
    <div className="flex grid-flow-row grid-cols-2 gap-10 overflow-x-scroll md:grid lg:grid-cols-4 auto-rows-max no-scrollbar">
      <div className="border-2 h-[350px] flex items-center justify-center flex-col rounded-[30px] border-[#BA80E6] text-[#391952] space-y-8">
        <div className="">
          <p className="text-base font-semibold font-poppins">Topic</p>
        </div>
        <div className="h-[100px]">
          <div className="mt-5 mb-2 text-sm font-medium font-poppins">
            Video Description
          </div>
        </div>
        <Button
          className="rounded-full border-[#391952] border-2 px-10 py-3 hover:bg-gradient-to-r from-[#BA80E6] to-[#BA80E6] text-[#391952] hover:text-white"
          onClick={() => router.push("/dashboard/video")}
        >
          Watch
        </Button>
      </div>
    </div>
  );
}

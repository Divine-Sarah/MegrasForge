import DashboardLayout from "@/components/ui/layout/dashbaordLayout";
import React from "react";
import CustomVideoPlayer from "./vidoePlayer";

function VideoDetails() {
  return (
    <DashboardLayout>
      <div className="h-full px-5 border-2">
        <div className="flex flex-col items-center justify-center w-full border-2">
          <div className="w-full bg-black   border-2 h-[500px]">
            <CustomVideoPlayer />
          </div>
          <div className="w-full mt-3 border-2 ">
            <h3>Hello mother fucker</h3>
            <h3>Hello mother fucker</h3>
          </div>
        </div>
        <div className="w-full mt-8">
          <h3 className="pl-2 mb-3">Comment</h3>

          <textarea
            name=""
            id=""
            className="w-[600px] h-[300px] rounded-[10px]"
          ></textarea>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default VideoDetails;

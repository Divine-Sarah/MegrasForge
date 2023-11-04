import DashboardLayout from "@/components/ui/layout/dashbaordLayout";
import React from "react";


function Recipes() {
  return (
    <DashboardLayout>
      <div className="flex grid-flow-row grid-cols-2 gap-10 overflow-x-scroll md:grid lg:grid-cols-4 auto-rows-max no-scrollbar">
        <div className="border-2 h-[350px] flex items-center justify-center flex-col rounded-[30px] text-white space-y-8">
          <div className="">
            <p className="text-base font-semibold font-poppins">Title</p>
          </div>
          <div className="">
            <p className="text-base font-semibold font-poppins">Ingredients</p>
          </div>
          <div className="h-[100px]">
            <div className="mt-5 mb-2 text-sm font-medium font-poppins">
              Instructions
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Recipes;

import React, { ReactNode } from "react";
import Topbar from "@/components/ui/layout/topbar";
import Sidebar from "@/components/ui/layout/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="">
      <div className="flex h-screen">
        <div className="w-[220px]   left-0  top-0">
          <Sidebar />
        </div>
        <div className="flex flex-col w-[calc(100%-220px)] fixed left-[220px] h-full">
          <div className="w-full">
            <Topbar />
          </div>
          <main className="flex-1 px-[3rem] py-2 overflow-x-hidden overflow-y-auto bg-[#F5F5F5]">
            {children}
          </main>
        </div>
      </div>
    </main>
  );
};
export default DashboardLayout;

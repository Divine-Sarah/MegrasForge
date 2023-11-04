import DashboardLayout from "@/components/ui/layout/dashbaordLayout";
import { FcUpload } from "react-icons/fc";

const UploadVideo = () => {
return (
  <DashboardLayout>
    <div className="p-10">
      <div className="flex items-center justify-center border-2 border-gray-400 border-dashed rounded-2xl ">
        <div className="w-[820px] rounded-lg px-[45px] py-[50px] space-y-[8px] mx-auto">
          <h1 className="text-white">Hello world</h1>
          <FcUpload/>
        </div>
      </div>
    </div>
  </DashboardLayout>
);
}

export default UploadVideo
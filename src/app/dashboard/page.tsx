import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/ui/layout/dashbaordLayout";
import VideoCard from "../card/videoCard";

const DashboardPage = () => {
  const handleCardClick = () => {
    // Handle click functionality here
    console.log("Card clicked!");
  };
  return (
    <DashboardLayout>
      <div className="p-10 max-w-7xl">
        {/* Content specific to the dashboard page */}
        <h1 className="mb-4 text-3xl font-semibold text-[#391952]">
          Welcome to the Dashboard!
        </h1>
        {/* Additional content */}
        <section>
          <div className="flex items-center justify-between">
            <h3 className="text-[#391952] font-poppins text-4xl">Cakes</h3>
            <Button className="rounded-full border-[#391952] border-2 px-12 py-7 hover:bg-gradient-to-r from-[#BA80E6] to-[#BA80E6] text-[#391952] hover:text-white">
              Watch More
            </Button>
          </div>
          <section>
            <VideoCard />
          </section>
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-[#391952] font-poppins text-4xl">Bread</h3>
            <Button className="rounded-full border-[#391952] border-2 px-12 py-7 hover:bg-gradient-to-r from-[#BA80E6] to-[#BA80E6] text-[#391952] hover:text-white">
              Watch More
            </Button>
          </div>
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-[#391952] font-poppins text-4xl">
              Pies and Tarts
            </h3>
            <Button className="rounded-full border-[#391952] border-2 px-12 py-7 hover:bg-gradient-to-r from-[#BA80E6] to-[#BA80E6] text-[#391952] hover:text-white">
              Watch More
            </Button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

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
      <div className="mx-auto max-w-7xl">
        {/* Content specific to the dashboard page */}
        <h1 className="mb-4 text-3xl font-semibold text-white">
          Welcome to the Dashboard!
        </h1>
        {/* Additional content */}
        <section>
          <div className="flex items-center justify-between">
            <h3 className="text-[#FFFFFF] font-poppins text-4xl">Cakes</h3>
            <Button className="rounded-full border-[#1E73BE] border-2 px-12 py-7 hover:bg-gradient-to-r from-[#1E73BE] to-[#00BFEF] text-[#1E73BE] hover:text-white">
              Watch More
            </Button>
          </div>
          <section>
            <VideoCard />
            {/* <ul className="flex grid-flow-row grid-cols-2 gap-10 overflow-x-scroll md:grid lg:grid-cols-4 auto-rows-max no-scrollbar">
                <div> 
                     <Card title="Card Title" content="Card Content" onClick={handleCardClick}>
                        <h1>hello</h1>
                       <CardContent>
                        Helloguys
                       </CardContent>
                       <CardDescription>
                        this ia a chocolate cake
                       </CardDescription>
                    </Card>
                    
                </div>
                <div> 
                     <Card>
                        <h1>hello</h1>
                    </Card>
                    
                </div>
              
                </ul> */}
          </section>
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-[#FFFFFF] font-poppins text-4xl">Bread</h3>
            <Button className="rounded-full border-[#1E73BE] border-2 px-12 py-7 hover:bg-gradient-to-r from-[#1E73BE] to-[#00BFEF] text-[#1E73BE] hover:text-white">
              Watch More
            </Button>
          </div>
        </section>
        <section className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-[#FFFFFF] font-poppins text-4xl">
              Pies and Tarts
            </h3>
            <Button className="rounded-full border-[#1E73BE] border-2 px-12 py-7 hover:bg-gradient-to-r from-[#1E73BE] to-[#00BFEF] text-[#1E73BE] hover:text-white">
              Watch More
            </Button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;

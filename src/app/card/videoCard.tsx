import React from "react";
        import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
interface VideoPlayerProps {
  cloudinaryUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ cloudinaryUrl }) => {
   const router = useRouter();
  return (
    <div>
      <video controls width="300" height="200">
        <source src={cloudinaryUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Button
        className="rounded-full border-[#391952] border-2 px-10 py-3 hover:bg-gradient-to-r from-[#BA80E6] to-[#BA80E6] text-[#391952] hover:text-white"
        onClick={() => router.push("/dashboard/video")}
      >
        Watch
      </Button>
    </div>
  );
};

export default VideoPlayer;

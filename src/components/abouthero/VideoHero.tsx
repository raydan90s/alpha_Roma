import React from "react";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { quality } from "@cloudinary/url-gen/actions/delivery";

interface Props {
  videoId: string;
  title: string;
  subtitle: string;
}

const VideoHero: React.FC<Props> = ({ videoId, title, subtitle }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dfbpaq83u", // ✅ tu cloudName real
    },
  });

  const myVideo = cld.video(videoId);
  myVideo.format(auto());
  myVideo.delivery(quality("auto"));

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <AdvancedVideo
        cldVid={myVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default VideoHero;

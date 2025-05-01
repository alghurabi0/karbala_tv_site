import React from "react";
import { ProgramTile } from "../../components/ktv/home/PopularSection";
import { FaVideo, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

function LivePage() {
  const liveChannels = [
    { name: "قناة القرآن الكريم الفضائية", image: "/images/quran.jpg" },
    { name: "قناة الوثائقية الفضائية", image: "/images/documentary.jpeg" },
    { name: "قناة السفير الفضائية", image: "/images/safeer.png" },
  ];

  const programs = [
    { title: "عطاء الوالدين", time: "14:30", image: "/images/quran.jpg" },
    { title: "هكذا نحب", time: "14:30", image: "/images/documentary.jpeg" },
    { title: "عطاء", time: "14:30", image: "/images/safeer.png" },
    { title: "جمال حول الكعبة", time: "14:30", image: "/images/quran.jpg" },
    {
      title: "سبيل المؤمنين",
      time: "14:30",
      image: "/images/documentary.jpeg",
    },
  ];
  return (
    <>
      <div className="live-broadcast-container">
        <div className="main-content">
          {/* YouTube Video */}
          <YouTubeVideo
            videoUrl={"https://www.youtube.com/embed/U6FjuGhsvsQ"}
          />

          {/* Channels */}
          <div className="channels">
            <div className="section-title">
              <FaVideo color="red" size={30} />
              <span>البث المباشر</span>
            </div>
            {liveChannels.map((channel, idx) => (
              <ProgramTile
                key={idx}
                title={channel.name}
                img={channel.image}
                time={""}
              />
            ))}
          </div>
        </div>

        {/* Program Schedule */}
        <div className="program-schedule">
          <div className="schedule-title">
            منهاج البرامج ليوم / السبت / 2024/07/27
          </div>
          <div className="program-carousel-wrapper">
            <FaChevronRight className="nav-icon" />

            <div className="program-carousel">
              {programs.map((prog, idx) => (
                <ProgramCard key={idx} prog={prog} />
              ))}
            </div>

            <FaChevronLeft className="nav-icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LivePage;

export function YouTubeVideo({ videoUrl }) {
  return (
    <>
      <div className="video-container">
        <iframe
          src={videoUrl}
          title="Live broadcast"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

function ProgramCard({ prog }) {
  return (
    <>
      <div className="program-card">
        <img src={prog.image} alt={prog.title} />
        <div className="program-info">
          {/* <div className="program-title">{prog.title}</div> */}
          <div className="program-time">
            <span>{prog.time}</span>
            <CiTimer color="grey" />
          </div>
        </div>
      </div>
    </>
  );
}

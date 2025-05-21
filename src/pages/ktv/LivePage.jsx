import { ProgramTile } from "../../components/ktv/home/PopularSection";
import { FaVideo, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import ProgramsCurriculumPage from "./ProgramsCurriculumPage";
// import "swiper/css/navigation";

function LivePage() {
  const liveChannels = [
    { name: "قناة القرآن الكريم الفضائية", image: "/images/quran.jpg" },
    { name: "قناة الوثائقية الفضائية", image: "/images/documentary.jpeg" },
    { name: "قناة السفير الفضائية", image: "/images/safeer.png" },
  ];

  const programs = [
    {
      title: "عطاء الوالدين",
      time: "14:30",
      image: "/images/quran.jpg",
      active: true,
    },
    {
      title: "هكذا نحب",
      time: "14:30",
      image: "/images/documentary.jpeg",
      active: false,
    },
    {
      title: "عطاء",
      time: "14:30",
      image: "/images/safeer.png",
      active: false,
    },
    {
      title: "جمال حول الكعبة",
      time: "14:30",
      image: "/images/quran.jpg",
      active: false,
    },
    {
      title: "سبيل المؤمنين",
      time: "14:30",
      image: "/images/documentary.jpeg",
      active: false,
    },
    {
      title: "عطاء الوالدين",
      time: "14:30",
      image: "/images/quran.jpg",
      active: false,
    },
    {
      title: "هكذا نحب",
      time: "14:30",
      image: "/images/documentary.jpeg",
      active: false,
    },
    {
      title: "عطاء",
      time: "14:30",
      image: "/images/safeer.png",
      active: false,
    },
    {
      title: "جمال حول الكعبة",
      time: "14:30",
      image: "/images/quran.jpg",
      active: false,
    },
    {
      title: "سبيل المؤمنين",
      time: "14:30",
      image: "/images/documentary.jpeg",
      active: false,
    },
    {
      title: "عطاء الوالدين",
      time: "14:30",
      image: "/images/quran.jpg",
      active: false,
    },
    {
      title: "هكذا نحب",
      time: "14:30",
      image: "/images/documentary.jpeg",
      active: false,
    },
    {
      title: "عطاء",
      time: "14:30",
      image: "/images/safeer.png",
      active: false,
    },
    {
      title: "جمال حول الكعبة",
      time: "14:30",
      image: "/images/quran.jpg",
      active: false,
    },
    {
      title: "سبيل المؤمنين",
      time: "14:30",
      image: "/images/documentary.jpeg",
      active: false,
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

        {/* <div className="slider-container"> */}
        <div className="schedule-title">
          منهاج البرامج ليوم / السبت / 2024/07/27
        </div>

        <div className="slider-wrapper">
          {/* Custom buttons */}
          <div className="swiper-button-prev custom-prev">
            <FaChevronRight size={24} />
          </div>
          <div className="swiper-button-next custom-next">
            <FaChevronLeft size={24} />
          </div>

          {/* Swiper carousel */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              550: {
                slidesPerView: 4,
              },
              943: {
                slidesPerView: 4,
              },
              1140: {
                slidesPerView: 5,
              },
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {programs.map((prog, idx) => (
              <SwiperSlide key={idx}>
                <ProgramCard prog={prog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* </div> */}
      </div>

      <ProgramsCurriculumPage />
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
        <img
          src={prog.image}
          alt={prog.title}
          className={prog.active ? "active" : ""}
        />
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

// 1140 - 4 slides - 800px
// 943 - 3 slides - 600px
// 750 500px

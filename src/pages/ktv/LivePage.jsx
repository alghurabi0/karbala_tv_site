import React from "react";
import { ProgramTile } from "../../components/ktv/home/PopularSection";
import { FaVideo, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LivePage() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
  };

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
    { title: "عطاء الوالدين", time: "14:30", image: "/images/quran.jpg" },
    { title: "هكذا نحب", time: "14:30", image: "/images/documentary.jpeg" },
    { title: "عطاء", time: "14:30", image: "/images/safeer.png" },
    { title: "جمال حول الكعبة", time: "14:30", image: "/images/quran.jpg" },
    {
      title: "سبيل المؤمنين",
      time: "14:30",
      image: "/images/documentary.jpeg",
    },
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

        {/* <FaChevronRight className="nav-icon" onClick={scrollRight} />
            <FaChevronLeft className="nav-icon" onClick={scrollLeft} /> */}

        <div className="slider-container">
          <div className="schedule-title">
            منهاج البرامج ليوم / السبت / 2024/07/27
          </div>
          <Slider {...settings}>
            {programs.map((prog, idx) => (
              <ProgramCard key={idx} prog={prog} />
            ))}
          </Slider>
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        backgroundColor: "red",
        height: "100px",
        marginBottom: "20px",
        width: "40px",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <FaChevronRight color="black" size={30} />
    </div>
  );
}

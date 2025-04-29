import React from "react";
import { RiArrowLeftDoubleFill } from "react-icons/ri";

function NavVisualLibrary() {
  const categories = [
    { id: "1", title: "مدون" },
    { id: "2", title: "مراجع دينية" },
    { id: "3", title: "برامج ثقافية" },
    { id: "5", title: "تصاند والاشيد" },
    { id: "6", title: "السرية والطفل" },
    { id: "7", title: "الفائح لدين ألف" },
    { id: "8", title: "تقارير" },
    { id: "9", title: "وثائقيات" },
    { id: "10", title: "عزاء بغداد" },
  ];

  const videos = [
    {
      id: 1,
      title: "مدعون",
      date: "2024-05-23",
      view: 104,
      time: "00:45:32",
      img: "/images/karbala_city.jpg",
    },
    {
      id: 1,
      title: "مدعون",
      date: "2024-05-23",
      view: 104,
      time: "00:45:32",
      img: "/images/karbala_city.jpg",
    },
    {
      id: 1,
      title: "مدعون",
      date: "2024-05-23",
      view: 104,
      time: "00:45:32",
      img: "/images/karbala_city.jpg",
    },
  ];

  return (
    <>
      <div className="nav-visual-library">
        {/* اخترنا لكم */}
        <div className="nav-chosen-for-you">
          <Title title="اخترنا لكم" />
          <div className="nav-chosen-for-you-list">
            {videos.map((video) => (
              <ListTile
                key={video.id}
                title={video.time}
                date={video.date}
                time={video.time}
                views={video.views}
                img={video.img}
              />
            ))}
          </div>
        </div>
        {/* اقسام المكتبة المرئية */}
        <div className="nav-visual-library-categories">
          <Title title="اقسام المكتبة المرئية" />
          <div className="nav-visual-library-categories-list">
            {categories.map((category) => (
              <p className="nav-visual-library-category" key={category.id}>
                {category.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavVisualLibrary;

function Title({ title }) {
  return (
    <div className="nav-dropdown-title">
      <span className="nav-dropdown-text">{title}</span>
      <RiArrowLeftDoubleFill size={20} color="black" />
      <div className="nav-dropdown-line"></div>
    </div>
  );
}

const ListTile = ({ title, time, date, views, img }) => {
  return (
    <div className="nav-tile">
      <div className="nav-tile-content">
        <p className="nav-tile-title">{title}</p>
        <p className="nav-tile-time">
          <span>الوقت: </span>
          <span>{time}</span>
        </p>
      </div>
      <div className="nav-tile-metadata">
        <p className="nav-tile-date">{date}</p>
        <p className="nav-tile-views">
          <span>المشاهدات: </span>
          <span>{views}</span>
        </p>
      </div>
      <img className="nav-tile-img" src={img} />
    </div>
  );
};

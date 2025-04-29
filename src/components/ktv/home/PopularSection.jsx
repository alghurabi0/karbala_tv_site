import React from "react";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { CiTimer } from "react-icons/ci";

function PopularSection() {
  return (
    <>
      <div className="popular-container">
        {/* live section */}
        <PopularLive />

        <section className="popular-next-previous-programs">
          {/* next and previous sections */}
          <PopularNextPrevious />

          {/* programs section */}
          <PopularPrograms />
        </section>
      </div>
    </>
  );
}

export default PopularSection;

function PopularLive() {
  return (
    <>
      <section className="popular-live">
        <img
          className="popular-live-img"
          src="/images/karbala_city.jpg"
          alt="Karbala City"
          height={370}
        />
        <div className="popular-live-bottom-bar">
          <p className="popular-live-text">
            <span className="program">برنامج</span>
            <span> </span>
            <span className="title">وصايا المعصومين</span>
          </p>
          <button className="popular-live-button">تشاهدون الان</button>
        </div>
      </section>
    </>
  );
}

function PopularPrograms() {
  const programs = [
    {
      id: 1,
      title: "مفتاح الفلاح",
      time: "13:05",
      img: "/images/karbala_city.jpg",
    },
    {
      id: 2,
      title: "اللهم اني صائم",
      time: "13:05",
      img: "/images/karbala_city.jpg",
    },
    {
      id: 3,
      title: "بالدليل",
      time: "13:05",
      img: "/images/karbala_city.jpg",
    },
    {
      id: 4,
      title: "تجربة خادم",
      time: "13:05",
      img: "/images/karbala_city.jpg",
    },
  ];
  return (
    <>
      <section className="popular-programs">
        <button className="popular-programs-top-button">
          منهاج البرامج التالية
        </button>
        {programs.map((program) => (
          <PopularProgramTile
            key={program.id}
            time={program.time}
            title={program.title}
            img={program.img}
          />
        ))}
        <button className="popular-programs-bottom-button">
          <span>منهاج البرامج </span>
          <RiArrowLeftDoubleLine color="white" size={15} />
        </button>
      </section>
    </>
  );
}

function PopularProgramTile({ img, time, title }) {
  return (
    <>
      <div className="popular-program-tile">
        {/* image */}
        <img className="popular-program-tile-img" src={img} width={115} />
        <div className="popular-program-tile-metadata">
          <div className="popular-program-tile-program-time">
            {/* برنامج */}
            <p className="popular-program-tile-program">برنامج</p>
            {/* time with icon */}
            <div className="popular-program-tile-time-icon">
              {/* time */}
              <p className="popular-program-tile-time">{time}</p>
              {/* icon */}
              <CiTimer color="red" />
            </div>
          </div>
          <p className="popular-program-tile-title">{title}</p>
        </div>
      </div>
    </>
  );
}

function PopularNextPrevious() {
  return (
    <>
      <section className="popular-next-previous">
        {/* next section */}
        <div className="popular-next">
          <img className="popular-next-img" src="/images/karbala_city.jpg" />
          <div className="popular-next-bar">
            <p className="popular-next-text">
              <span className="next">التالي</span>
              <span> </span>
              <span className="title">من فيض كربلاء</span>
            </p>
            <div className="popular-next-time">
              <span>13:05</span>
              <CiTimer color="red" />
            </div>
          </div>
        </div>

        {/* previous section */}
        <div className="popular-previous">
          <img
            className="popular-previous-img"
            src="/images/karbala_city.jpg"
          />
          <div className="popular-previous-bar">
            <p className="popular-previous-text">
              <span className="previous">اللاحق</span>
              <span> </span>
              <span className="title">من فيض كربلاء</span>
            </p>
            <div className="popular-previous-time">
              <span>13:05</span>
              <CiTimer color="red" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

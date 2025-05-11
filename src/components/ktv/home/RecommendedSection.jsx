import React from "react";
import { KtvTitle } from "../../../pages/ktv/KtvHomaPage";
import { FaRegCalendarAlt } from "react-icons/fa";

function RecommendedSection() {
  const data = [
    {
      id: 1,
      image: "/images/karbala_city.jpg",
      title: "اشارات على سبيل نجاة",
      date: "2024/07/03",
    },
    {
      id: 2,
      image: "/images/karbala_city.jpg",
      title: "برنامج الله تقبل",
      date: "2024/07/03",
    },
    {
      id: 3,
      image: "/images/karbala_city.jpg",
      title: "برنامج بالدليل",
      date: "2024/07/03",
    },
    {
      id: 4,
      image: "/images/karbala_city.jpg",
      title: "برنامج السيرة الرضوية",
      date: "2024/07/03",
    },
    {
      id: 5,
      image: "/images/karbala_city.jpg",
      title: "عقائد الابرار",
      date: "2024/07/03",
    },
    {
      id: 6,
      image: "/images/karbala_city.jpg",
      title: "اصل واثر",
      date: "2024/07/03",
    },
    {
      id: 7,
      image: "/images/karbala_city.jpg",
      title: "سلوى القلوب",
      date: "2024/07/03",
    },
    {
      id: 8,
      image: "/images/karbala_city.jpg",
      title: "نساء لهن اثر",
      date: "2024/07/03",
    },
  ];
  return (
    <>
      <section className="recommended-section">
        <KtvTitle title={"اخترنا لكم"} />
        <div className="recommended-grid">
          {data.map((item) => (
            <RecommendedCard item={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export default RecommendedSection;

export function RecommendedCard({ item }) {
  return (
    <>
      <div className="recommended-card">
        <img src={item.image} alt="Recommended" />
        <div className="recommended-title">{item.title}</div>
        <div className="recommended-date">
          <span>{item.date}</span>
          <FaRegCalendarAlt size={15} className="calendar-icon" />
        </div>
      </div>
    </>
  );
}

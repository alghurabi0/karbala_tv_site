import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { KtvTitle } from "../../../pages/ktv/KtvHomaPage";

function NewsSection() {
  const newsData = {
    featured: {
      image: "/images/karbala_city.jpg",
      title: "مدينة كربلاء المقدسة تتوشح بالسواد استقبالاً لشهر المحرم الحرام",
      content: `أكمل أصحاب المواكب والمجالس الحسينية في كربلاء المقدسة استعداداتهم لاستقبال شهر المحرم الحرام وإحياء المناسك الحسينية، حيث بدأت المواكب بنصب سرادقات عزائها المعروفة باسم (النكبات)، إضافة إلى المواكب الخدمية والعزائية التي تحرص على إحياء عزاء سيد الشهداء (عليه السلام).`,
      date: "2024/07/03",
    },
    items: [
      {
        image: "/images/karbala_city.jpg",
        title:
          "لتعزيز التلاحم الديني والثقافي العتبة الحسينية المقدسة تستضيف وفداً من الموصل",
        date: "2024/07/03",
      },
      {
        image: "/images/karbala_city.jpg",
        title: "العتبة الحسينية تطلق الدورات الصيفية في محافظة الموصل",
        date: "2024/07/03",
      },
      {
        image: "/images/karbala_city.jpg",
        title:
          "مرشات الرذاذ تساعد على تقليل درجات الحرارة العالية بالمناطق المحيطة بالحرم",
        date: "2024/07/03",
      },
    ],
  };
  return (
    <>
      <section className="news-section">
        {/* title */}
        <KtvTitle title="الاخبار" />

        {/* Featured */}
        <div className="news-featured">
          <div className="news-featured-text">
            <h2>{newsData.featured.title}</h2>
            <p>{newsData.featured.content}</p>
            <div className="news-footer">
              <button>المزيد</button>
              <div>
                <span>{newsData.featured.date}</span>
                <FaRegCalendarAlt size={15} color="red" />
              </div>
            </div>
            <div className="news-footer-line" />
          </div>
          <img src={newsData.featured.image} alt="Featured News" />
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {newsData.items.map((item, idx) => (
            <div className="news-card" key={idx}>
              <img src={item.image} alt={`News ${idx}`} />
              <div className="news-title">{item.title}</div>
              <div className="news-date">
                <div className="news-card-line" />
                <span>{newsData.featured.date}</span>
                <FaRegCalendarAlt size={15} color="red" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewsSection;

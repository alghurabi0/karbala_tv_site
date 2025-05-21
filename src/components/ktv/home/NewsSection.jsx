import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { KtvTitle } from "../../../pages/ktv/KtvHomaPage";

function NewsSection({ isHome = false, isInsidePost = false }) {
  const newsData = {
    featured: {
      images: [
        "/images/karbala_city.jpg",
        "/images/documentary.jpeg",
        "/images/quran.jpg",
      ],
      title: "مدينة كربلاء المقدسة تتوشح بالسواد استقبالاً لشهر المحرم الحرام",
      content: `أكمل أصحاب المواكب والمجالس الحسينية في كربلاء المقدسة استعداداتهم لاستقبال شهر المحرم الحرام وإحياء المناسك الحسينية، حيث بدأت المواكب بنصبمية لمعروفة باسم (النكبات)، إضافة إلى اات)،ياء عزاء سيد والعزداء (عليه السلام).`,
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

  const [activeImage, setActiveImage] = useState(newsData.featured.images[0]);

  return (
    <>
      <section className="news-section">
        {/* title */}
        <KtvTitle title="الاخبار" />

        {/* Featured */}
        <div className="news-featured">
          <div className="news-featured-text">
            <div>
              <h2>{newsData.featured.title}</h2>
              <p>{newsData.featured.content}</p>
            </div>
            <div>
              <div className="news-footer">
                {isHome ? <button>المزيد</button> : ""}
                <div>
                  <span>{newsData.featured.date}</span>
                  <FaRegCalendarAlt size={15} color="red" />
                </div>
              </div>
              <div className="news-footer-line" />
            </div>
          </div>
          {isHome ? (
            <img src={activeImage} alt="Featured News" className="main-image" />
          ) : (
            <div className="news-gallery">
              <img src={activeImage} alt="Main" className="main-image" />
              <div className="thumbnail-row">
                {newsData.featured.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumb ${idx}`}
                    className={`thumbnail ${
                      img === activeImage ? "active-thumb" : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* News Grid */}
        <div className="news-grid">
          {isHome || isInsidePost
            ? newsData.items.slice(0, 3).map((item, idx) => (
                <Link to={`/news/${idx}`} className="news-card" key={idx}>
                  <img src={item.image} alt={`News ${idx}`} />
                  <div className="news-title">{item.title}</div>
                  <div className="news-date">
                    <div className="news-card-line" />
                    <span>{newsData.featured.date}</span>
                    <FaRegCalendarAlt size={15} color="red" />
                  </div>
                </Link>
              ))
            : newsData.items.map((item, idx) => (
                <Link to={`/news/${idx}`} className="news-card" key={idx}>
                  <img src={item.image} alt={`News ${idx}`} />
                  <div className="news-title">{item.title}</div>
                  <div className="news-date">
                    <div className="news-card-line" />
                    <span>{newsData.featured.date}</span>
                    <FaRegCalendarAlt size={15} color="red" />
                  </div>
                </Link>
              ))}
        </div>

        {/* Pagination Row */}
        {isInsidePost || isHome ? (
          ""
        ) : (
          <Pagination
            totalPages={10}
            onPageChange={(page) => console.log("Go to page", page)}
          />
        )}
      </section>
    </>
  );
}

export default NewsSection;

import {
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Pagination = ({ totalPages = 10, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = (page) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  const goToFirst = () => handleClick(totalPages);
  const goToLast = () => handleClick(1);
  const goNext = () => currentPage >= 1 && handleClick(currentPage + 1);
  const goPrev = () =>
    currentPage <= totalPages && handleClick(currentPage - 1);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-container">
      <button className="pagination-action" onClick={goToLast}>
        <FaAngleDoubleRight color="red" />
      </button>
      <button className="pagination-action" onClick={goPrev}>
        <FaAngleRight color="red" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? "active" : ""}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}

      <button className="pagination-action" onClick={goNext}>
        <FaAngleLeft color="red" />
      </button>
      <button className="pagination-action" onClick={goToFirst}>
        <FaAngleDoubleLeft color="red" />
      </button>
    </div>
  );
};

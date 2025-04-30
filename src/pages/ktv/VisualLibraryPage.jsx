import React from "react";
import { KtvTitle, KtvTitleReverse } from "./KtvHomaPage";
import { RecommendedCard } from "../../components/ktv/home/RecommendedSection";
import { Pagination } from "../../components/ktv/home/NewsSection";

function VisualLibraryPage() {
  return (
    <>
      <div className="visual-library-page">
        {/* Reverse Title */}
        <KtvTitleReverse title={"المكتبة المرئية"} />

        {/* Categories */}
        <VisualLibraryCategories />

        {/* Recommended For You (اخترنا لكم) Section */}
        <RecommendedForYouSection />

        {/* Pagination row */}
        <Pagination />
      </div>
    </>
  );
}

export default VisualLibraryPage;

function VisualLibraryCategories() {
  const categories = [
    "القرءان الكريم",
    "ادعية وزيارات",
    "دروس ومحاضرات",
    "برامج دينية",
    "برامج حسينية",
    "برامج ثقافية",
    "افلام ومسلسلات",
    "قائد واناشيد",
    "تقارير",
    "الاسرة والطفر",
  ];

  return (
    <>
      <section className="visual-library-categories">
        {categories.map((category) => (
          <div className="visual-library-category">{category}</div>
        ))}
      </section>
    </>
  );
}

function RecommendedForYouSection() {
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
    {
      id: 9,
      image: "/images/karbala_city.jpg",
      title: "اشارات على سبيل نجاة",
      date: "2024/07/03",
    },
    {
      id: 10,
      image: "/images/karbala_city.jpg",
      title: "برنامج الله تقبل",
      date: "2024/07/03",
    },
    {
      id: 11,
      image: "/images/karbala_city.jpg",
      title: "برنامج بالدليل",
      date: "2024/07/03",
    },
    {
      id: 12,
      image: "/images/karbala_city.jpg",
      title: "برنامج السيرة الرضوية",
      date: "2024/07/03",
    },
    {
      id: 13,
      image: "/images/karbala_city.jpg",
      title: "عقائد الابرار",
      date: "2024/07/03",
    },
    {
      id: 14,
      image: "/images/karbala_city.jpg",
      title: "اصل واثر",
      date: "2024/07/03",
    },
    {
      id: 15,
      image: "/images/karbala_city.jpg",
      title: "سلوى القلوب",
      date: "2024/07/03",
    },
    {
      id: 16,
      image: "/images/karbala_city.jpg",
      title: "نساء لهن اثر",
      date: "2024/07/03",
    },
    {
      id: 17,
      image: "/images/karbala_city.jpg",
      title: "اشارات على سبيل نجاة",
      date: "2024/07/03",
    },
    {
      id: 18,
      image: "/images/karbala_city.jpg",
      title: "برنامج الله تقبل",
      date: "2024/07/03",
    },
    {
      id: 19,
      image: "/images/karbala_city.jpg",
      title: "برنامج بالدليل",
      date: "2024/07/03",
    },
    {
      id: 20,
      image: "/images/karbala_city.jpg",
      title: "برنامج السيرة الرضوية",
      date: "2024/07/03",
    },
    {
      id: 21,
      image: "/images/karbala_city.jpg",
      title: "عقائد الابرار",
      date: "2024/07/03",
    },
    {
      id: 22,
      image: "/images/karbala_city.jpg",
      title: "اصل واثر",
      date: "2024/07/03",
    },
    {
      id: 23,
      image: "/images/karbala_city.jpg",
      title: "سلوى القلوب",
      date: "2024/07/03",
    },
    {
      id: 24,
      image: "/images/karbala_city.jpg",
      title: "نساء لهن اثر",
      date: "2024/07/03",
    },
  ];
  return (
    <>
      <section className="chosen-for-you">
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

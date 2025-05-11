import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { KtvTitle, KtvTitleReverse } from "./KtvHomaPage";
import { RecommendedCard } from "../../components/ktv/home/RecommendedSection";
import { Pagination } from "../../components/ktv/home/NewsSection";
import { YouTubeVideo } from "./LivePage";
import { FaRegCirclePlay } from "react-icons/fa6";

function VisualLibraryPage({
  isInsideCategory = false,
  isInsideProgram = false,
  isInsideEpidose = false,
}) {
  const { category } = useParams();

  return (
    <>
      <div className="visual-library-page">
        {/* Reverse Title */}
        <KtvTitleReverse title={"المكتبة المرئية"} />

        {/* Categories */}
        <VisualLibraryCategories category={category} />

        {/* program description section if inside a program */}
        {isInsideProgram ? <ProgramDescription /> : ""}

        {/* Category Description if inside a Category */}
        {isInsideCategory ? <CategoryDescription /> : ""}

        {/* Episode Video and Description if inside an Episode */}
        {isInsideEpidose ? <EpisodeData /> : ""}

        {/* Recommended For You (اخترنا لكم) Section */}
        <RecommendedForYouSection
          isInsideProgram={isInsideProgram}
          isInsideEpidose={isInsideEpidose}
        />

        {/* Pagination row */}
        <Pagination />
      </div>
    </>
  );
}

export default VisualLibraryPage;

function VisualLibraryCategories({ category = "" }) {
  const [selectedCategory, setSelectedCategory] = useState(category);
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
          <Link
            to={`/visual-library/${category}`}
            key={category}
            className={`visual-library-category ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Link>
        ))}
      </section>
    </>
  );
}

function RecommendedForYouSection({
  isInsideProgram = false,
  isInsideEpidose = false,
}) {
  const data = [
    {
      id: 1,
      image: "/images/karbala_city.jpg",
      title: "اشارات على سبيل نجاة",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 2,
      image: "/images/karbala_city.jpg",
      title: "برنامج الله تقبل",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 3,
      image: "/images/karbala_city.jpg",
      title: "برنامج بالدليل",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 4,
      image: "/images/karbala_city.jpg",
      title: "برنامج السيرة الرضوية",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 5,
      image: "/images/karbala_city.jpg",
      title: "عقائد الابرار",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 6,
      image: "/images/karbala_city.jpg",
      title: "اصل واثر",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 7,
      image: "/images/karbala_city.jpg",
      title: "سلوى القلوب",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 8,
      image: "/images/karbala_city.jpg",
      title: "نساء لهن اثر",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 9,
      image: "/images/karbala_city.jpg",
      title: "اشارات على سبيل نجاة",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 10,
      image: "/images/karbala_city.jpg",
      title: "برنامج الله تقبل",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 11,
      image: "/images/karbala_city.jpg",
      title: "برنامج بالدليل",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 12,
      image: "/images/karbala_city.jpg",
      title: "برنامج السيرة الرضوية",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 13,
      image: "/images/karbala_city.jpg",
      title: "عقائد الابرار",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 14,
      image: "/images/karbala_city.jpg",
      title: "اصل واثر",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 15,
      image: "/images/karbala_city.jpg",
      title: "سلوى القلوب",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 16,
      image: "/images/karbala_city.jpg",
      title: "نساء لهن اثر",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 17,
      image: "/images/karbala_city.jpg",
      title: "اشارات على سبيل نجاة",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 18,
      image: "/images/karbala_city.jpg",
      title: "برنامج الله تقبل",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 19,
      image: "/images/karbala_city.jpg",
      title: "برنامج بالدليل",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 20,
      image: "/images/karbala_city.jpg",
      title: "برنامج السيرة الرضوية",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 21,
      image: "/images/karbala_city.jpg",
      title: "عقائد الابرار",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 22,
      image: "/images/karbala_city.jpg",
      title: "اصل واثر",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
    {
      id: 23,
      image: "/images/karbala_city.jpg",
      title: "سلوى القلوب",
      date: "2024/07/03",
      category: "القرءان الكريم",
    },
    {
      id: 24,
      image: "/images/karbala_city.jpg",
      title: "نساء لهن اثر",
      date: "2024/07/03",
      category: "ادعية وزيارات",
    },
  ];
  if (isInsideProgram === true) {
    console.log("inside a program");
  }
  return (
    <>
      <section className="chosen-for-you">
        <KtvTitle
          title={
            isInsideProgram
              ? "مقاطع هذا القسم"
              : isInsideEpidose
              ? "المزيد من المرئيات"
              : "اخترنا لكم"
          }
        />
        <div className="recommended-grid">
          {isInsideProgram || isInsideEpidose
            ? data.map((item) => (
                <Link
                  className="program-link"
                  to={`/visual-library/${item.category}/${item.title}/${item.id}`}
                >
                  <EpisodeCard key={item.id} />
                </Link>
              ))
            : data.map((item) => (
                <Link
                  className="program-link"
                  to={`/visual-library/${item.category}/${item.title}`}
                >
                  <RecommendedCard item={item} key={item.id} />
                </Link>
              ))}
        </div>
      </section>
    </>
  );
}

function CategoryDescription() {
  return (
    <>
      <section className="category-description">
        <div className="category-description-text">
          ختمات للقرآن الكريم لعدد من القراء ومجموعة من البرامج المختصة بتلاوته
          وتفسيره
        </div>
      </section>
    </>
  );
}

function ProgramDescription() {
  return (
    <>
      <section className="program-description">
        <img
          src="/images/karbala_city.jpg"
          className="program-description-img"
        />
        <div className="program-description-content">
          <section className="program-description-title">
            لو اختلف الموقف
          </section>
          <section className="program-description-text">
            لو اختلف الموقف برنامج حواري حسيني يتحدث عن مواقف واحداث حصلت مع
            معركة الطف ولو اختلفت تلك المواقف فماذا سيحدث عندها الجواب سيكون في
            تفاصيل حلقات هذا البرنامج
          </section>
        </div>
      </section>
    </>
  );
}

function EpisodeCard() {
  return (
    <>
      <div className="episode-card">
        <div className="episode-img-container">
          <img className="episode-img" src="/images/karbala_city.jpg" />
          <FaRegCirclePlay
            className="episode-img-icon"
            size={60}
            color="white"
          />
        </div>
        <section className="episode-description">
          يوم 29-8-2024 - ما هو سر عداء البيت الاموي العنهم الله للبيت العلوي
          عليهم السلام
        </section>
        <section className="episode-views">
          <span>الزيارات: 4054</span>
        </section>
      </div>
    </>
  );
}

function EpisodeData() {
  return (
    <>
      <div className="episode">
        <section className="episode-metadata">
          <div className="episode-title">
            العنوان : حلقة بتاريخ 13-8-2024 - ماهو موقف شيخ الانصار حبيب بن
            مظاهر الاسدي رضوان الله عليه ج 2
          </div>
          <div className="episode-description2">
            لو اختلف الموقف برنامج حواري بعنوان ماهو موقف شيخ الانصار حبيب بن
            مظاهر الاسدي رضوان الله عليه مع الامام الحسين عليه السلام حتى دخل من
            باب الشهادة الحمراء مع ضيف الحلقة فضيلة السيد محمد الموسوي الباحث في
            التاريخ الإسلامي
          </div>
          <div className="episode-extradata">
            <div className="episode-views2">
              <span>المشاهدات</span>
              <p>1024</p>
            </div>
            <div className="episode-time">
              <span>الوقت</span>
              <p>00:43:44</p>
            </div>
            <div className="episode-date">
              <span>تاريخ الأضافة</span>
              <p>2024/08/24</p>
            </div>
          </div>
        </section>
        <YouTubeVideo videoUrl={"https://www.youtube.com/embed/U6FjuGhsvsQ"} />
      </div>
    </>
  );
}

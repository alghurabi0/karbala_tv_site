import React from "react";
import PopularSection from "../../components/ktv/home/PopularSection";
import SatelliteInfoSection, {
  SatelliteHomepage,
} from "../../components/homepage/SatelliteInfoSection";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri";
import NewsSection from "../../components/ktv/home/NewsSection";
import RecommendedSection from "../../components/ktv/home/RecommendedSection";
import MessagesSection from "../../components/ktv/home/MessagesSection";

function KtvHomaPage() {
  return (
    <>
      <div className="outlet-container">
        {/* Popular Section */}
        <PopularSection />
        {/* Satellite Info Section */}
        {/* <SatelliteInfoSection /> */}
        <SatelliteHomepage />
        {/* News Section */}
        <NewsSection isHome={true} />
      </div>
      {/* Recommended Section */}
      <RecommendedSection />
      <div className="outlet-container">
        {/* Messages Section */}
        <MessagesSection />
      </div>
    </>
  );
}

export default KtvHomaPage;

export function KtvTitle({ title }) {
  return (
    <>
      <div className="ktv-title">
        <span className="ktv-title-text">{title}</span>
        <RiArrowLeftDoubleFill size={20} color="red" />
        <div className="ktv-title-line-black" />
        <div className="ktv-title-line-red" />
      </div>
    </>
  );
}

export function KtvTitleReverse({ title }) {
  return (
    <>
      <div className="ktv-title-reverse">
        <span className="ktv-title-reverse-text">{title}</span>
        <RiArrowRightDoubleFill size={30} color="black" />
        <div className="ktv-title-reverse-line-red" />
        <div className="ktv-title-reverse-line-black" />
      </div>
    </>
  );
}

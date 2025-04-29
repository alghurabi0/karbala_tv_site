import React from "react";
import PopularSection from "../../components/ktv/home/PopularSection";
import SatelliteInfoSection from "../../components/homepage/SatelliteInfoSection";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import NewsSection from "../../components/ktv/home/NewsSection";
import RecommendedSection from "../../components/ktv/home/RecommendedSection";
import MessagesSection from "../../components/ktv/home/MessagesSection";

function KtvHomaPage() {
  return (
    <>
      {/* Popular Section */}
      <PopularSection />
      {/* Satellite Info Section */}
      <SatelliteInfoSection />
      {/* News Section */}
      <NewsSection />
      {/* Recommended Section */}
      <RecommendedSection />
      {/* Messages Section */}
      <MessagesSection />
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

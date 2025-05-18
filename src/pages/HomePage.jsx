import React from "react";
import Header from "../components/homepage/Header";
import ChannelCards from "../components/homepage/ChannelCards";
import SatelliteInfoSection, {
  SatelliteHomepage,
} from "../components/homepage/SatelliteInfoSection";
import PrayerTimes from "../components/homepage/PrayerTimes";
import Footer from "../components/homepage/Footer";
import { SatelliteAboutUs } from "./ktv/AboutUsPage";

export default function HomePage() {
  return (
    <>
      <div className="container">
        {/* Header with Arabic calligraphy */}
        <Header />

        {/* Channel Cards */}
        <ChannelCards />

        {/* Red Divider */}
        <div className="divider"></div>

        {/* Satellite Info Section */}
        <div className="sat-section-home-container rtl">
          <SatelliteHomepage ktv={false} />
        </div>

        {/* Prayer Times Section */}
        <PrayerTimes />
        {/* Footer */}
        <div dir="rtl">
          <Footer />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Header from "../components/homepage/Header";
import ChannelCards from "../components/homepage/ChannelCards";
import SatelliteInfoSection from "../components/homepage/SatelliteInfoSection";
import PrayerTimes from "../components/homepage/PrayerTimes";
import Footer from "../components/homepage/Footer";

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
        <SatelliteInfoSection />

        {/* Prayer Times Section */}
        <PrayerTimes />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

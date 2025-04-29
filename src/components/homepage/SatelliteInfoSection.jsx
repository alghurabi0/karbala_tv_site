import React from "react";

function SatelliteInfoSection({ isNavDropdown = false }) {
  return (
    <>
      <div
        className="satellite-section rtl"
        style={isNavDropdown ? { width: "100%" } : {}}
      >
        <div className="satellite-info-dish">
          {/* Satellite Info */}
          <SatelliteInfo />

          {/* Satellite Dish */}
          <SatelliteDish />
        </div>

        {/* Channel Logos */}
        {isNavDropdown ? (
          ""
        ) : (
          <div className="channel-logos">
            <ChannelLogo logo={"/images/safeer-seq.png"} title={"Safeer"} />
            <ChannelLogo
              logo={"/images/documentary-seq.png"}
              title={"Documentary"}
              extraClass={"documentary-logo"}
            />
            <ChannelLogo logo={"/images/quran-seq.png"} title={"Quran"} />
            <ChannelLogo logo={"/images/karbala-seq.png"} title={"Karbala"} />
          </div>
        )}
      </div>
    </>
  );
}

export default SatelliteInfoSection;

function SatelliteDish() {
  return (
    <>
      <div className="satellite-dish">
        <img
          src="/images/satellite_dish.svg"
          alt="Satellite Dish"
          width={250}
          height={250}
          className="dish-image"
        />
      </div>
    </>
  );
}

function SatelliteInfo() {
  return (
    <>
      <div className="satellite-info rtl">
        <h3 className="info-title">تردد المجموعة</h3>
        <div className="info-details">
          <p>HD - نايل سات</p>
          <p>التـــــــردد - 11258</p>
          <p>الاستقطاب - Horizontal</p>
          <p>التـرمـيــــز - 27,500 Msymb/s</p>
        </div>
      </div>
    </>
  );
}

function ChannelLogo({ logo, title, extraClass = "" }) {
  return (
    <>
      <img src={logo} alt={title} className={`channel-logo ${extraClass}`} />
    </>
  );
}

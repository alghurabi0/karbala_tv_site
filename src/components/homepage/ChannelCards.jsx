import React from "react";

function ChannelCards() {
  return (
    <>
      <div className="ch-back">
        <div className="channel-cards">
          <ChannelCard
            main_image={"/images/safeer.png"}
            overlay_image={"/images/safeer-seq.png"}
          />
          <ChannelCard
            main_image={"/images/documentary.jpeg"}
            overlay_image={"/images/documentary-seq.png"}
          />
          <ChannelCard
            main_image={"/images/quran.jpg"}
            overlay_image={"/images/quran-seq.png"}
          />
          <ChannelCard
            main_image={"/images/karbala_city.jpg"}
            overlay_image={"/images/karbala-seq.png"}
          />
        </div>
      </div>
    </>
  );
}

export default ChannelCards;

const ChannelCard = ({ main_image, overlay_image }) => {
  return (
    <div className="channel-card">
      <img
        src={main_image} // replace with your real image
        alt="Main"
        className="channel-card-main-image"
      />
      <img
        src={overlay_image} // replace with your real text image
        alt="Overlay"
        className="channel-card-overlay-image"
      />
    </div>
  );
};

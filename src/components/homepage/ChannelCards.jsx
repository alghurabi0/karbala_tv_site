import React from "react";
import { Link } from "react-router-dom";

function ChannelCards() {
  return (
    <>
      <div className="ch-back">
        <div className="channel-cards">
          <Link to={"/home"}>
            <ChannelCard
              main_image={"/images/karbala_city.jpg"}
              overlay_image={"/images/karbala-seq.png"}
            />
          </Link>
          <Link to={"https://www.karbala-tv.iq/quran/"}>
            <ChannelCard
              main_image={"/images/quran.jpg"}
              overlay_image={"/images/quran-seq.png"}
            />
          </Link>
          <Link to={"https://www.karbala-tv.iq/documentary/"}>
            <ChannelCard
              main_image={"/images/documentary.jpg"}
              overlay_image={"/images/documentary-seq.png"}
            />
          </Link>
          <Link to={"https://safeertv.com/"}>
            <ChannelCard
              main_image={"/images/safeer.jpg"}
              overlay_image={"/images/safeer-seq.png"}
            />
          </Link>
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

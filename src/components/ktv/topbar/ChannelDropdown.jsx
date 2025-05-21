import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const channels = [
  {
    name: "قناة القرآن الكريم الفضائية",
    image: "/images/quran-seq.png",
    url: "https://www.karbala-tv.iq/quran/",
  },
  {
    name: "قناة الوثائقية الفضائية",
    image: "/images/documentary-seq.png",
    url: "https://www.karbala-tv.iq/documentary/",
  },
  {
    name: "قناة السفير الفضائية",
    image: "/images/safeer-seq.png",
    url: "https://safeertv.com/",
  },
];

export default function ChannelDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span>موافعنا</span>
        <FaChevronDown
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
          size={10}
        />
      </div>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {channels.map((channel, index) => (
          <a
            href={channel.url}
            target="_blank"
            key={channel.name}
            className={`dropdown-item ${
              index !== channels.length - 1 ? "with-border" : ""
            }`}
          >
            <img
              src={channel.image}
              alt={channel.name}
              className="dropdown-image"
            />
            <span className="dropdown-text">{channel.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

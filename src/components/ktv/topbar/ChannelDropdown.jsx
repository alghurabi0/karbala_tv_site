import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const channels = [
  { name: "قناة القرآن الكريم الفضائية", image: "/images/quran-seq.png" },
  { name: "قناة الوثائقية الفضائية", image: "/images/documentary-seq.png" },
  { name: "قناة السفير الفضائية", image: "/images/safeer-seq.png" },
];

export default function ChannelDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("مواقعنا");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (channel) => {
    setSelected(channel.name);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span>{selected}</span>
        <FaChevronDown
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
          size={10}
        />
      </div>

      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {channels.map((channel, index) => (
          <div
            key={channel.name}
            className={`dropdown-item ${
              index !== channels.length - 1 ? "with-border" : ""
            }`}
            onClick={() => handleSelect(channel)}
          >
            <img
              src={channel.image}
              alt={channel.name}
              className="dropdown-image"
            />
            <span className="dropdown-text">{channel.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

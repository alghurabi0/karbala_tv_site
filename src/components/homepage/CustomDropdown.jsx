import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const cities = [
  "بغداد",
  "النجف الأشرف",
  "كربلاء المقدسة",
  "البصرة",
  "الناصرية",
  "العمارة",
  "الكوت",
  "بابل",
  "بعقوبة",
  "الموصل",
];

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("كربلاء المقدسة");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectCity = (city) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "130px",
        fontFamily: "Tajawal",
        direction: "rtl",
      }}
    >
      {/* Closed Dropdown */}
      <div
        className="cities-select"
        onClick={toggleDropdown}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          color: "#555",
          borderRadius: "10px",
          padding: "2px 4px",
        }}
      >
        <span>{selectedCity}</span>
        <FaChevronDown
          style={{
            color: "red",
            marginRight: "16px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "all 0.3s",
          }}
          size={10}
        />
      </div>

      {/* Dropdown Menu */}
      <div
        style={{
          position: "absolute",
          top: "100%",
          right: 0,
          backgroundColor: "#f5f5f5",
          borderRadius: "10px",
          marginTop: "8px",
          padding: "8px 0",
          boxShadow: "4px 2px 6px rgba(0,0,0,0.1)",
          transition: "opacity 0.4s ease",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          zIndex: 1000,
        }}
      >
        {cities.map((city) => (
          <div
            key={city}
            onClick={() => selectCity(city)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              whiteSpace: "nowrap",
              color: "#333",
              lineHeight: "0.4",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#eee")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
}

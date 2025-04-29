import React from "react";
import { FaSatelliteDish } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useState, useRef } from "react";
import NavVisualLibrary from "./NavVisualLibrary";
import SatelliteInfoSection from "../../homepage/SatelliteInfoSection";
import NavAboutUs from "./NavAboutUs";

function NavBar() {
  const [isLiveHovered, setIsLiverHoveres] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [content, setContent] = useState("");
  const timeoutRef = useRef(null);

  const handleHovering = (hoverState, category) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (hoverState) {
      setIsHovered(true);
      switch (category) {
        case "library":
          setContent(<NavVisualLibrary />);
          break;
        case "frequency":
          setContent(<SatelliteInfoSection isNavDropdown={true} />);
          break;
        case "about-us":
          setContent(<NavAboutUs />);
          break;
        default:
          setContent("");
      }
    } else {
      // Delay closing
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
        setContent("");
      }, 300); // 300ms delay
    }
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovered(true); // Keep it open
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setContent("");
    }, 300);
  };

  return (
    <>
      <nav className="top-navbar">
        <div className="logo">
          <img src="/images/karbala-seq.png" alt="Karbala Logo" />
        </div>
        <button
          className="live-button"
          onMouseEnter={() => setIsLiverHoveres(true)}
          onMouseLeave={() => setIsLiverHoveres(false)}
        >
          <span> البث المباشر</span>
          <FaSatelliteDish
            className="satellite-icon"
            color={isLiveHovered ? "white" : "black"}
          />
        </button>
        <a href="#" className="nav-item">
          <span>الرئيسية</span>
        </a>
        <a href="#" className="nav-item">
          <span> الأخبار</span>
        </a>
        <a
          href="#"
          className="nav-item nav-item-with-dropdown"
          onMouseEnter={() => handleHovering(true, "library")}
          onMouseLeave={() => handleHovering(false)}
        >
          <span> المكتبة المرئية</span>
          <MdArrowDropDown className="arrow-icon" color="black" size={20} />
        </a>
        <a href="#" className="nav-item">
          <span> الصور</span>
        </a>
        <a
          href="#"
          className="nav-item nav-item-with-dropdown"
          onMouseEnter={() => handleHovering(true, "frequency")}
          onMouseLeave={() => handleHovering(false)}
        >
          <span> الترددات</span>
          <MdArrowDropDown className="arrow-icon" color="black" size={20} />
        </a>
        <a href="#" className="nav-item">
          <span> لبيك يا حسين</span>
        </a>
        <a
          href="#"
          className="nav-item nav-item-with-dropdown"
          onMouseEnter={() => handleHovering(true, "about-us")}
          onMouseLeave={() => handleHovering(false)}
        >
          <span> من نحن</span>
          <MdArrowDropDown className="arrow-icon" color="black" size={20} />
        </a>

        {/* Dropdown content */}
        <div
          className={`nav-dropdown ${isHovered ? "open" : ""}`}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          {content}
        </div>
      </nav>
    </>
  );
}

export default NavBar;

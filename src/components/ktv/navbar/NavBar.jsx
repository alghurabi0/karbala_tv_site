import React from "react";
import { FaSatelliteDish } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useState, useRef } from "react";
import NavVisualLibrary from "./NavVisualLibrary";
import SatelliteInfoSection from "../../homepage/SatelliteInfoSection";
import NavAboutUs from "./NavAboutUs";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  // const [isLiveHovered, setIsLiverHoveres] = useState(false);
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
          // setContent(<SatelliteInfoSection isNavDropdown={true} />);
          setContent(<SatelliteNav />);
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

        {/* Hamburger icon for mobile */}
        <div
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {/* Main links */}
          <Link to={"/live"} className="live-button">
            <span> البث المباشر</span>
            <FaSatelliteDish className="satellite-icon" />
          </Link>
          <Link to={"/home"} className="nav-item">
            الرئيسية
          </Link>
          <Link to={"/news"} className="nav-item">
            {" "}
            الأخبار
          </Link>

          {/* Visual Library w/ submenu for mobile */}
          <div className="nav-item nav-item-with-dropdown mobile-dropdown">
            <div onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}>
              المكتبة المرئية <MdArrowDropDown />
            </div>
            {isMobileSubmenuOpen && (
              <div className="mobile-submenu">
                {[
                  "مدون",
                  "مراجع دينية",
                  "برامج ثقافية",
                  "تصاند والاشيد",
                  "السرية والطفل",
                  "الفائح لدين ألف",
                  "تقارير",
                  "وثائقيات",
                  "عزاء بغداد",
                ].map((title, idx) => (
                  <p key={idx} className="nav-visual-library-category">
                    {title}
                  </p>
                ))}
              </div>
            )}
          </div>
          <Link
            to={"/visual-library"}
            className="nav-item nav-item-with-dropdown desktop-dropdown"
            onMouseEnter={() => handleHovering(true, "library")}
            onMouseLeave={() => handleHovering(false)}
          >
            <span> المكتبة المرئية</span>
            <MdArrowDropDown className="arrow-icon" size={20} />
          </Link>

          <Link to={"/gallery"} className="nav-item">
            {" "}
            الصور
          </Link>
          <Link
            to={"/about-us"}
            className="nav-item nav-item-with-dropdown desktop-dropdown"
            onMouseEnter={() => handleHovering(true, "frequency")}
            onMouseLeave={() => handleHovering(false)}
          >
            <span> الترددات</span>
            <MdArrowDropDown className="arrow-icon" color="black" size={20} />
          </Link>
          <Link
            to={"/about-us"}
            className="nav-item nav-item-with-dropdown mobile-dropdown"
          >
            <span> الترددات</span>
          </Link>
          <a href="#" className="nav-item">
            {" "}
            لبيك يا حسين
          </a>

          <Link
            to={"/about-us"}
            href="#"
            className="nav-item nav-item-with-dropdown desktop-dropdown"
            onMouseEnter={() => handleHovering(true, "about-us")}
            onMouseLeave={() => handleHovering(false)}
          >
            <span> من نحن</span>
            <MdArrowDropDown className="arrow-icon" color="black" size={20} />
          </Link>
          <Link
            to={"/about-us"}
            href="#"
            className="nav-item nav-item-with-dropdown mobile-dropdown"
          >
            <span> من نحن</span>
          </Link>
        </div>

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

export function SatelliteNav() {
  return (
    <div className="sat-section sat-section--compact">
      <img
        className="sat-dish"
        src="/images/satellite_dish.svg"
        alt="Dish"
        style={{ top: "-40px", left: "20px", width: "140px" }}
      />
      <div className="sat-info">
        <div className="sat-title">تردد المجموعة</div>
        <div className="sat-detail">HD - نايل سات</div>
        <div className="sat-detail">11258 - التردد</div>
        <div className="sat-detail">Horizontal - الاستقطاب</div>
        <div className="sat-detail">27,500 Msymb/s - الترميز</div>
        <div className="sat-line"></div>
      </div>
    </div>
  );
}

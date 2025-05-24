import React from "react";
import { FaSatelliteDish } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useState, useRef } from "react";
import NavVisualLibrary from "./NavVisualLibrary";
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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSubmenuOpen(false); // Optional: also close the submenu
  };

  return (
    <>
      <nav className="top-navbar">
        <Link to={"/home"} className="logo">
          <img src="/images/karbala-seq.png" alt="Karbala Logo" />
        </Link>

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
          <Link to={"/live"} className="live-button" onClick={handleLinkClick}>
            <span> البث المباشر</span>
            <FaSatelliteDish className="satellite-icon" />
          </Link>
          <Link to={"/home"} className="nav-item" onClick={handleLinkClick}>
            الرئيسية
          </Link>
          <Link to={"/news"} className="nav-item" onClick={handleLinkClick}>
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
                  <Link
                    to={`/visual-library/${title}`}
                    key={idx}
                    className="nav-visual-library-category link-reset"
                    onClick={handleLinkClick}
                  >
                    {title}
                  </Link>
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

          <Link to={"/gallery"} className="nav-item" onClick={handleLinkClick}>
            {" "}
            الصور
          </Link>
          <Link
            to={"/about-us"}
            className="nav-item nav-item-with-dropdown desktop-dropdown"
            onMouseEnter={() => handleHovering(true, "frequency")}
            onMouseLeave={() => handleHovering(false)}
            onClick={handleLinkClick}
          >
            <span> الترددات</span>
            <MdArrowDropDown className="arrow-icon" color="black" size={20} />
          </Link>
          <Link
            to={"/about-us"}
            onClick={handleLinkClick}
            className="nav-item nav-item-with-dropdown mobile-dropdown"
          >
            <span> الترددات</span>
          </Link>
          <Link
            to={"/labayk_ya_husayn"}
            className="nav-item"
            onClick={handleLinkClick}
          >
            لبيك يا حسين
          </Link>

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
            onClick={handleLinkClick}
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
      {/* <div className="sat-section--compact-overlay"></div> */}
      <img className="sat-dish" src="/images/satellite_dish.svg" alt="Dish" />
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

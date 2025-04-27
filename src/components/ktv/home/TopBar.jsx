import React from "react";
import InputWithIcons from "./InputWithIcons";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function TopBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="topbar-content">
          {/* Current date section */}
          <div className="date">
            <span className="topbar-day">الاثنين</span>
            <span className="topbar-day-number"> 12</span>
            <span className="topbar-month">ذو القعدة</span>
            <span className="topbar-year">1445ه</span>
            <span className="topbar-divider"></span>
            <span className="topbar-miladi-date">حزيران 2024 3</span>
            <span className="topbar-divider"></span>
            <span className="topbar-am-pm">ص</span>
            <span className="topbar-time">10:00</span>
          </div>

          {/* Search bar and sites dropdown */}
          <div className="search-sites">
            {/* Search */}
            <div className="topbar-search">
              {isSearchOpen ? (
                <div className="topbar-search-open">
                  <InputWithIcons />
                  <span
                    className="topbar-cancel-search"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    الغاء
                  </span>
                </div>
              ) : (
                <FaSearch onClick={() => setIsSearchOpen(true)} />
              )}
            </div>

            {/* Sites dropdown */}
            <select className="topbar-sites-select">
              <option value={""}>مواقعتا</option>
              <option className="topbar-sites-item">قناة كربلاء</option>
              <option className="topbar-sites-item">قناة كربلاء 2</option>
              <option className="topbar-sites-item">قناة كربلاء 3</option>
              <option className="topbar-sites-item">قناة كربلاء 4</option>
            </select>
            {/* */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/homepage/Footer";
import TopBar from "../../components/ktv/topbar/TopBar";
import NavBar from "../../components/ktv/navbar/NavBar";

function Layout() {
  return (
    <>
      <div className="ktv-container rtl">
        {/* TopBar, Date and search */}
        <TopBar />
        {/* Navigation bar */}
        <NavBar />
        <div className="outlet-container">
          <Outlet />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Layout;

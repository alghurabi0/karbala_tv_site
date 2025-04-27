import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/homepage/Footer";

function Layout() {
  return (
    <>
      <div className="container rtl">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;

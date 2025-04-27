import React from "react";
import TopBar from "../../components/ktv/home/TopBar";

function KtvHomaPage() {
  return (
    <>
      {/* TopBar, Date and search */}
      <TopBar />
      {/* Navigation bar */}
      <nav className="top-navbar">
        <div className="nav-right">
          <button className="live-button">البث المباشر</button>
          <div className="logo">
            <img src="/karbala-logo.png" alt="Karbala Logo" />
            <span>KARBALA</span>
          </div>
        </div>
        <div className="nav-center">
          <a href="#">الرئيسية</a>
          <a href="#">الأخبار</a>
          <a href="#">المكتبة المرئية</a>
          <a href="#">الصور</a>
          <a href="#">الترددات</a>
          <a href="#">لبيك يا حسين</a>
          <a href="#">من نحن</a>
        </div>
      </nav>

      {/* Popular Section */}
      {/* Satellite Info Section */}
      {/* New Section */}
      {/* Recommended Section */}
      {/* Messages Section */}
    </>
  );
}

export default KtvHomaPage;

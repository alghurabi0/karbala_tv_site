import React from "react";
import NewsSection from "../../components/ktv/home/NewsSection";

function NewsPostPage() {
  return (
    <>
      <div className="outlet-container">
        <NewsSection isInsidePost={true} />
      </div>
    </>
  );
}

export default NewsPostPage;

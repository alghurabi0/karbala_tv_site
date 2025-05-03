import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { KtvTitleReverse } from "./KtvHomaPage";
import { Gallery } from "./GalleryPage";
import { RxDownload } from "react-icons/rx";
import { MdZoomOutMap } from "react-icons/md";

function GalleryImagePage() {
  const params = useParams();
  console.log(params.id);
  return (
    <>
      <div className="gallery-image-page">
        <ImageInfo />
        <KtvTitleReverse title={"الصور"} />

        <Gallery />
      </div>
    </>
  );
}

export default GalleryImagePage;

function ImageInfo() {
  const [isClicked, setIsClicked] = useState(false);
  const slides = [
    {
      id: 1,
      src: "/images/karbala_city.jpg",
      width: 1920,
      height: 1080,
    },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = slides[0].src;
    link.download = slides[0].src.split("/").pop(); // or a custom name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="image-info-container">
        <section className="image-data">
          {/* Download Button */}
          <button onClick={handleDownload} className="image-info-download">
            <p>تحميل</p>
            <RxDownload size={20} color="white" />
          </button>

          {/* Image Info */}
          <div className="image-info-metadata">
            <section className="image-info-data">
              <div>المشاهدات</div>
              <p>12345</p>
            </section>
            <section className="image-info-data">
              <div>تاريخ الرفع</div>
              <p>2026/12/05</p>
            </section>
            <section className="image-info-data">
              <div>التحميلات</div>
              <p>1203</p>
            </section>
            <section className="image-info-data"></section>
            <section className="image-info-data"></section>
          </div>

          {/* Recommended Image */}
          {/* <img src="/images/documentary.jpeg" className="image-info-image2" /> */}
        </section>

        {/* Main Image */}
        <div className="image-info-image-container">
          <img
            src={slides[0].src}
            className="image-info-image"
            onClick={() => setIsClicked(true)}
          />
          <MdZoomOutMap className="zoom-icon" size={40} color="white" />
        </div>
      </div>

      <Lightbox
        index={0}
        slides={slides}
        open={isClicked}
        close={() => setIsClicked(false)}
      />
    </>
  );
}

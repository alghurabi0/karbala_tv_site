import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { KtvTitleReverse } from "./KtvHomaPage";
import { MdDownloadForOffline } from "react-icons/md";

function GalleryPage() {
  return (
    <>
      <div className="gallery-page">
        <KtvTitleReverse title={"الصور"} />
        {/* Carousel */}
        <ImageCarousel />

        {/* Gallery */}
        <Gallery />
      </div>
    </>
  );
}

export default GalleryPage;

function ImageCarousel() {
  const images = [
    { src: "/images/karbala_city.jpg", alt: "Person reading" },
    { src: "/images/documentary.jpeg", alt: "Flags at sunset" },
    { src: "/images/safeer.png", alt: "Dome at sunset" },
    { src: "/images/quran.jpg", alt: "Blue mosaic detail" },
    { src: "/images/karbala_city.jpg", alt: "Person reading" },
    { src: "/images/documentary.jpeg", alt: "Flags at sunset" },
    { src: "/images/safeer.png", alt: "Dome at sunset" },
    { src: "/images/quran.jpg", alt: "Blue mosaic detail" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="carousel-container">
      <div className="main-image-container">
        <img
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          className="main-image"
        />
        {/* <div className="bottom-curve"></div> */}
        <svg
          className="bottom-curve"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C25,10 75,10 100,0 L100,10 L0,10 Z" fill="white" />
        </svg>
      </div>

      <div className="thumbnails-row">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`thumbnail-button ${
              currentIndex === index ? "active" : ""
            }`}
            style={{ "--i": index }}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="thumbnail-image"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function KtvLense() {
  return (
    <>
      <div className="ktv-lense">
        <MdDownloadForOffline size={25} color="white" />
        <p>عدسة فناة كربلاء الفضائية</p>
      </div>
    </>
  );
}

export function Gallery() {
  const navigate = useNavigate();
  const slides = [
    {
      id: 1,
      src: "/images/karbala_city.jpg",
      width: 1920,
      height: 1080,
    },
    {
      id: 2,
      src: "https://picsum.photos/1600/1200",
      width: 1600,
      height: 1200,
    },
    {
      id: 3,
      src: "https://picsum.photos/1080/1350",
      width: 1080,
      height: 1350,
    },
    {
      id: 4,
      src: "https://picsum.photos/1280/853",
      width: 1280,
      height: 853,
    },
    {
      id: 5,
      src: "https://picsum.photos/1440/960",
      width: 1440,
      height: 960,
    },
    {
      id: 6,
      src: "https://picsum.photos/1200/1600",
      width: 1200,
      height: 1600,
    },
    {
      id: 7,
      src: "https://picsum.photos/1366/768",
      width: 1366,
      height: 768,
    },
    {
      id: 8,
      src: "https://picsum.photos/1536/1024",
      width: 1536,
      height: 1024,
    },
    {
      id: 9,
      src: "https://picsum.photos/1920/1080",
      width: 1920,
      height: 1080,
    },
    {
      id: 10,
      src: "https://picsum.photos/1280/720",
      width: 1280,
      height: 720,
    },
    {
      id: 11,
      src: "https://picsum.photos/1024/768",
      width: 1024,
      height: 768,
    },
    {
      id: 12,
      src: "https://picsum.photos/768/1024",
      width: 768,
      height: 1024,
    },
    {
      id: 13,
      src: "https://picsum.photos/1600/900",
      width: 1600,
      height: 900,
    },
    {
      id: 14,
      src: "https://picsum.photos/1400/933",
      width: 1400,
      height: 933,
    },
    {
      id: 15,
      src: "https://picsum.photos/900/1600",
      width: 900,
      height: 1600,
    },
    {
      id: 16,
      src: "https://picsum.photos/1200/675",
      width: 1200,
      height: 675,
    },
    {
      id: 17,
      src: "https://picsum.photos/1080/720",
      width: 1080,
      height: 720,
    },
    {
      id: 18,
      src: "https://picsum.photos/1024/640",
      width: 1024,
      height: 640,
    },
    {
      id: 19,
      src: "https://picsum.photos/640/1024",
      width: 640,
      height: 1024,
    },
    {
      id: 20,
      src: "https://picsum.photos/1000/1500",
      width: 1000,
      height: 1500,
    },
    {
      id: 21,
      src: "https://picsum.photos/800/600",
      width: 800,
      height: 600,
    },
    {
      id: 22,
      src: "https://picsum.photos/600/800",
      width: 600,
      height: 800,
    },
    {
      id: 23,
      src: "https://picsum.photos/900/900",
      width: 900,
      height: 900,
    },
    {
      id: 24,
      src: "https://picsum.photos/1100/733",
      width: 1100,
      height: 733,
    },
    {
      id: 25,
      src: "https://picsum.photos/1600/1000",
      width: 1600,
      height: 1000,
    },
  ];

  return (
    <>
      <MasonryPhotoAlbum
        photos={slides}
        targetRowHeight={150}
        render={{
          extras: (_, { photo }) => (
            <>
              <KtvLense />
              {/* download doesn't work for images with redirect link */}
              <MdDownloadForOffline
                size={30}
                color="white"
                className="download-icon"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering the onClick navigation
                  const link = document.createElement("a");
                  link.href = photo.src;
                  link.download = photo.src.split("/").pop(); // or a custom name
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              />
            </>
          ),
        }}
        onClick={({ photo }) => {
          navigate(`/gallery/${photo.id}`);
        }}
      />
    </>
  );
}

import "./styles/styles.css";
import HomePage from "./pages/HomePage";
import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KtvHomaPage from "./pages/ktv/KtvHomaPage";
import Layout from "./pages/ktv/Layout";
import NewsPage from "./pages/ktv/NewsPage";
import NewsPostPage from "./pages/ktv/NewsPostPage";
import LivePage from "./pages/ktv/LivePage";
import AboutUsPage from "./pages/ktv/AboutUsPage";
import VisualLibraryPage from "./pages/ktv/VisualLibraryPage";
import ProgramsCurriculumPage from "./pages/ktv/ProgramsCurriculumPage";
import GalleryPage from "./pages/ktv/GalleryPage";
import GalleryImagePage from "./pages/ktv/GalleryImagePage";
import LabaykYaHusayn from "./pages/ktv/LabaykYaHusayn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main page with all channels */}
          <Route path="/" element={<HomePage />} />

          {/* KTV routes */}
          <Route element={<Layout />}>
            <Route path="/live" element={<LivePage />} />
            <Route path="/home" element={<KtvHomaPage />} />
            <Route
              path="/programs-schedule"
              element={<ProgramsCurriculumPage />}
            />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsPostPage />} />
            <Route path="/visual-library" element={<VisualLibraryPage />} />
            <Route
              path="/visual-library/:category"
              element={<VisualLibraryPage isInsideCategory={true} />}
            />
            <Route
              path="/visual-library/:category/:program"
              element={<VisualLibraryPage isInsideProgram={true} />}
            />
            <Route
              path="/visual-library/:category/:program/:episodeId"
              element={<VisualLibraryPage isInsideEpidose={true} />}
            />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:id" element={<GalleryImagePage />} />
            <Route path="/frequencies" element={<AboutUsPage />} />
            <Route path="/labayk_ya_husayn" element={<LabaykYaHusayn />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

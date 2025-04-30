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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main page with all channels */}
          <Route path="/" element={<HomePage />} />

          {/* KTV routes */}
          <Route element={<Layout />}>
            <Route path="/home" element={<KtvHomaPage />} />
            <Route path="/live" element={<LivePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsPostPage />} />
            <Route path="/visual-library" element={<VisualLibraryPage />} />
            <Route path="/frequencies" element={<AboutUsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

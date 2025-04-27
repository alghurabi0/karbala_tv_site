import "./styles/styles.css";
import HomePage from "./pages/HomePage";
import "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KtvHomaPage from "./pages/ktv/KtvHomaPage";
import Layout from "./pages/ktv/Layout";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

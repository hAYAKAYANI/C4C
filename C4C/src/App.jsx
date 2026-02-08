import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import SectionHome from "./components/sectionhome";
import SectionTwo from "./components/sectionTwo";
import HomeSection2 from "./components/homesection2";
import SectionOne from "./components/sectionOne";
import AboutUs1 from "./components/AboutUs1";
import Mission from "./components/mission";
import AuthPopup from "./components/authpop";
import Footer from "./components/Footer";
import DonationQuotes from "./components/DonationQuotes";
import WhyConnect4Cause from "./components/WhyConnect4Cause";
import Work from "./components/work";
import SectorPage from "./components/SectorPage";
import NGOPage from "./components/ngoPage";
import ScrollToTop from "./components/scrolltoTop";

function App() {
  const [popupType, setPopupType] = useState("signup");
  const [filters, setFilters] = useState({ sector: "All", location: "All" });

  useEffect(() => {
    document.body.style.overflow = popupType ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [popupType]);

  const handleClose = () => setPopupType(null);

  return (
    <>
      <Navbar onRegister={() => setPopupType("signup")} />
      <ScrollToTop /> {/* Add this just below Navbar */}

      {popupType && (
        <AuthPopup
          type={popupType}
          onClose={handleClose}
          switchTo={(type) => setPopupType(type)}
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SectionHome />
              <HomeSection2 />
              <WhyConnect4Cause />
              <SectionTwo />
              <Work />
              <DonationQuotes />
              <Mission />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <SectionOne />
              <AboutUs1 />
              <Mission />
              <Footer />
            </>
          }
        />
        <Route path="/categories" element={<Footer />} />
        <Route path="/ngos" element={<><NGOPage /><Footer /></>} />
        <Route
          path="/sector/:sector"
          element={<><SectorPage filters={filters} setFilters={setFilters} /><Mission /><Footer /></>}
        />
      </Routes>
    </>
  );
}

export default App;

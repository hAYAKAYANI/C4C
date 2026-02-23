import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import AuthPopup from "./components/authpop";
import ScrollToTop from "./components/scrolltoTop";
import Footer from "./components/Footer";
import SectionHome from "./components/sectionhome";
import SectionTwo from "./components/sectionTwo";
import HomeSection2 from "./components/homesection2";
import SectionOne from "./components/sectionOne";
import AboutUs1 from "./components/AboutUs1";
import WhyConnect4Cause from "./components/WhyConnect4Cause";
import Work from "./components/work";
import SectorPage from "./components/SectorPage";
import NGOPage from "./components/ngoPage";
import UserImpactCard from "./components/UserImpactCard";
import DonationQuotes from "./components/DonationQuotes";
import Mission from "./components/mission";
import BackButton from "./components/BackButton";

function App() {
  const [popupType, setPopupType] = useState("signup");
  const [showPopup, setShowPopup] = useState(false);
  const [confirmUser, setConfirmUser] = useState(false);

  const [filters, setFilters] = useState({
    sector: "All",
    location: "All",
  });

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow =
      showPopup || confirmUser ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [showPopup, confirmUser]);

  return (
    <>
      <Navbar
        onRegister={() => {
          if (storedUser) {
            setConfirmUser(true); // 🔥 show continue modal
          } else {
            setPopupType("signup");
            setShowPopup(true); // 🔥 show auth popup
          }
        }}
        filters={filters}
        setFilters={setFilters}
      />

      <ScrollToTop />

      {/* 🔥 Continue As Stored User Modal */}
      {confirmUser && storedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

          <div className="relative w-full max-w-lg">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#69306d] via-[#a66dd4] to-[#ffa69e] shadow-2xl text-center">
              <h2 className="text-3xl font-extrabold text-white mb-2">
                Welcome Back 💜
              </h2>

              <p className="text-white text-lg mb-6">
                Continue as <span className="font-bold">{storedUser.name}</span>?
              </p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => setConfirmUser(false)}
                  className="px-6 py-2 bg-white text-[#69306d] font-semibold rounded-xl hover:scale-105 transition"
                >
                  Yes
                </button>

                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("token");
                    setConfirmUser(false);
                    setPopupType("signup");
                    setShowPopup(true);
                  }}
                  className="px-6 py-2 bg-[#69306d] text-white font-semibold rounded-xl hover:scale-105 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 Auth Popup */}
      {showPopup && (
        <AuthPopup
          type={popupType}
          onClose={() => setShowPopup(false)}
          switchTo={setPopupType}
        />
      )}

     {location.pathname !== "/" && location.pathname !== "/about" && (
  <div className="max-w-7xl mx-auto px-4 py-4">
    <BackButton />
  </div>
)}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SectionHome />
              <HomeSection2 />
              <UserImpactCard />
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
              <UserImpactCard />
              <AboutUs1 />
              <Work />
              <Mission />
              <Footer />
            </>
          }
        />

        <Route path="/ngos" element={<><NGOPage /><Footer /></>} />

        <Route
          path="/sector/:sector"
          element={
            <>
              <SectorPage filters={filters} setFilters={setFilters} />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
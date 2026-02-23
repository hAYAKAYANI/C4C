import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on home page and About page
  if (location.pathname === "/" || location.pathname === "/about") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-[#a5668b] hover:text-[#69306d] transition-colors duration-200 text-sm md:text-base font-medium"
    >
      <FaArrowLeft /> Back
    </button>
  );
};

export default BackButton;
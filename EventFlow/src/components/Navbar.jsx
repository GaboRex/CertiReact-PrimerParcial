
import logo from "../assets/logo2.svg";
import facebookLogo from "../assets/facebook.png";
import youtubeLogo from "../assets/youtube.png";
import instagramLogo from "../assets/instagram.png";

const Navbar = ({ eventCounters }) => {
  return (
    <nav className="bg-blue-200 text-white py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="mr-auto flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="mr-2"
            style={{ width: "250px", height: "90px" }}
          />
        </div>
        <div className="flex items-center">
          <img
            src={facebookLogo}
            alt="Facebook"
            className="mr-2"
            style={{ width: "30px", height: "30px" }}
          />
          <img
            src={youtubeLogo}
            alt="Youtube"
            className="mr-2"
            style={{ width: "30px", height: "30px" }}
          />
          <img
            src={instagramLogo}
            alt="Instagram"
            className="mr-2"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
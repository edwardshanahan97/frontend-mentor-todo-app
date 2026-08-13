import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";
import LogoMobile from "../../assets/icons/logo-mobile.svg";
import LogoDesktop from "../../assets/icons/logo-desktop.svg";
import IconSun from "../../assets/icons/icon-sun.svg";
import IconMoon from "../../assets/icons/icon-moon.svg";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <picture>
        <source
          srcSet={LogoDesktop}
          media="(min-width: 1440px)"
          type="image/jpeg"
        />
        <img src={LogoMobile} alt="Todo Logo" />
      </picture>

      <button onClick={toggleTheme} className="navbar__toggle">
        {theme === "dark" ? (
          <img src={IconSun} className="navbar__icon" alt="Sun Icon" />
        ) : (
          <img src={IconMoon} className="navbar__icon" alt="Moon Icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;

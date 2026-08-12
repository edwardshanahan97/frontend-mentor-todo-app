import { useTheme } from "../../context/ThemeContext";
import "./Background.css";
import BgMobileLight from "../../assets/images/bg-mobile-light.jpg";
import BgDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import BgMobileDark from "../../assets/images/bg-mobile-dark.jpg";
import BgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";

const Background = () => {
  const { theme } = useTheme();
  return (
    <section className="background">
      {theme === "dark" ? (
        <picture>
          <source
            srcSet={BgDesktopLight}
            media="(min-width: 1440px)"
            type="image/jpeg"
          />
          <img src={BgMobileLight} alt="Mountain Background" />
        </picture>
      ) : (
        <picture>
          <source
            srcSet={BgDesktopDark}
            media="(min-width: 1440px)"
            type="image/jpeg"
          />
          <img src={BgMobileDark} alt="Building Background" />
        </picture>
      )}
    </section>
  );
};

export default Background;

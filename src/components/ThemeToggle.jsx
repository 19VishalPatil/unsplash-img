import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGalleryContext } from "../context/galleryContext";

function ThemeToggle() {
  const { isDark, toggleDarkTheme } = useGalleryContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDark ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ThemeToggle;

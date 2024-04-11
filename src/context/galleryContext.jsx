import { createContext, useContext, useEffect, useState } from "react";

const GalleryContext = createContext();

// const getInitialDarkMode = () => {
//   const prefersDarkMode = window.matchMedia(
//     "(prefers-color-scheme: dark)"
//   ).matches;
//   const storedDarkMode = localStorage.getItem("darkTheme");

//   if (storedDarkMode === null) {
//     return prefersDarkMode;
//   }

//   return storedDarkMode === "true";
// };

function getInitialDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || prefersDarkMode;
}

export function GalleryProvider({ children }) {
  const [isDark, setIsDark] = useState(getInitialDarkMode());
  const [searchQuery, setSearchQuery] = useState("car");

  function toggleDarkTheme() {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkTheme", newTheme);
  }

  useEffect(
    function () {
      document.body.classList.toggle("dark-theme", isDark);
    },
    [isDark]
  );

  return (
    <GalleryContext.Provider
      value={{ isDark, toggleDarkTheme, searchQuery, setSearchQuery }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export function useGalleryContext() {
  const context = useContext(GalleryContext);
  return context;
}

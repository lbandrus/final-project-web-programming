"use client";
import PropTypes from "prop-types";
import "./DarkModeBotton.css"; // Import the CSS file
import { useEffect, useMemo, useState, React } from "react";

export function DarkModeBotton() {
  const prefersDarkMode = useMemo(() => {
    const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return dark;
  }, []);

  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);
  useEffect(() => {
    applyTheme(isDarkMode);
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    applyTheme(isDarkMode);
  };
  const applyTheme = (dark) => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  const moon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.376 15.378C20.1873 15.8735 18.9119 16.1277 17.624 16.126C12.239 16.126 7.87402 11.761 7.87402 6.37602C7.87402 5.04602 8.14002 3.77902 8.62202 2.62402C6.84549 3.36514 5.32799 4.61538 4.26065 6.21728C3.19331 7.81918 2.62386 9.70111 2.62402 11.626C2.62402 17.011 6.98902 21.376 12.374 21.376C14.2989 21.3762 16.1809 20.8067 17.7828 19.7394C19.3847 18.6721 20.6349 17.1546 21.376 15.378Z"
        fill="#3F3F46"
        stroke="#71717A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const sun = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1V3.25M16.364 3.636L14.773 5.227M19 10H16.75M16.364 16.364L14.773 14.773M10 16.75V19M5.227 14.773L3.636 16.364M3.25 10H1M5.227 5.227L3.636 3.636M13.75 10C13.75 10.9946 13.3549 11.9484 12.6517 12.6517C11.9484 13.3549 10.9946 13.75 10 13.75C9.00544 13.75 8.05161 13.3549 7.34835 12.6517C6.64509 11.9484 6.25 10.9946 6.25 10C6.25 9.00544 6.64509 8.05161 7.34835 7.34835C8.05161 6.64509 9.00544 6.25 10 6.25C10.9946 6.25 11.9484 6.64509 12.6517 7.34835C13.3549 8.05161 13.75 9.00544 13.75 10Z"
        stroke="#14B8A6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div>
      <button onClick={toggleTheme}>{isDarkMode ? moon : sun}</button>
    </div>
  );
}
export default DarkModeBotton;

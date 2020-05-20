import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  // show table in proper format on mobile screen using useEffect
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  // header above the page with bluestacks logo
  return (
    <header className="Header">
      <img src="assets/bluestacks.png" className="Logo" alt="logo" />
    </header>
  );
}

import { useEffect, useState } from "react";

const MediaMatch = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  const isMobileDevice = () => windowWidth < 640;

  return {
    isSmartphone: isMobileDevice() && windowWidth < 450,
    isMobile: isMobileDevice(),
    isTablet: !isMobileDevice() && windowWidth < 1170,
    isDesktop: !isMobileDevice() && windowWidth >= 1170,
    getWindowWidth: () => windowWidth,
  };
};

export default MediaMatch;

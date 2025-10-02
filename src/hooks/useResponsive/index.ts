import { theme } from "@/styles/theme";
import { useState, useEffect } from "react";

function parseBreakpoint(breakpoint: string): number {
  return parseInt(breakpoint.replace("px", ""), 10);
}

const breakpoints = {
  mobile: parseBreakpoint(theme.breakpoints.mobile),
  tablet: parseBreakpoint(theme.breakpoints.tablet),
  desktop: parseBreakpoint(theme.breakpoints.desktop),
  largeDesktop: parseBreakpoint(theme.breakpoints.largeDesktop),
};

export function useResponsive() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= breakpoints.mobile;
  const isTablet = width <= breakpoints.tablet;
  const isDesktop = width < breakpoints.desktop;
  const isLargeDesktop = width >= breakpoints.largeDesktop;

  return {
    pageWidth: width,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
}

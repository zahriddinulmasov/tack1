import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const ScroolsToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

ScroolsToTop.propTypes = {
  children: PropTypes.node,
};

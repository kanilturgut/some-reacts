import { useEffect } from "react";

const Route = ({ path, children }) => {
  useEffect(() => {
    const onLocationChage = () => {};

    window.addEventListener("popstate", onLocationChage);

    return () => {
      window.removeEventListener("popstate", onLocationChage);
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;

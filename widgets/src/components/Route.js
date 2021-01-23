import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChage = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChage);

    return () => {
      window.removeEventListener("popstate", onLocationChage);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

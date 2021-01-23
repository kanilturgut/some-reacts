import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // to prevent full page reload
    event.preventDefault();
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // to prevent full page reload
    event.preventDefault();

    // changes url without full page reload
    window.history.pushState({}, "", href);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

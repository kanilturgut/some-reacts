import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // windows ctrl key, mac command key
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // to prevent full page reload
    event.preventDefault();

    // changes url without full page reload
    window.history.pushState({}, "", href);

    // to listen navigation change add this event
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

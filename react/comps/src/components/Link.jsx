import React from "react";
import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children }) => {
  const { navigate } = useNavigation();
  const handleClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };

  const classes = classNames("text-blue-500");
  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;

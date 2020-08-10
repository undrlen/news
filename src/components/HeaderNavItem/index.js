import React from "react";

const HeaderNavItem = ({ header, onChangeHeaderNav }) => {
  return (
    <a href="#0" onClick={() => onChangeHeaderNav(header)}>
      {header}
    </a>
  );
};

export default HeaderNavItem;

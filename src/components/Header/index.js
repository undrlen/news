import React from "react";

import HeaderTop from "../HeaderTop";
import HeaderNav from "../HeaderNav";

const Header = ({ onChangeHeaderNav }) => {
  return (
    <header id="header">
      <HeaderTop />

      <div id="center-header">
        <div className="container">
          <div className="header-logo">
            <a href="#0" className="logo">
              <img src="./img/logo.png" alt="" />
            </a>
          </div>
          <div className="header-ads">
            <img className="center-block" src="" alt="" />
          </div>
        </div>
      </div>

      <HeaderNav onChangeHeaderNav={onChangeHeaderNav} />
    </header>
  );
};

export default Header;

import React from "react";

import FooterTop from '../FooterTop';
import FooterBottom from '../FooterBottom';

const Footer = ({eightRandomElements}) => {
  return (
    <footer id="footer">
      <FooterTop eightRandomElements={eightRandomElements} />

      <FooterBottom />
    </footer>
  );
};

export default Footer;

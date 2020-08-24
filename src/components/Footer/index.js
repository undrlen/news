import React from "react";

import FooterTop from '../FooterTop';
import FooterBottom from '../FooterBottom';

const Footer = ({eightRandomElements, footerFeaturedPosts}) => {
  return (
    <footer id="footer">
      <FooterTop eightRandomElements={eightRandomElements} footerFeaturedPosts={footerFeaturedPosts} />

      <FooterBottom />
    </footer>
  );
};

export default Footer;

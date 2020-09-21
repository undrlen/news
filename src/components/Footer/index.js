import React from "react";

import FooterTop from '../FooterTop';
import FooterBottom from '../FooterBottom';

const Footer = ({eightRandomElements, footerFeaturedPosts, tweets}) => {
  return (
    <footer id="footer">
      <FooterTop eightRandomElements={eightRandomElements} footerFeaturedPosts={footerFeaturedPosts} tweets={tweets} />

      <FooterBottom />
    </footer>
  );
};

export default Footer;

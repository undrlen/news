import React from "react";

import PostsAsidePhoto from "../PostsAsidePhoto";
import FooterTopFeaturedPosts from "../FooterTopFeaturedPosts";
import FooterTweet from "../FooterTweet";

const FooterTop = ({ eightRandomElements, footerFeaturedPosts, tweets }) => {
  return (
    <div id="top-footer" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-widget about-widget">
              <div className="footer-logo">
                <a href="#0" className="logo">
                  <img src="./img/logo-alt.png" alt="" />
                </a>
                <p>
                  Populo tritani laboramus ex mei, no eum iuvaret ceteros
                  euripidis, ne alia sadipscing mei. Te inciderint cotidieque
                  pro, ei iisque docendi qui.
                </p>
              </div>
            </div>

            <div className="footer-widget social-widget">
              <div className="widget-title">
                <h3 className="title">Follow Us</h3>
              </div>
              <ul>
                <li>
                  <a href="#0" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="google">
                    <i className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="youtube">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#0" className="rss">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-widget subscribe-widget">
              <div className="widget-title">
                <h2 className="title">Subscribe to Newslatter</h2>
              </div>
              <form>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <button className="input-btn">Subscribe</button>
              </form>
            </div>
          </div>

          <FooterTopFeaturedPosts footerFeaturedPosts={footerFeaturedPosts} />

          <div className="col-md-4">
            <PostsAsidePhoto eightRandomElements={eightRandomElements} />

            <FooterTweet tweets={tweets} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

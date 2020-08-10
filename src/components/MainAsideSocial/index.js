import React from "react";

const MainAsideSocial = (props) => {
  return (
    <div className="widget social-widget">
      <div className="widget-title">
        <h2 className="title">Stay Connected</h2>
      </div>
      <ul>
        <li>
          <a href="#0" className="facebook">
            <i className="fa fa-facebook"></i>
            <br />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#0" className="twitter">
            <i className="fa fa-twitter"></i>
            <br />
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a href="#0" className="google">
            <i className="fa fa-google"></i>
            <br />
            <span>Google+</span>
          </a>
        </li>
        <li>
          <a href="#0" className="instagram">
            <i className="fa fa-instagram"></i>
            <br />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#0" className="youtube">
            <i className="fa fa-youtube"></i>
            <br />
            <span>Youtube</span>
          </a>
        </li>
        <li>
          <a href="#0" className="rss">
            <i className="fa fa-rss"></i>
            <br />
            <span>RSS</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainAsideSocial;

import React from 'react';

const HeaderTop = () => {
  return (
    <div id="top-header">
      <div className="container">
        <div className="header-links">
          <ul>
            <li><a href="#0">About us</a></li>
            <li><a href="#0">Contact</a></li>
            <li><a href="#0">Advertisement</a></li>
            <li><a href="#0">Privacy</a></li>
            <li><a href="#0"><i className="fa fa-sign-in"></i> Login</a></li>
          </ul>
        </div>
        <div className="header-social">
          <ul>
            <li><a href="#0"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#0"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#0"><i className="fa fa-google-plus"></i></a></li>
            <li><a href="#0"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#0"><i className="fa fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
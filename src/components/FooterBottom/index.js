import React from "react";

const FooterBottom = (props) => {
  return (
    <div id="bottom-footer" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-push-6">
            <ul className="footer-links">
              <li>
                <a href="#0">About us</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
              <li>
                <a href="#0">Advertisement</a>
              </li>
              <li>
                <a href="#0">Privacy</a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-md-pull-6">
            <div className="footer-copyright">
              <span>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

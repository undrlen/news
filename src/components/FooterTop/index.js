import React from "react";

const FooterTop = (props) => {
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

          <div className="col-md-4">
            <div className="footer-widget">
              <div className="widget-title">
                <h2 className="title">Featured Posts</h2>
              </div>

              <article className="article widget-article">
                <div className="article-img">
                  <a href="#0">
                    <img src="./img/img-widget-1.jpg" alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <h4 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h4>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                </div>
              </article>

              <article className="article widget-article">
                <div className="article-img">
                  <a href="#0">
                    <img src="./img/img-widget-2.jpg" alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <h4 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h4>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                </div>
              </article>

              <article className="article widget-article">
                <div className="article-img">
                  <a href="#0">
                    <img src="./img/img-widget-3.jpg" alt="" />
                  </a>
                </div>
                <div className="article-body">
                  <h4 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h4>
                  <ul className="article-meta">
                    <li>
                      <i className="fa fa-clock-o"></i> January 31, 2017
                    </li>
                    <li>
                      <i className="fa fa-comments"></i> 33
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>

          <div className="col-md-4">
            <div className="footer-widget galery-widget">
              <div className="widget-title">
                <h2 className="title">Flickr Photos</h2>
              </div>
              <ul>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-3.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-4.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-5.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-6.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-7.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-8.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-9.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <img src="./img/img-widget-10.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-widget tweets-widget">
              <div className="widget-title">
                <h2 className="title">Recent Tweets</h2>
              </div>
              <ul>
                <li className="tweet">
                  <i className="fa fa-twitter"></i>
                  <div className="tweet-body">
                    <p>
                      <a href="#0">@magnews</a> Populo tritani laboramus ex mei,
                      no eum iuvaret ceteros euripidis{" "}
                      <a href="#0">https://t.co/DwsTbsmxTP</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

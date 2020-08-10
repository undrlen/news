import React from "react";

const Video = (props) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Popular Video</h2>
              <div
                id="nav-carousel-2"
                className="custom-owl-nav pull-right"
              ></div>
            </div>

            <div id="owl-carousel-2" className="owl-carousel owl-theme">
              <article className="article thumb-article">
                <div className="article-img">
                  <img src="./img/img-thumb-1.jpg" alt="" />
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#0">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-video-camera"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
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

              <article className="article thumb-article">
                <div className="article-img">
                  <img src="./img/img-thumb-2.jpg" alt="" />
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#0">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-video-camera"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
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

              <article className="article thumb-article">
                <div className="article-img">
                  <img src="./img/img-thumb-3.jpg" alt="" />
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#0">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-video-camera"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
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

              <article className="article thumb-article">
                <div className="article-img">
                  <img src="./img/img-thumb-4.jpg" alt="" />
                </div>
                <div className="article-body">
                  <ul className="article-info">
                    <li className="article-category">
                      <a href="#0">News</a>
                    </li>
                    <li className="article-type">
                      <i className="fa fa-video-camera"></i>
                    </li>
                  </ul>
                  <h3 className="article-title">
                    <a href="#0">Duis urbanitas eam in, tempor consequat.</a>
                  </h3>
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
        </div>
      </div>
    </div>
  );
};

export default Video;

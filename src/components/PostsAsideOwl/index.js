import React, { Component } from "react";

class PostsAsideOwl extends Component {
  render() {
    return (
      <div id="owl-carousel-4" className="owl-carousel owl-theme">
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
      </div>
    );
  }
}

export default PostsAsideOwl;

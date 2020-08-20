import React, { Component } from "react";

import $ from "jquery";
import DogsApi from "../../services/DogsApi";
import ReactPlayer from "react-player";
import "./styles.css";

export default class OwlCarousel4 extends Component {
  dogServices = new DogsApi();

  state = {
    height: null,
    dogs: null,
  };

  scheduled = null;

  resize = (e) => {
    if (!this.scheduled) {
      setTimeout(() => {
        this.setState({ height: (100 * this.el.clientWidth) / 100 });
        this.scheduled = null;
      }, 250);
    }
    this.scheduled = e;
  };

  findImageHeight = () => ({ height: (100 * this.el.clientWidth) / 100 });

  getData = () => {
    this.dogServices
      .getDogs(2)
      .then((result) => {
        this.setState({ dogs: result });
      })
      .catch(() => {
        this.setState({ dogs: null });
      });
  };

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      dots: true,
      nav: false,
      autoplay: true,
      autoplayHoverPause: true,
    });
    window.addEventListener("resize", this.resize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.country !== prevProps.country) {
      this.getData();
    }
    if (!this.state.height && this.state.dogs !== prevState.dogs) {
      this.setState(this.findImageHeight());
    }
    this.$el.trigger("refresh.owl.carousel");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    this.$el.trigger("destroy.owl.carousel");
  }
  render() {
    let height = `${this.state.height}px`;

    const { dogs } = this.state;
    if (dogs) {
      var url0 = dogs[0];
      var url1 = dogs[1];
    }

    const options = {
      height,
      controls: true,
      pip: false,
      volume: 1,
      width: "100%",
    };

    return (
      <div
        id="owl-carousel-4"
        className="owl-carousel owl-theme"
        ref={(el) => (this.el = el)}
      >
        <article className="article thumb-article">
          <div className="article-img">
            <ReactPlayer url={url0} {...options} />
          </div>
          <div className="article-body">
            <ul className="article-info">
              <li className="article-category">
                <a target="_blank" rel="noopener noreferrer" href={url0}>News</a>
              </li>
              <li className="article-type">
                <i className="fa fa-video-camera"></i>
              </li>
            </ul>
          </div>
        </article>

        <article className="article thumb-article">
          <div className="article-img">
            <ReactPlayer url={url1} {...options} />
          </div>
          <div className="article-body">
            <ul className="article-info">
              <li className="article-category">
                <a target="_blank" rel="noopener noreferrer" href={url1}>News</a>
              </li>
              <li className="article-type">
                <i className="fa fa-video-camera"></i>
              </li>
            </ul>
          </div>
        </article>
      </div>
    );
  }
}

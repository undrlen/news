import React, {Component} from "react";

import $ from "jquery";
import "./styles.css";

export default class OwlCarousel1 extends Component {
  state = {
    height: null,
  };

  scheduled = null;

  resize = (e) => {
    if (!this.scheduled) {
      setTimeout(() => {
        this.setState({ height: 768 * this.el.clientWidth / 2 / 1280 });
        this.scheduled = null;
      }, 250);
    }
    this.scheduled = e;
  };

  findImageHeight = () => ({ height: 768 * this.el.clientWidth / 2 / 1280 });

  dateFormat(publishedAt) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(Date.parse(publishedAt));
    const monthN = months.filter((month, i) => i === date.getMonth());

    return `${monthN} ${date.getDate()}, ${date.getFullYear()}`;
  }

  componentDidMount() {
    this.$el = $(this.el);
    this.$el.owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
      },
    });
    window.addEventListener("resize", this.resize);
  }

  componentDidUpdate(prevProps) {
    this.$el.trigger("refresh.owl.carousel");
    if (
      this.props.owlGeneral &&
      prevProps.owlGeneral !== this.props.owlGeneral
    ) {
      this.setState(this.findImageHeight());
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    this.$el.trigger("destroy.owl.carousel");
  }

  render() {

    const height = document.body.clientWidth > 992 ? {style: { height: `${this.state.height}px` }} : {style: { height: `${this.state.height * 2}px` }};
    const { owlGeneral } = this.props;

    if (owlGeneral) {
      var url0 = owlGeneral[0].url;
      var url1 = owlGeneral[1].url;
      var url2 = owlGeneral[2].url;
      var urlImage0 = owlGeneral[0].urlToImage;
      var urlImage1 = owlGeneral[1].urlToImage;
      var urlImage2 = owlGeneral[2].urlToImage;
      var title0 = owlGeneral[0].title;
      var title1 = owlGeneral[1].title;
      var title2 = owlGeneral[2].title;
      var description0 = owlGeneral[0].description;
      var description1 = owlGeneral[1].description;
      var description2 = owlGeneral[2].description;
      var date0 = this.dateFormat(owlGeneral[0].publishedAt);
      var date1 = this.dateFormat(owlGeneral[1].publishedAt);
      var date2 = this.dateFormat(owlGeneral[2].publishedAt);
    }

    return (
      <div
        id="owl-carousel-1"
        className="owl-carousel owl-theme center-owl-nav"
        ref={(el) => (this.el = el)}
      >
        <article className="article thumb-article">
          <div className="article-img">
            <img src={urlImage0} alt={description0}{...height} />
          </div>
          <div className="article-body">
            <ul className="article-info">
              <li className="article-category">
                <a href="#0">News</a>
              </li>
              <li className="article-type">
                <i className="fa fa-camera"></i>
              </li>
            </ul>
            <h2 className="article-title">
              <a target="_blank" rel="noopener noreferrer" href={url0}>{title0}</a>
            </h2>
            <ul className="article-meta">
              <li>
                <i className="fa fa-clock-o"></i> {date0}
              </li>
              <li>
                <i className="fa fa-comments"></i> 33
              </li>
            </ul>
          </div>
        </article>
        <article className="article thumb-article">
          <div className="article-img">
            <img src={urlImage1} alt={description1}{...height} />
          </div>
          <div className="article-body">
            <ul className="article-info">
              <li className="article-category">
                <a href="#0">News</a>
              </li>
              <li className="article-type">
                <i className="fa fa-camera"></i>
              </li>
            </ul>
            <h2 className="article-title">
              <a target="_blank" rel="noopener noreferrer" href={url1}>{title1}</a>
            </h2>
            <ul className="article-meta">
              <li>
                <i className="fa fa-clock-o"></i> {date1}
              </li>
              <li>
                <i className="fa fa-comments"></i> 33
              </li>
            </ul>
          </div>
        </article>
        <article className="article thumb-article">
          <div className="article-img">
            <img src={urlImage2} alt={description2}{...height} />
          </div>
          <div className="article-body">
            <ul className="article-info">
              <li className="article-category">
                <a href="#0">News</a>
              </li>
              <li className="article-type">
                <i className="fa fa-camera"></i>
              </li>
            </ul>
            <h2 className="article-title">
              <a target="_blank" rel="noopener noreferrer" href={url2}>{title2}</a>
            </h2>
            <ul className="article-meta">
              <li>
                <i className="fa fa-clock-o"></i> {date2}
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


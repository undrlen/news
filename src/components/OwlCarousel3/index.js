import React, {Component} from "react";

import $ from "jquery";
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class OwlCarousel2 extends Component {
  state = {
    height: null,
  };

  scheduled = null;

  resize = (e) => {
    if (!this.scheduled) {
      setTimeout(() => {
        this.setState({ height: 270 * this.$el[0].clientWidth / 360 });
        this.scheduled = null;
      }, 250);
    }
    this.scheduled = e;
  };

  findImageHeight = () => ({ height: 270 * this.$el[0].clientWidth / 360 });

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
      items:1,
      loop:true,
      margin:0,
      dots : false,
      nav: true,
      navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      autoplay : true,
    });
    window.addEventListener("resize", this.resize);
  }

  componentDidUpdate(prevProps) {
    this.$el.trigger("refresh.owl.carousel");
    if (
      this.props.owlMainAside &&
      prevProps.owlMainAside !== this.props.owlMainAside
    ) {
      this.setState(this.findImageHeight());
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    this.$el.trigger("destroy.owl.carousel");
  }

  render() {

    const height = {style: { height: `${this.state.height}px` }};
    const { owlMainAside } = this.props;
    console.log(owlMainAside)

    if (owlMainAside) {
      var url0 = owlMainAside[0].url;
      var url1 = owlMainAside[1].url;
      var urlImage0 = owlMainAside[0].urlToImage;
      var urlImage1 = owlMainAside[1].urlToImage;
      var title0 = owlMainAside[0].title.slice(0, 37).padEnd(40, "...");
      var title1 = owlMainAside[1].title.slice(0, 37).padEnd(40, "...");
      var description0 = owlMainAside[0].description;
      var description1 = owlMainAside[1].description;
      var date0 = this.dateFormat(owlMainAside[0].publishedAt);
      var date1 = this.dateFormat(owlMainAside[1].publishedAt);
    }

    return (
      <div id="owl-carousel-3" className="owl-carousel owl-theme center-owl-nav" ref={(el) => (this.el = el)}>
        <article className="article">
          <div className="article-img">
            <a href={url0}>
              <img src={urlImage0} alt={description0} {...height} />
            </a>
            <ul className="article-info">
              <li className="article-type"><i className="fa fa-file-text"></i></li>
            </ul>
          </div>
          <div className="article-body">
            <h4 className="article-title"><a href={url0}>{title0}</a></h4>
            <ul className="article-meta">
              <li><i className="fa fa-clock-o"></i> {date0}</li>
              <li><i className="fa fa-comments"></i> 1</li>
            </ul>
          </div>
        </article>
        <article className="article">
          <div className="article-img">
            <a href={url1}>
              <img src={urlImage1} alt={description1} {...height} />
            </a>
            <ul className="article-info">
              <li className="article-type"><i className="fa fa-file-text"></i></li>
            </ul>
          </div>
          <div className="article-body">
            <h4 className="article-title"><a href={url1}>{title1}</a></h4>
            <ul className="article-meta">
              <li><i className="fa fa-clock-o"></i> {date1}</li>
              <li><i className="fa fa-comments"></i> 33</li>
            </ul>
          </div>
        </article>
      </div>
    );
  }
}


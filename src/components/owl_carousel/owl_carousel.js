import React from 'react';

import $ from "jquery";
import jQuery from "jquery";
// import bootstrap from 'bootstrap';

import 'owl.carousel/dist/assets/owl.carousel.css';
// eslint-disable-next-line
const owl = require('owl.carousel');
// import 'imports?jQuery=jquery!owl.carousel';
// window.$ = window.jQuery=jquery;
// console.log(jQuery);

class OwlCarousel extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.owlCarousel();
  }

  // componentWillUnmount() {
  //   this.$el.somePlugin('destroy');
  // }

  render() {
    return <div ref={el => this.el = el} />;
  }
}

export default OwlCarousel;
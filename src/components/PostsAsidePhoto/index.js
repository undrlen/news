import React, {Component} from "react";

import "./styles.css";

export default class PostsAsidePhoto extends Component {

  state = {
    height: null
  };

  divRef = React.createRef();

  scheduled = null;

  resize = (e) => {
    if (!this.scheduled) {
      setTimeout(() => {
        this.setState({ height: (100 * this.divRef.current.clientWidth) / 4 / 100 });
        this.scheduled = null;
      }, 250);
    }
    this.scheduled = e;
  };

  findImageHeight = () => ({ height: (100 * this.divRef.current.clientWidth) / 4 / 100 });

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.eightRandomElements !== this.props.eightRandomElements) {
      this.setState(this.findImageHeight());
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }

  render() {
    const height = `${this.state.height}px`;
    const elements = this.props.eightRandomElements ? this.props.eightRandomElements.map(({url, urlToImage, description, source}, i) => {
      const key = (source.id || i) + Math.floor(Math.random() * 100000);
      return (
        <li key={key}>
          <a target="_blank" rel="noopener noreferrer" href={url} style={{height}}>
            <img src={urlToImage} alt={description} />
          </a>
        </li>
      );
    }) : null;

    return (
      <div className="widget galery-widget" ref={this.divRef}>
        <div className="widget-title">
          <h2 className="title">Flickr Photos</h2>
        </div>
        <ul>
          {elements}
        </ul>
      </div>
    );
  }
};


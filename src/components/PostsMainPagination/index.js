import React, { Component } from "react";

import PostsMainPaginationItem from "../PostsMainPaginationItem";
import NewsApi from "../../services/NewsApi";

class PostsMainPagination extends Component {
  services = new NewsApi();

  state = {
    active: 0,
    country: null,
  };

  loadItem = (i) => {
    this.setState({
      active: i,
    });
    return this.props.loadPage(i);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.country !== this.state.country) {
      this.setState({
        active: 0,
        country: this.props.country,
      });
    }
  }

  render() {
    const page = Math.floor(
      (this.services.countAllPopularPosts -
        this.services.countAsideMostReadPopularPosts) /
        4
    );
    let elements = [];
    for (let i = 0; i < page; i++) {
      let name = this.state.active === i ? "active" : null;
      let element = (
        <li key={i + 1} className={name}>
          <PostsMainPaginationItem i={i} loadPage={this.loadItem} />
        </li>
      );
      elements.push(element);
    }
    return (
      <div className="article-pagination">
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default PostsMainPagination;

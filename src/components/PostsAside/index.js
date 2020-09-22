import React from "react";

import OwlCarousel4 from "../OwlCarousel4";
import PostsAsidePhoto from "../PostsAsidePhoto";
import PostsAsideTweets from "../PostsAsideTweets";

const PostsAside = ({ country, eightRandomElements, tweets }) => {
  const asideTweets = tweets ? <PostsAsideTweets tweets={tweets} /> : null;
  return (
    <div className="col-md-4">
      <div className="widget">
        <div className="widget-title">
          <h2 className="title">Featured Posts</h2>
        </div>

        <OwlCarousel4 country={country} />
      </div>

      <PostsAsidePhoto eightRandomElements={eightRandomElements} />

      {asideTweets}
    </div>
  );
};

export default PostsAside;

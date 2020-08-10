import React from "react";

import PostsAsideOwl from '../PostsAsideOwl';
import PostsAsidePhoto from '../PostsAsidePhoto';
import PostsAsideTweets from '../PostsAsideTweets';

const PostsAside = (props) => {
  return (
    <div className="col-md-4">
      <div className="widget">
        <div className="widget-title">
          <h2 className="title">Featured Posts</h2>
        </div>

        <PostsAsideOwl />
      </div>

      <PostsAsidePhoto />

      <PostsAsideTweets />
    </div>
  );
};

export default PostsAside;

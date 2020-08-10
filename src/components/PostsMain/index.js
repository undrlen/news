import React from "react";

import PostsMainArticles from '../PostsMainArticles';
import PostsMainPagination from '../PostsMainPagination';

const PostsMain = ({ postsMainArticles, loadPage, country }) => {
  return (
    <div className="col-md-8">
      <div className="section-title">
        <h2 className="title">Popular Posts</h2>
      </div>

      <PostsMainArticles postsMainArticles={postsMainArticles} />

      <PostsMainPagination loadPage={loadPage} country={country} />
    </div>
  );
};

export default PostsMain;

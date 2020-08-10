import React from "react";

import PostsMain from '../PostsMain';
import PostsAside from '../PostsAside';

const Posts = ({ postsMainArticles, loadPage, country }) => {
  const postMain = postsMainArticles ? <PostsMain postsMainArticles={postsMainArticles} loadPage={loadPage} country={country} /> : null;
  // const postAside = postsMainArticles ? <PostsMain postsMainArticles={postsMainArticles} /> : null;
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {postMain}

          <PostsAside />
        </div>
      </div>
    </div>
  );
};

export default Posts;

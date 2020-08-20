import React from "react";

import PostsMain from '../PostsMain';
import PostsAside from '../PostsAside';

const Posts = ({ postsMainArticles, loadPage, country, eightRandomElements }) => {
  const postMain = postsMainArticles ? <PostsMain postsMainArticles={postsMainArticles} loadPage={loadPage} country={country} /> : null;
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {postMain}

          <PostsAside country={country} eightRandomElements={eightRandomElements} />
        </div>
      </div>
    </div>
  );
};

export default Posts;

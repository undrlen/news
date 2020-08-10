import React from 'react';


const PostsMainPaginationItem = ({ i, loadPage }) => {
  return <a href="#0" onClick={() => loadPage(i)}>{i + 1}</a>;
};

export default PostsMainPaginationItem;

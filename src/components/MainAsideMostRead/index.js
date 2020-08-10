import React from "react";

import MainAsideMostReadArticles from "../MainAsideMostReadArticles";
import OwlCarousel3 from "../OwlCarousel3";

const MainAsideMostRead = ({ mainAsideMostReadArticle, owlMainAside }) => {
  const asideMostReadArticles = mainAsideMostReadArticle ? (
    <MainAsideMostReadArticles
      mainAsideMostReadArticle={mainAsideMostReadArticle}
    />
  ) : null;
  return (
    <div className="widget">
      <div className="widget-title">
        <h2 className="title">Most Read</h2>
      </div>

      <OwlCarousel3 owlMainAside={owlMainAside} />
      {asideMostReadArticles}
    </div>
  );
};

export default MainAsideMostRead;

import React from "react";

import MainArticles from "../MainArticles";
import MainAside from "../MainAside";

const Main = ({
  mainArticlesCenter,
  mainArticlesLeft,
  mainArticlesRight,
  mainArticlesBottom,
  mainAsideMostReadArticle,
  owlMainAside
}) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <MainArticles
            mainArticlesCenter={mainArticlesCenter}
            mainArticlesLeft={mainArticlesLeft}
            mainArticlesRight={mainArticlesRight}
            mainArticlesBottom={mainArticlesBottom}
          />

          <MainAside mainAsideMostReadArticle={mainAsideMostReadArticle} owlMainAside={owlMainAside} />
        </div>
      </div>
    </div>
  );
};

export default Main;

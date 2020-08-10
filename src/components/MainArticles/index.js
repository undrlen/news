import React from "react";

import MainArticlesTop from "../MainArticlesTop";
import MainArticlesCenter from "../MainArticlesCenter";
import MainArticlesBottom from "../MainArticlesBottom";

const MainArticles = ({
  mainArticlesCenter,
  mainArticlesLeft,
  mainArticlesRight,
  mainArticlesBottom
}) => {
  const mainCenter = mainArticlesCenter ? (
    <MainArticlesCenter mainArticlesCenter={mainArticlesCenter} />
  ) : null;
  const mainTop =
    mainArticlesLeft && mainArticlesRight ? (
      <MainArticlesTop
        mainArticlesLeft={mainArticlesLeft}
        mainArticlesRight={mainArticlesRight}
      />
    ) : null;
  const mainBottom =
    mainArticlesBottom ? (
      <MainArticlesBottom
        mainArticlesBottom={mainArticlesBottom}
      />
    ) : null;
  return (
    <div className="col-md-8">
      {mainTop}

      {mainCenter}

      {mainBottom}
    </div>
  );
};

export default MainArticles;

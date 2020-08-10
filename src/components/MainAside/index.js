import React from "react";

import MainAsideSocial from "../MainAsideSocial";
import MainAsideSubscribe from "../MainAsideSubscribe";
import MainAsideMostRead from "../MainAsideMostRead";

const MainAside = ({ mainAsideMostReadArticle, owlMainAside }) => {
  return (
    <div className="col-md-4">
      <div className="widget center-block hidden-xs">
        <img className="center-block" src="./img/ad-1.jpg" alt="" />
      </div>

      <MainAsideSocial />

      <MainAsideSubscribe />

      <MainAsideMostRead mainAsideMostReadArticle={mainAsideMostReadArticle} owlMainAside={owlMainAside} />
    </div>
  );
};

export default MainAside;

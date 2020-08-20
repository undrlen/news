import React from "react";

import OwlCarousel2 from "../OwlCarousel2/";

const Video = ({country}) => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">

            <OwlCarousel2 country={country} />

        </div>
      </div>
    </div>
  );
};

export default Video;

import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from "../../images/no_image.jpg";
import "./styles.css";

const TrendTop = ({ forTrendTop }) => {
  const elements = (forTrendTop, dateFormat) => {
    return forTrendTop.map((item, i) => {
      let {
        title,
        description,
        urlToImage,
        publishedAt,
        url,
        source: { id },
      } = item;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      const published = dateFormat(publishedAt);
      const key = (id || i) + Math.floor(Math.random() * 100000);
      return (
        <div className="col-md-3 col-sm-6" key={key}>
          <article className="article">
            <div className="article-img">
              <a target="_blank" rel="noopener noreferrer" href={url}>
                <img src={urlToImage} alt={description} onError={(e) => { e.target.src = noPhoto }} />
              </a>
              <ul className="article-info">
                <li className="article-type">
                  <i className="fa fa-camera"></i>
                </li>
              </ul>
            </div>
            <div className="article-body">
              <h4 className="article-title">
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  {title}
                </a>
              </h4>
              <ul className="article-meta">
                <li>
                  <i className="fa fa-clock-o"></i> {published}
                </li>
                <li>
                  <i className="fa fa-comments"></i> 33
                </li>
              </ul>
            </div>
          </article>
        </div>
      );
    });
  };

  return (
    <DateFormatContext.Consumer>
      {(dateFormat) => {
        const itemList = forTrendTop ? elements(forTrendTop, dateFormat) : null;
        return <div className="row">{itemList}</div>;
      }}
    </DateFormatContext.Consumer>
  );
};

export default TrendTop;

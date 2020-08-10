import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from '../../images/no_image.jpg';

const TrendTop = ({ forTrendTop }) => {
  function elements(forTrendTop, dateFormat) {
    return forTrendTop.map((item, i) => {
      let { title, description, urlToImage, publishedAt, url } = item;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      const published = dateFormat(publishedAt);

      return (
        <div className="col-md-3 col-sm-6" key={i + 1}>
          <article className="article">
            <div className="article-img">
              <a target="_blank" rel="noopener noreferrer" href={url}>
                <img src={urlToImage} alt={description} />
              </a>
              <ul className="article-info">
                <li className="article-type">
                  <i className="fa fa-camera"></i>
                </li>
              </ul>
            </div>
            <div className="article-body">
              <h4 className="article-title">
                <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
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
  }

  return (
    <DateFormatContext.Consumer>
      {(dateFormat) => {
        const itemList = forTrendTop
          ? elements(forTrendTop, dateFormat)
          : forTrendTop;
        return <div className="row">{itemList}</div>;
      }}
    </DateFormatContext.Consumer>
  );
};

export default TrendTop;

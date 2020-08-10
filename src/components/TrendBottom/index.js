import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from '../../images/no_image.jpg';

const TrendBottom = ({ forTrendBottom }) => {
  function elements(forTrendBottom, dateFormat) {
    const articles = forTrendBottom.map((item) => {
      let { title, description, urlToImage, publishedAt, url } = item;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      const published = dateFormat(publishedAt);
      return (
        <article className="article widget-article">
          <div className="article-img">
            <a target="_blank" rel="noopener noreferrer" href={url}>
              <img src={urlToImage} alt={description} />
            </a>
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
      );
    });
    const result = [];
    for (let i = 0; i < articles.length; i++) {
      if (i % 2 === 0) {
        let article = (
          <div className="col-md-4 col-sm-6" key={i + 1}>
            {articles[i]}
            {articles[i + 1]}
          </div>
        );
        result.push(article);
      }
    }
    return result;
  }

  return (
    <DateFormatContext.Consumer>
      {(dateFormat) => {
        const itemList = forTrendBottom
          ? elements(forTrendBottom, dateFormat)
          : forTrendBottom;
        return <div className="row">{itemList}</div>;
      }}
    </DateFormatContext.Consumer>
  );
};

export default TrendBottom;

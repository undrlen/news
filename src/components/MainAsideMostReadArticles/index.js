import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from "../../images/no_image.jpg";
import "./styles.css";

const MainAsideMostReadArticles = ({ mainAsideMostReadArticle }) => {
  function elements(dateFormat) {
    let article = mainAsideMostReadArticle.map((art, i) => {
      let { title, urlToImage, description, publishedAt, url } = art;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      return (
        <article className="article widget-article" key={i + 1}>
          <div className="article-img">
            <a target="_blank" rel="noopener noreferrer" href={url}>
              <img src={urlToImage} alt={description} onError={(e) => { e.target.src = noPhoto }} />
            </a>
          </div>
          <div className="article-body">
            <h4 className="article-title">
              <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
            </h4>
            <ul className="article-meta">
              <li>
                <i className="fa fa-clock-o"></i> {dateFormat(publishedAt)}
              </li>
              <li>
                <i className="fa fa-comments"></i> 33
              </li>
            </ul>
          </div>
        </article>
      );
    });
    return article;
  }

  return (
    <DateFormatContext.Consumer>
      {(dateFormat) => {
        return <React.Fragment>{elements(dateFormat)}</React.Fragment>;
      }}
    </DateFormatContext.Consumer>
  );
};

export default MainAsideMostReadArticles;

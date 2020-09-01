import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from "../../images/no_image.jpg";
import "./styles.css";

const MainArticlesBottom = ({ mainArticlesBottom }) => {
  function elements(dateFormat) {
    const article = mainArticlesBottom.map((art, i) => {
      let { title, urlToImage, description, publishedAt, url } = art;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      return (
        <div className="col-md-4 col-sm-4" key={i + 1}>
          <article className="article">
            <div className="article-img">
              <a target="_blank" rel="noopener noreferrer" href={url}>
                <img src={urlToImage} alt={description} />
              </a>
              <ul className="article-info">
                <li className="article-type">
                  <i className="fa fa-file-text"></i>
                </li>
              </ul>
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
        </div>
      );
    });
    return article;
  }

  return (
    <DateFormatContext.Consumer>
      {(dateFormat) => {
        return <div className="row">{elements(dateFormat)}</div>;
      }}
    </DateFormatContext.Consumer>
  );
};

export default MainArticlesBottom;

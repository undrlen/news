import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from '../../images/no_image.jpg';

const MainArticlesCenter = ({ mainArticlesCenter }) => {
  const titleSection = mainArticlesCenter[0];
  const articles = mainArticlesCenter[1];
  function elements(dateFormat) {
    const article = articles.slice(0, 2).map((art, i) => {
      let { title, urlToImage, description, publishedAt, url } = art;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      return (
        <div className="col-md-6 col-sm-6" key={i + 1}>
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
              <h3 className="article-title">
                <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
              </h3>
              <ul className="article-meta">
                <li>
                  <i className="fa fa-clock-o"></i> {dateFormat(publishedAt)}
                </li>
                <li>
                  <i className="fa fa-comments"></i> 33
                </li>
              </ul>
              <p>{description}</p>
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
        return (
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">{titleSection}</h2>
              </div>
            </div>

            {elements(dateFormat)}
          </div>
        );
      }}
    </DateFormatContext.Consumer>
  );
};

export default MainArticlesCenter;

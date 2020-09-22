import React from "react";

import DateFormatContext from "../../contexts/DateFormatContext";
import noPhoto from '../../images/no_image.jpg';
import "./styles.css";

const MainArticlesTopLeft = ({ mainArticlesLeft }) => {
  const titleSection = mainArticlesLeft[0];
  const articles = mainArticlesLeft[1];
  let { title, urlToImage, description, publishedAt, url } = articles[0];
  urlToImage = urlToImage ? urlToImage : noPhoto;
  const ArticleTop = ({ dateFormat }) => {
    return (
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
    );
  };

  function elements(dateFormat) {
    const article = articles.slice(-2).map((art, i) => {
      let { title, urlToImage, description, publishedAt, url } = art;
      urlToImage = urlToImage ? urlToImage : noPhoto;
      const key = i + Math.floor(Math.random() * 100000);
      return (
        <article className="article widget-article" key={key}>
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
                <i className="fa fa-clock-o"></i>
                {dateFormat(publishedAt)}
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
        return (
          <div className="col-md-6 col-sm-6">
            <div className="section-title">
              <h2 className="title">{titleSection}</h2>
            </div>

            <ArticleTop dateFormat={dateFormat} />

            {elements(dateFormat)}
          </div>
        );
      }}
    </DateFormatContext.Consumer>
  );
};

export default MainArticlesTopLeft;

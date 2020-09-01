import React, { useContext } from "react";
import DateFormatContext from "../../contexts/DateFormatContext";
import "./styles.css";

const FooterTopFeaturedPosts = ({ footerFeaturedPosts }) => {
  const dateFormat = useContext(DateFormatContext);
  const elements = footerFeaturedPosts
    ? footerFeaturedPosts.map(
        (
          { url, urlToImage, description, title, publishedAt, source: { id } },
          i
        ) => {
          const key = (id || i) + Math.floor(Math.random() * 100000);
          return (
            <article className="article widget-article" key={key}>
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
                    <i className="fa fa-clock-o"></i> {dateFormat(publishedAt)}
                  </li>
                  <li>
                    <i className="fa fa-comments"></i> 33
                  </li>
                </ul>
              </div>
            </article>
          );
        }
      )
    : null;
  return (
    <div className="col-md-4">
      <div className="footer-widget">
        <div className="widget-title">
          <h2 className="title">Featured Posts</h2>
        </div>
        {elements}
      </div>
    </div>
  );
};

export default FooterTopFeaturedPosts;

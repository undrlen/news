import React from 'react';

import MyContext from '../../contexts/date_format_context';

const TrendTop = ({forTrendTop}) => {
  
  function elements(forTrendTop, dateFormat) {

    return forTrendTop.map((item, i) => {
      const {title, description, urlToImage, publishedAt} = item;
      const published = dateFormat(publishedAt);

      return (
        <div className="col-md-3 col-sm-6" key={i + 1}>
          
          <article className="article">
            <div className="article-img">
              <a href="#0">
                <img src={urlToImage} alt={description} />
              </a>
              <ul className="article-info">
                <li className="article-type"><i className="fa fa-camera"></i></li>
              </ul>
            </div>
            <div className="article-body">
              <h4 className="article-title"><a href="#0">{title}</a></h4>
              <ul className="article-meta">
                <li><i className="fa fa-clock-o"></i> {published}</li>
                <li><i className="fa fa-comments"></i> 33</li>
              </ul>
            </div>
          </article>
          
        </div>
      );

    });
  }

  return (
    <MyContext.Consumer>
      {
        (dateFormat) => {
          const itemList = forTrendTop ? elements(forTrendTop, dateFormat) : forTrendTop;
          return (
            <div className="row">
              {itemList}
            </div>
          );
        }
      }
    </MyContext.Consumer>
  );
};

export default TrendTop;
import React from "react";

const FooterTweet = ({tweets}) => {
  if (tweets) {
    var [firstTweet] = tweets.repos;
    var {link, name, tweet} = firstTweet;
    var linkAuthor = `https://www.twitter.com/${name.slice(1)}`;
  }
  return (
    <div className="footer-widget tweets-widget">
      <div className="widget-title">
        <h2 className="title">Recent Tweets</h2>
      </div>
      <ul>
        <li className="tweet">
          <i className="fa fa-twitter"></i>
          <div className="tweet-body">
            <p>
              <a href={linkAuthor} target="_blank" rel="noopener noreferrer">{name}</a> {tweet} <br />
              <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FooterTweet;
import React from "react";

const PostsAsideTweets = ({ tweets }) => {

  function elements(tweets) {
    return tweets.repos.map((el, i) => {
      const { name, link, tweet } = el;
      const linkAuthor = `https://www.twitter.com/${name.slice(1)}`;
      const shortTweet = tweet.lastIndexOf("pic.twitter.com") ? tweet.slice(0, tweet.lastIndexOf("pic.twitter.com")) : tweet;
      const key = i + Math.floor(Math.random() * 100000);
      return (
        <li className="tweet" key={key}>
          <i className="fa fa-twitter"></i>
          <div className="tweet-body">
            <p>
              <a href={linkAuthor} target="_blank" rel="noopener noreferrer">{name}</a> {shortTweet} <br /><a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            </p>
          </div>
        </li>
      );
    });
  }

  return (
    <div className="widget tweets-widget">
      <div className="widget-title">
        <h2 className="title">Recent Tweets</h2>
      </div>
      <ul>

        {elements(tweets)}

      </ul>
    </div>
  );
};

export default PostsAsideTweets;

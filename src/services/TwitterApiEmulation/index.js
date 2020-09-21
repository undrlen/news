const convert = require("html-to-json-data");
const { group, text, attr } = require("html-to-json-data/definitions");

const TwitterApiEmulation = () => {
  return fetch(`${process.env.PUBLIC_URL}/temp.html`)
    .then((res) => res.text())
    .then((body) => {
      return convert(body, {
        repos: group(".tweet", {
          name: text(".user-info .username"),
          tweet: text(".tweet-text"),
          link: attr('.tweet-text a[href^="https://t.co/"]', "href"),
        }).slice(0, 3),
      });
    })
    .catch(() => {
      return null;
    });
};

export default TwitterApiEmulation;

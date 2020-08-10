import React, { Component } from "react";

import Header from "../Header";
import OwlCarousel1 from "../OwlCarousel1";
import Trend from "../Trend";
import Main from "../Main";
import Video from "../Video";
import Posts from "../Posts";
import Footer from "../Footer";
import ServerError from "../ServerError";
import DateFormatContext from "../../contexts/DateFormatContext";
import NewsApi from "../../services/NewsApi";

export default class App extends Component {
  services = new NewsApi();

  state = {
    isError: false,
    country: null,
    language: null,
    mainArticlesLeft: null,
    mainArticlesRight: null,
    mainArticlesCenter: null,
    mainArticlesBottom: null,
    mainAsideMostReadArticle: null,
    postsAllMainArticles: null,
    postsOneMainArticles: null,
    owlGeneral: null,
    owlMainAside: null,
  };

  divRef = React.createRef();

  findPhoto = (state) => {
    function compareNumbers(a, b) {
      return b.naturalWidth - a.naturalWidth;
    }

    let images = this.divRef.current.getElementsByTagName("img");
    let imgs = [...images].sort(compareNumbers);

    let clearImgs = imgs
      .filter((img) => img.src !== "")
      .filter((img) => !img.src.includes("localhost"))
      .filter((img) => !img.src.includes("picsum"));

    const posts = [
      ...state.postsAllMainArticles,
      ...state.mainArticlesLeft[1],
      ...state.mainArticlesRight[1],
      ...state.mainArticlesCenter[1],
      ...state.mainArticlesBottom,
      ...state.mainAsideMostReadArticle,
    ];
    let owlAll = [];
    for (let img of clearImgs) {
      for (let itemPost of posts) {
        if (itemPost.urlToImage === img.src) {
          owlAll.push(itemPost);
        }
      }
    }
    const uniquePosts = owlAll.reduce(
      (unique, item) =>
        unique.some((el) => el === item) ? unique : [...unique, item],
      []
    );
    const owlGeneral = uniquePosts.slice(0, 3);
    const owlMainAside = uniquePosts.slice(3, 5);

    return {
      owlGeneral: owlGeneral,
      owlMainAside: owlMainAside,
    };
  };

  onChangeHeaderNav = async (header) => {
    const country = header
      ? this.services.headersApp.get(header).slice(-2).toLowerCase()
      : this.services.country;
    const language = header
      ? this.services.headersApp.get(header).slice(0, 2).toLowerCase()
      : this.services.language;

    try {
      const all = await Promise.allSettled([
        this.services.getMain(country),
        this.services.getMainBottom(language),
        this.services.getPopular(language),
      ]);
      const mainArticlesLeft = all[0].value[0] ? all[0].value[0] : null;
      const mainArticlesRight = all[0].value[1] ? all[0].value[1] : null;
      const mainArticlesCenter = all[0].value[2] ? all[0].value[2] : null;
      const mainArticlesBottom = all[1].value ? all[1].value : null;
      // const popular = all[2].value ? all[2].value : null;
      const mainAsideMostReadArticle = all[2].value.slice(0, 3)
        ? all[2].value.slice(0, 3)
        : null;
      const postsAllMainArticles = all[2].value.slice(3)
        ? all[2].value.slice(3)
        : null;
      const postsOneMainArticles = postsAllMainArticles.slice(0, 4)
        ? postsAllMainArticles.slice(0, 4)
        : null;

      this.setState({
        country,
        language,
        mainArticlesLeft,
        mainArticlesRight,
        mainArticlesCenter,
        mainArticlesBottom,
        mainAsideMostReadArticle,
        postsAllMainArticles,
        postsOneMainArticles,
      });

    } catch(e) {
      this.setState({isError: true});
    }

  };

  loadPage = (i) => {
    this.setState(({ postsAllMainArticles }) => {
      const postsOneMainArticles = postsAllMainArticles.slice(i * 4, i * 4 + 4);
      return {
        postsOneMainArticles,
      };
    });
  };

  dateFormat(publishedAt) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(Date.parse(publishedAt));
    const monthN = months.filter((month, i) => i === date.getMonth());

    return `${monthN} ${date.getDate()}, ${date.getFullYear()}`;
  }

  componentDidMount() {
    this.onChangeHeaderNav();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.postsAllMainArticles !== this.state.postsAllMainArticles &&
        !prevState.owlGeneral && !this.state.isError) ||
      (prevState.owlGeneral === this.state.owlGeneral && !this.state.isError)
    ) {
      // this.findPhoto();
      this.setState((state) => this.findPhoto(state));
    }
  }

  render() {
    const {
      isError,
      country,
      mainArticlesCenter,
      mainArticlesRight,
      mainArticlesLeft,
      mainArticlesBottom,
      mainAsideMostReadArticle,
      postsOneMainArticles,
      owlMainAside,
      owlGeneral,
    } = this.state;
console.log(owlMainAside)
    if (isError) {
      return <ServerError />;
    }
    return (
      <DateFormatContext.Provider value={this.dateFormat}>
        <div ref={this.divRef}>
          <Header onChangeHeaderNav={this.onChangeHeaderNav} />

          <OwlCarousel1 owlGeneral={owlGeneral} />

          <Trend country={country} />

          <Main
            mainArticlesCenter={mainArticlesCenter}
            mainArticlesLeft={mainArticlesLeft}
            mainArticlesRight={mainArticlesRight}
            mainArticlesBottom={mainArticlesBottom}
            mainAsideMostReadArticle={mainAsideMostReadArticle}
            owlMainAside={owlMainAside}
          />

          <div className="visible-lg visible-md">
            <img className="center-block" src="" alt="" />
          </div>

          <Video />

          <Posts
            postsMainArticles={postsOneMainArticles}
            loadPage={this.loadPage}
            country={country}
          />

          <Footer />

          <div id="back-to-top"></div>
        </div>
      </DateFormatContext.Provider>
    );
  }
}

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
import "owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
    eightRandomElementsForFooter: null,
    eightRandomElementsForAside: null,
    dataForComparison: null,
  };

  findPhoto = (state) => {
    function compareNumbers(a, b) {
      return b.naturalWidth - a.naturalWidth;
    }

    const images = document.images;
    const imgs = [...images].sort(compareNumbers);

    const clearImgs = imgs
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

    const owlAll = [];
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

    const eightRandomElementsForAside = new Set();
    const eightRandomElementsForFooter = new Set();
    for (let i = 0; i < uniquePosts.length; i++) {
      if (eightRandomElementsForAside.size < 8) eightRandomElementsForAside.add(
        uniquePosts[Math.floor(Math.random() * uniquePosts.length)]
      );
      if (eightRandomElementsForFooter.size < 8) eightRandomElementsForFooter.add(
        uniquePosts[Math.floor(Math.random() * uniquePosts.length)]
      );
    }
    return {
      eightRandomElementsForAside: Array.from(eightRandomElementsForAside),
      eightRandomElementsForFooter: Array.from(eightRandomElementsForFooter),
      owlGeneral,
      owlMainAside,
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
      
      const getMain = all[0].value.map(([str, arr]) => [str, arr.filter((el) => el.urlToImage).slice(0, 3)]);
      const getMainArray = [...getMain[0][1], ...getMain[1][1], ...getMain[2][1]];
      const getMainBottom = all[1].value.filter((el) => el.urlToImage).slice(0, 3);
      const getPopular = all[2].value.filter((el) => el.urlToImage).filter((elem) => !getMainArray.some((element) => elem.url === element.url));
      const dataForComparison = [...getMainArray, ...getMainBottom, ...getPopular];

      const mainArticlesLeft = getMain[0] ? getMain[0] : null;
      const mainArticlesRight = getMain[1] ? getMain[1] : null;
      const mainArticlesCenter = getMain[2] ? getMain[2] : null;
      const mainArticlesBottom = getMainBottom ? getMainBottom : null;
      const mainAsideMostReadArticle = getPopular.slice(0, 3)
        ? getPopular.slice(0, 3)
        : null;
      const postsAllMainArticles = getPopular.slice(3)
        ? getPopular.slice(3)
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
        dataForComparison
      });
    } catch (e) {
      this.setState({ isError: true });
      // console.log(e.message);
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
        !prevState.owlGeneral &&
        !this.state.isError) ||
      (prevState.owlGeneral === this.state.owlGeneral && !this.state.isError)
    ) {
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
      eightRandomElementsForAside,
      eightRandomElementsForFooter,
      dataForComparison
    } = this.state;

    if (isError) {
      return <ServerError />;
    }
    return (
      <DateFormatContext.Provider value={this.dateFormat}>
        <div>
          <Header onChangeHeaderNav={this.onChangeHeaderNav} />

          <OwlCarousel1 owlGeneral={owlGeneral} />

          <Trend country={country} dataForComparison={dataForComparison} />

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

          <Video country={country} />

          <Posts
            postsMainArticles={postsOneMainArticles}
            loadPage={this.loadPage}
            country={country}
            eightRandomElements={eightRandomElementsForAside}
          />

          <Footer eightRandomElements={eightRandomElementsForFooter} footerFeaturedPosts={owlGeneral} />

          <div id="back-to-top"></div>
        </div>
      </DateFormatContext.Provider>
    );
  }
}

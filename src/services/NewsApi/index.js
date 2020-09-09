
import {key} from "./key.js";

export default class NewsApi {
  _apiBase = "http://newsapi.org/v2";
  _endpointTop = "/top-headlines";
  _endpointEvery = "/everything";
  _key = key;
  _pageSize = 10;
  country = window.navigator.language.slice(-2).toLowerCase();
  language = window.navigator.language.slice(0, 2).toLowerCase();
  countAllPopularPosts = 20;
  countAsideMostReadPopularPosts = 3;

  headersTrend = new Map([
    ["ALL", "general"],
    ["SPORT", "sport"],
    ["HEALTH", "health"],
    ["BUSINESS", "business"],
    ["SCIENCE", "science"],
    ["TECHNOLOGY", "technology"],
    ["ENTERTAINMENT", "entertainment"],
  ]);

  headersApp = new Map([
    ["USA", "en-US"],
    ["GERMANY", "de-DE"],
    ["FRANCE", "fr-FR"],
    ["UNITED KINGDOM", "en-GB"],
    ["RUSSIA", "ru-RU"],
    ["ITALY", "it-IT"],
    ["ARGENTINA", "es-AR"],
    ["BRAZIL", "pt-BR"],
  ]);

  getTopResource = async (category, country, pageSize) => {
    const res = await fetch(
      `${this._apiBase}${this._endpointTop}?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${this._key}`
    );

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._endpointTop}, received ${res.status}`
      );
    }

    return await res.json();
  };

  getEverySearchResource = async (language, pageSize, search) => {
    const res = await fetch(
      `${this._apiBase}${this._endpointEvery}?q=${encodeURIComponent(search)}&language=${language}&sortBy=popularity&pageSize=${pageSize}&apiKey=${this._key}`
    );

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._endpointEvery}, received ${res.status}`
      );
    }

    return await res.json();
  };

  getTrends = async (header = "ALL", country = this.country, pageSize = 20) => {
    let category = this.headersTrend.get(header);
    const trend = await this.getTopResource(category, country, pageSize);
    return await trend.articles;
  };

  getMain = async (country = this.country) => {
    const headers = Array.from(this.headersTrend);
    const randomHeaders = [];
    for ( ; ; ) {
      let count = Math.ceil(Math.random() * (headers.length - 1));
      let randomElement = headers[count];
      if (!randomHeaders.includes(randomElement)) randomHeaders.push(randomElement);
      if (randomHeaders.length > 2) break;
    }
    
    const mainArticles = [];
    for (let [header, ] of randomHeaders) {
      mainArticles.push([header, await this.getTrends(header, country, 6)]);
    }

    return Promise.all(mainArticles);
  };

  getMainBottom = async (language = this.language) => {
    const every = await this.getEverySearchResource(language, 6, "politics");
    return await every.articles;
  };

  getPopular = async (language = this.language) => {
    const every = await this.getEverySearchResource(language, this.countAllPopularPosts, "news AND (sport OR science)");
    return await every.articles;
  };
}

export default class Services {
  
  _apiBase = 'http://newsapi.org/v2';
  _endpoint = '/top-headlines';
  _country = 'us';
  _key = 'cee304d3adbd4b2394971ac3385dde11';
  _pageSize = 10;

  headersTrend = new Map([
    ['ALL', 'general'],
    ['SPORT', 'sport'],
    ['HEALTH', 'health'],
    ['BUSINESS', 'business'],
    ['SCIENCE', 'science'],
    ['ENTERTAINMENT', 'entertainment'],
  ]);

  getResource = async (category) => {
    const res = await fetch(`${this._apiBase}${this._endpoint}?country=${this._country}&category=${category}&pageSize=${this._pageSize}&apiKey=${this._key}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._endpoint}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getTrends = async (header = 'ALL') => {
    let category = this.headersTrend.get(header);
    const trend = await this.getResource(category);
    return await trend.articles;
  };

}

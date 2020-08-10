import React, { Component } from "react";

import NewsApi from "../../services/NewsApi";
import TrendHeader from "../TrendHeader";
import TrendTop from "../TrendTop";
import TrendBottom from "../TrendBottom";

export default class Trend extends Component {
  services = new NewsApi();

  state = {
    forTrendTop: null,
    forTrendBottom: null,
  };

  componentDidMount() {
    this.onChangeRequest('ALL');
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.country !== prevProps.country) {
      this.onChangeRequest('ALL');
    }
  }

  onChangeRequest = (header) => {
    this.services.getTrends(header, this.props.country).then((trend) => {
      this.setState({
        forTrendTop: trend.slice(0, 4),
        forTrendBottom: trend.slice(4),
      });
    });
  };

  render() {
    let { forTrendTop, forTrendBottom } = this.state;

    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Trending Posts</h2>

                <TrendHeader
                  headers={this.services.headersTrend}
                  onChangeRequest={this.onChangeRequest}
                  country={this.props.country}
                />
              </div>

              <div className="tab-content">
                <div id="tab1" className="tab-pane fade in active">
                  <TrendTop forTrendTop={forTrendTop} />

                  <TrendBottom forTrendBottom={forTrendBottom} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

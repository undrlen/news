import React, { Component } from 'react';

import Services from '../../services';
import TrendHeader from '../trend_header';
import TrendTop from '../trend_top';
import TrendBottom from '../trend_bottom';
import MyContext from '../../contexts/date_format_context';

export default class Trend extends Component {

  services = new Services();
  dateFormat(publishedAt) {
    const months= ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    const date = new Date(Date.parse(publishedAt));
    const monthN = months.filter((month, i) => i === date.getMonth());

    return `${monthN} ${date.getDate()},${date.getFullYear()}`;
  }
  
  state = {
    forTrendTop: null,
    forTrendBottom: null
  };

  componentDidMount() {
    this.services
      .getTrends()
      .then((trend) => {
        this.setState({
          forTrendTop: trend.slice(0, 4),
          forTrendBottom: trend.slice(4)
      });
    });
  }

  onChangeItem = (header) => {
    console.log(header);
    this.services
      .getTrends(header)
      .then((trend) => {
        this.setState({
          forTrendTop: trend.slice(0, 4),
          forTrendBottom: trend.slice(4)
      });
    });
  };

  render() {
    const {forTrendTop, forTrendBottom} = this.state;

    return (
      <MyContext.Provider value={this.dateFormat} >
        <div className="section">
          
          <div className="container">
            
            <div className="row">
              
              <div className="col-md-12">
                
                <div className="section-title">
                  <h2 className="title">Trending Posts</h2>

                  <TrendHeader headers={this.services.headersTrend} onChangeItem={this.onChangeItem} />
                  
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
      </MyContext.Provider>
    );
  }

}

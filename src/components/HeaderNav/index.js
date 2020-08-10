import React, { Component } from "react";

import HeaderNavItem from "../HeaderNavItem";
import NewsApi from "../../services/NewsApi";

class HeaderNav extends Component {
  state = {
    head: null,
  };

  onChangeHeaders = (head) => {
    this.setState({
      head: head
    });
    return this.props.onChangeHeaderNav(head);
  };

  render() {
    let { head } = this.state;

    const services = new NewsApi();

    const elements = Array.from(services.headersApp.keys()).map((el, i) => {
      let active;
      if (head) {
        active = head === el ? "active" : null;
      } else {
        const country = services.country;
        const item = Array.from(services.headersApp.values())
          .findIndex((value) => value.includes(country.toUpperCase()));
        active = item === i ? "active" : null;
      }

      return (
        <li key={i + 1} className={active}>
          <HeaderNavItem
            header={el}
            onChangeHeaderNav={this.onChangeHeaders}
          />
        </li>
      );
    });

    return (
      <div id="nav-header">
        <div className="container">
          <nav id="main-nav">
            <div className="nav-logo">
              <a href="#0" className="logo">
                <img src="./img/logo-alt.png" alt="" />
              </a>
            </div>
            <ul className="main-nav nav navbar-nav">{elements}</ul>
          </nav>
          <div className="button-nav">
            <button className="search-collapse-btn">
              <i className="fa fa-search"></i>
            </button>
            <button className="nav-collapse-btn">
              <i className="fa fa-bars"></i>
            </button>
            <div className="search-form">
              <form>
                <input
                  className="input"
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderNav;

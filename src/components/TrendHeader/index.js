import React, { Component } from "react";

import TrendHeaderItem from "../TrendHeaderItem";

class TrendHeader extends Component {
  state = {
    head: null,
  };

  onChangeHeaders = (head) => {
    this.setState({
      head: head,
    });
    return this.props.onChangeRequest(head);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.country !== this.props.country) {
      this.setState({
        head: null,
      });
    }
  }

  render() {
    let { headers } = this.props;
    let { head } = this.state;

    const elements = Array.from(headers.keys()).map((el, i) => {
      let active;
      if (head) {
        active = head === el ? "active" : null;
      } else {
        active = 0 === i ? "active" : null;
      }

      return (
        <li key={i + 1} className={active}>
          <TrendHeaderItem header={el} onChangeItem={this.onChangeHeaders} />
        </li>
      );
    });

    return <ul className="tab-nav pull-right">{elements}</ul>;
  }
}

export default TrendHeader;

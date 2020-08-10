import React from 'react';

const TrendHeaderItem = ({ header, onChangeItem }) => {

  return <a data-toggle="tab" href="#0tab1" onClick={() => onChangeItem(header)}>{header}</a>;

};

export default TrendHeaderItem;
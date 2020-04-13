import React from 'react';

import TrendHeaderItem from '../trend_header_item'

const TrendHeader = ({ headers, onChangeItem }) => {

  const elements = Array.from(headers.keys()).map((el, i) => {
    const active = i === 0 ? 'active' : null;

    return (
      <li key={i + 1} className={active}>
        <TrendHeaderItem 
          header={el}
          onChangeItem={() => onChangeItem(el)} 
        />
      </li>
    );
  });

  return (

    <ul className="tab-nav pull-right">
      { elements }
    </ul>

  );
};

export default TrendHeader;
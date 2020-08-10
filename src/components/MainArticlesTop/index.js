import React from 'react';

import MainArticlesTopLeft from '../MainArticlesTopLeft';
import MainArticlesTopRight from '../MainArticlesTopRight';

const MainArticlesTop = ({ mainArticlesLeft, mainArticlesRight }) => {
  return (
    <div className="row">
        
      <MainArticlesTopLeft mainArticlesLeft={mainArticlesLeft} />
      
      <MainArticlesTopRight mainArticlesRight= {mainArticlesRight} />
      
    </div>
  );
};

export default MainArticlesTop;
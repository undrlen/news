import React from 'react';

import './styles.css';


const ServerError = props => {
  return (
    <h3 className="server_error">The server is not responding. Please try again later.</h3>
  );
};

export default ServerError;

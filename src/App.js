import React from 'react';

import './styles/main.scss';

const App = (props) => {
  return (
    <div className="app">
      {props.children}
    </div>
  );
};

export default App

import React from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyAjik3pVy2w9ehRBcToBxexMLC556PshY0';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));

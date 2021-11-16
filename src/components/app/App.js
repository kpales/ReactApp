import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import SearchBar from '../BusinessList/BusinessList';
import BusinessList from '../SearchBar/SearchBar'

function App() {
  return (
      <div className="App">
        <h1>ravenous</h1>
          <BusinessList />
        <SearchBar />

      </div>
  );
}

export default App;

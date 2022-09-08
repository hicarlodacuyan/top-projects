import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className='background'></div>
    </div>
  );
};

export default App;

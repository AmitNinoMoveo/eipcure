import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';

function App() {
  return (
    <div className="App flex column flex-start w-all">
      <Header />
      <HomePage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

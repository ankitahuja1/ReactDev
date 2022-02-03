import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import SimpleBottomNavigation from './SimBottomNavigation';
import BlsCard from './BlsCard'
ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <BlsCard />
    <SimpleBottomNavigation/>
  </React.StrictMode>,
  document.getElementById('root')
);
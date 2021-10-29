import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DisplayChoice from './components/DisplayChoice';
import Header from './components/Header';
import ChoiceMaker from "./components/ChoiceMaker";



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <ChoiceMaker />
      <DisplayChoice />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
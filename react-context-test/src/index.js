import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonContext from './contexts/PersonContext';

const persons=[
  {id:0 , name:'mark', age:39},
  {id:1 , name:'ugo', age:40},
]

const cities = [
  {id:0 , name:'seoul'},
  {id:1 , name:'busan'}
]


ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider value={{p : persons , c : cities}}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

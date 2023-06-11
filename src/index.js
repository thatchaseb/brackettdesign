import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.addEventListener("DOMContentLoaded", function(){
  var replacers = document.querySelectorAll('[data-replace]');
  for(var i=0; i<replacers.length; i++){
      let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
      Object.keys(replaceClasses).forEach(function(key) {
          replacers[i].classList.remove(key);
          replacers[i].classList.add(replaceClasses[key]);
      });
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

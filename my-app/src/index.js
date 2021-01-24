import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



/* var app = (
  <div>
    <App img={img} name={this.state.trainees[0].name} />
    <App img={img} name="Ayla" />
  </div>
); */
ReactDOM.render( <App /> ,document.getElementById('root'));
/* ReactDOM.render(
  <React.StrictMode>
   <App img={img} name="Ayla" />
    <App img={img} name="Ayla" />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

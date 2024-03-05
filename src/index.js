import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
// import Result from './Result'
// import App2 from './App2';
// import App1 from './App1';
// import Calc from './Calc';
// import reportWebVitals from './reportWebVitals';
import Block from './Block';
import EstoreHeader from './EstoreHeader';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1 a={2} b={2}/> */}
    {/* <Calc a={2} b={2}/> */}

    {/* <Result marks={60}/> */}
    {/* <App2 userName={"John"}/> */}
    {/* <App3 names={["Hello", "Hai"]}/> */}
    {/* <App3 names={{name:"Hello", age:20}}/> */}
    {/* <App4/> */}
    {/* <App5/> */}
    <EstoreHeader/>
    <Block/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

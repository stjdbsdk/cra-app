import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
//import './01/cra_cls_js/style.css'
//import './01/cra_cls_jsx/style.css'
//import './01/cra_fun_js/style.css'
import './01/cra_fun_jsx/style.css'
import reportWebVitals from './reportWebVitals';
//import Wrap from './01/cra_cls_js/Wrap';
//import Wrap from './01/cra_cls_jsx/Wrap';
//import Wrap from './01/cra_fun_js/Wrap';
import Wrap from './01/cra_fun_jsx/Wrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
    <Wrap />
  // </React.StrictMode>
);

reportWebVitals();
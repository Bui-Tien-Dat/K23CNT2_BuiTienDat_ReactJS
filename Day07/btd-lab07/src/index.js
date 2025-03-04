import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import BtdApp from './BtdApp';

const btd_root = ReactDOM.createRoot(document.getElementById('btd_root'));
btd_root.render(
  <React.StrictMode>
  <BtdApp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppuS from './AppuS';
// import AppuE from './AppuE';
// import AppcA from './ApptcA';
// import AppRef from './AppR';
// import AppM from './AppM';
// import AppC from './AppCall';
// import AppRe from './AppRe';
// import AppCH from './AppCH';
// import AppProp from './AppProp';
import AppMod from './AppMod';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppuS/> */}
    {/* <AppuE/> */}
    {/* <AppcA/> */}
    {/* <AppRef/> */}
    {/* <AppM/> */}

    {/* <AppC/> */}
    {/* <AppRe/> */}
    {/* <AppCH/> */}
    {/* <AppProp/> */}
    <AppMod/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

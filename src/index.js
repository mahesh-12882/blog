import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Context, Provider } from './context';
import { Home } from './Home';
// import { UserApi } from './machineRoundQuestions/APIs/UserApi';
// let Context = React.createContext({ userName: "developer" });
import { Provider } from 'react-redux';

import { store } from './Store/configureStore';
// import { stopReportingRuntimeErrors } from "react-error-overlay";

// console.log("process.env.NODE_ENV",process.env.NODE_ENV)
// if (process.env.NODE_ENV === "development") {
//   stopReportingRuntimeErrors(); // disables error overlays
// }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Provider value={{ userName: "Mahesh" }}>
      <App />
    </Provider>
     <UserApi/> */}

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

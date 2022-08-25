import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LaunchDetails from './routes/launch-details';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/launch-details' element={<LaunchDetails launchid={''} />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
reportWebVitals();

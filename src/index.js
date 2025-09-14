import './index.css';
import reportWebVitals from './reportWebVitals';

import React from 'react';
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import UserForm from "./pages/UserForm";
import ModuleContent from "./pages/ModuleContent";
import VideoDemo from "./pages/VideoDemo";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<UserForm />} />
        <Route path="module" element={<ModuleContent />} />
        <Route path="videos" element={<VideoDemo />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

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

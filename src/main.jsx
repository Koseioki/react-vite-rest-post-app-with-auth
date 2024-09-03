// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter basename={import.meta.env.DEV ? "/" : "/react-vite-rest-post-app-with-auth/"}>
//     <App />
//     </BrowserRouter>
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.DEV ? "/" : "/react-vite-rest-post-app-with-auth/"}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

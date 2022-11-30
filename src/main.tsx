import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import './style/reset.css'
import {BrowserRouter, Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

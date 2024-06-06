import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GifContextProvider from './contexts/GifContext.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GifContextProvider>
        <App />
      </GifContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

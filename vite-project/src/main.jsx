import React, { createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GifContextProvider from './contexts/GifContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifContextProvider>
      <App />
    </GifContextProvider>
  </React.StrictMode>,
)

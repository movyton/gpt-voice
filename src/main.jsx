import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import speechSettings from './speechSettings.js'
import ErrorPage from './ErrorPage.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {!speechSettings ? <ErrorPage /> : <App />}
  </React.StrictMode>
)

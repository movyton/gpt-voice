import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import recognition from './Comps/APIs/speechSettings.js'
import NotSupportedBrowser from './Comps/otherComps/NotSupportedBrowser.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {!recognition ? <NotSupportedBrowser /> : <App />}
  </React.StrictMode>
)

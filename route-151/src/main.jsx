import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Create a root element with React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'))

// Set data-theme attribute to document for DaisyUI
document.documentElement.setAttribute('data-theme', 'mytheme')

// Render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

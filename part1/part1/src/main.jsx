/*

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

*/

import ReactDOM from 'react-dom/client'

import App from './App'

// Renderiza su contenido dentro del elemento div,
// definido en el archivo index.html, que tiene el valor
// 'root' en el atributo id.
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
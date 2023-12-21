import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import axios from 'axios'

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) */

const promise = axios.get('https://restcountries.com/v3.1/all')
console.log(promise) // para asegurarse de que funciona la conexión

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
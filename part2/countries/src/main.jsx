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

const promise = axios.get('http://localhost:3001/posts')
console.log(promise) // para asegurarse de que funciona la conexión

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
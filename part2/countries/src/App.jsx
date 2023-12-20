import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  // tiene la lista de países completa
  const [countries, getCountries] = useState([])
  // el país que se busca
  const [country, setCountry] = useState('')
  // const [showAll, setShowAll] = useState(true)

  console.log('countries', countries)

  const handleChange = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  const searchCountry = (event) => {
    event.preventDefault()
    const nameCountry = {
      name: country
    }

    console.log('nameCountry', nameCountry.name)
  }

  // Toma la lista completa de países y lo almacena en countries
  useEffect(
    () => {
      console.log('effect')
      // axios.get inicia la búsqueda de datos del servidor
      axios
        .get('https://restcountries.com/v3.1/all')
        // controlador de eventos para la operación
        .then(response => {
          console.log('promise fulfilled')
          getCountries(response.data)
        })
    }, [])
  // console.log('render', countries.length, 'countries')

  return (
    <>
      <p>
        Find countries
      </p>
      <form onSubmit={searchCountry}>
        <input value={country} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default App

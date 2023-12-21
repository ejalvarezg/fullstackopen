import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

// countries: alberga toda la base de datos
// country: el nombre del país que se busca
// searchCountry: el formulario para buscar países
// handleChange: para habilitar la escritura del form

function App() {
  const [countries, getCountries] = useState([])
  const [country, setCountry] = useState('type a country')
  // const [showAll, setShowAll] = useState(true)


  console.log('countries', countries)


  const searchCountry = (event) => {
    event.preventDefault()
    const nameCountry = {
      name: country
    }
    console.log('nameCountry', nameCountry.name)
  }


  const handleChange = (event) => {
    console.log('typing', event.target.value)
    setCountry(event.target.value)
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

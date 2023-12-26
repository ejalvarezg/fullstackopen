import { useState, useEffect } from 'react'
import axios from 'axios'
import DeleteButton from './components/DeleteButton'
import personService from './services/phones'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '1123456789' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  /*useEffect(
    () => {
      console.log('effect')
      // axios.get inicia la búsqueda de datos del servidor
      axios
        .get('http://localhost:3001/persons')
        // controlador de eventos para la operación
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
    }, []) */
    useEffect(
      () => {
        personService
        .getAll() // Notar que la URL donde está la base se ve en ./services/phones
        .then(initialPersons => {
          setPersons(initialPersons)
        })
      }, [])
  console.log('render', persons.length, 'people')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const repetido = persons.filter(person => person.name === personObject.name)
    console.log('repetido: ', repetido)
    console.log('chequeo...')
    if (repetido.length > 0) {
      console.log(repetido.name)
      alert('That name already exists')
      setNewName('')
      setNewNumber('')
      setPersons()
    }
    // Agrega persona y número al servidor
    else { 
      console.log('no repetido')
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          name: <input value={newName} onChange={handleNewName} />
        <div>
          phone: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map(person =>
          <p key = {person.name}> {person.name}: {person.number} </p>
        )}
      </>
      <div>debug: {newName} {newNumber} </div>
    </>
  )
}

export default App
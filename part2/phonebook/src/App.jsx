import { useState, useEffect } from 'react'
import axios from 'axios' // => No se requiere porque la comunicación con el servidor está en componente phones.jsx
import DeleteButton from './components/DeleteButton'
import personService from './services/phones'

const Persons = ({ person, removeContact }) => {
  return (
    <p>
      {person.name} {person.number} <button onClick={removeContact}>delete</button>
    </p>
  )
}


const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '1123456789' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(
    () => {
      personService
        .getAll() // Notar que la URL donde está la base se ve en ./services/phones
        .then(initialPersons => {
          setPersons(initialPersons)
        })
    }, [])
  console.log(persons)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    /*
      VERIFICACIÓN DE NOMBRE REPETIDO
    */

    const repetido = persons.filter(person => person.name === personObject.name)
    console.log('repetido: ', repetido)
    console.log('chequeo...')

    if (repetido.length > 0) {
      console.log(repetido.name)
      alert('That name already exists')
      setPersons()
      setNewName('')
      setNewNumber('')
    }

    // Agrega persona y número al servidor (ya verificado que no existe)
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

  const deleteContact = (id) => {
    console.log(`Contact with ${id} needs to be deleted`)
    const url = `http://localhost:3002/persons/${id}`
    const contact = persons.find(c => c.id === id)
    const deletedContact = { ...contact }

    console.log('deleted', deletedContact)

    if (window.confirm(`Are you sure you want to delete ${deletedContact.name}`)) {
      /* personService
        .borrar({persons, id})
        .then(thePersons => {
          setPersons(thePersons)
        }) */
      axios
        .delete(url)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
    setNewName('')
    setNewNumber('')

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
          <Persons key={person.id} person={person} removeContact={() => deleteContact(person.id)} />
        )}
      </>
    </>
  )
}

export default App
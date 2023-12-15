import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }

    const repetido = persons.filter(person => person.name === personObject.name)
    console.log('repetido: ', repetido)
    console.log('chequeo...')
    if (repetido.length > 0) {
      console.log('repetido')
      console.log(repetido.name)
      alert('That name already exists')
      setPersons()
    }
    else { 
      console.log('no repetido')
      setPersons(persons.concat(personObject))
    }
    setNewName('')
  }

  const handleNewPerson = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <>
        {persons.map(person =>
          <p key = {person.name}>{person.name}</p>
        )}
      </>
      <div>debug: {newName}</div>
    </>
  )
}

export default App
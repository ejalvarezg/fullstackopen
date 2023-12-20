// import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(
    () => {
      console.log('effect')
      // axios.get inicia la búsqueda de datos del servidor
      axios
        .get('http://localhost:3001/notes')
        // controlador de eventos para la operación
        .then(response => {
          console.log('promise fulfilled')
          setNotes(response.data)
        })
    }, [])
  console.log('render', notes.length, 'notes')

  // Código equivalente:
  /* useEffect(() => {
  console.log('effect')

  const eventHandler = response => {
    console.log('promise fulfilled')
    setNotes(response.data)
  }

  const promise = axios.get('http://localhost:3001/notes')
  promise.then(eventHandler)
  }, []) */

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  // condicional: const result = condition ? val1 : val2
  // Es decir, si showAll = true, entonces se muestran todas las notas
  // si es false, solo se muestran las importantes.
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important) //important es booleano
  
  // controlador de eventos que sincroniza los cambios realizados en la entrada
  // con ello, la nota es editable
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // setShowAll(!showAll) => cambia el valor de verdad de showAll
  // show {showAll ? 'important' : 'all' } => texto del botón según el estado
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>

        {notesToShow.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App
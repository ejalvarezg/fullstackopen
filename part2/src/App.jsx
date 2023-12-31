// import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Notification from './components/Notification'
import noteService from './services/notes'


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2023</em>
    </div>
  )
}



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')




  useEffect(
    () => {
      noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
    }, [])
  console.log('render', notes.length, 'notes')


  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    // Se crea una copia de la nota, con la modificación (important)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote).then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      // Tratamiento de errores
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        // errorMessage volverá a ser null en 5 segundos...
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        // eliminando la nota que no está en el servidor (se hace al detectar el error)
        setNotes(notes.filter(n => n.id !== id))
      })
  }



  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
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
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>

        {notesToShow.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>

      <Footer />
    </div>
  )
}

export default App
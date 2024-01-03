import React from 'react'

/* const Note = ({ note }) => {
  return <li>{note.content}</li>
} */

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'not important' : 'important'

  return (
    <li className = 'note'>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note
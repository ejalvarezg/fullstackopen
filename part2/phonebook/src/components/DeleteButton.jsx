import React from 'react'

const DeleteButton = ({ persons, setPersons, person }) => {
    const idPerson = person.id
    const newPersons = setPersons(persons.filter(n => n.id !== idPerson))

    return (
        <li>
            {newPersons.content} 
            <button onClick={setPersons}>Eliminar</button>
        </li>
    )
}

export default Note
import React from 'react'

// deletePerson es el controlador de eventos

const DeleteButton = ({ persons, setPersons, person, deletePerson }) => {
    const idPerson = person.id
    if (deletePerson) {
        setPersons(persons.filter(n => n.id !== idPerson))
    }

    return (
        <li>
            {person.content} 
            <button onClick={deletePerson}>Eliminar</button>
        </li>
    )
}

export default DeleteButton
import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

/* const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
} */

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const borrar = ({persons, id}) => {
  const url = `http://localhost:3002/persons/${id}`
  const request = axios.delete(url)
  return request.then(response => {
    persons.filter(person => person.id !== id)
  })
}

/* const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
} */

export default { getAll, create, borrar }
/*

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/

// CÓDIGO DEL COMPONENTE

// Definición con funciones flecha
/*

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

*/

/*
  <-><-><-><-><-><-><-><-><-><-><-><->
  <-><-><-><-><-><-><-><-><-><-><-><->
  <-><-><-><-><-><-><-><-><-><-><-><->
*/

/*

  PRIMERA PARTE, 1: Componentes y props

*/

/*
// props: pasar datos a componente
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

// Uso de componente Hello dentro de App
const App = () => {
  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App */

/*
  <-><-><-><-><-><-><-><-><-><-><-><->
  <-><-><-><-><-><-><-><-><-><-><-><->
  <-><-><-><-><-><-><-><-><-><-><-><->
*/


/*

  PRIMERA PARTE, 2: Estado del componente, controladores de eventos

*/

/*

import { useState } from 'react'


// Componente para mostrar el estado
// const Display = (props) => {
//  return (
//    <div>{props.counter}</div>
//  )
// }

// Usando forma compacta de función flecha y usando desestructuración (de los props solo se usa counter)
const Display = ({ counter }) => <div>{counter}</div>

// Componente de botones, en los props van el controlador de eventos (handleClick) y el texto del botón (text)
// const Button = (props) => {
//  return (
//    <button onClick={props.handleClick}>
//      {props.text}
//    </button>
//  )
// }

// Forma compacta, variables desestructuradas, sugerencia de llamar 'on' + acción (camelCase) para el controlador de eventos
const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {

    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 

    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {

    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onSmash={increaseByOne} text="plus" />
      <Button onSmash={setToZero} text="zero" />
      <Button onSmash={decreaseByOne} text="minus" />
    </div>
  )
}

export default App

*/

/*
  <-><-><-><-><-><-><-><-><-><-><-><->
  <-><-><-><-><-><-><-><-><-><-><-><->
  <-><-><-><-><-><-><-><-><-><-><-><->
*/

/*

  PRIMERA PARTE, 3: Estados complejos

*/

/* const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </>
  )
} */

import { useState } from 'react'

/*
  Estado complejo: más de un estado (right, left). No se recomienda modificar directamente el objeto que almacena
  el estado, sino crear una copia con la modificación de estado que corresponda.
*/


/*
  const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // ...clicks crea un nuevo objeto que copia las propiedades anteriores de clicks. En este caso, con left aumentado en 1
  const handleLeftClick = () =>
    setClicks({ ...clicks, left: clicks.left + 1 })

  const handleRightClick = () =>
    setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
} */

// Manejo de matrices

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <>
        <p>the app is used by pressing the buttons</p>
      </>
    )
  }
  // Join envia toda la matriz, separando cada posición con el caracter indicado como parámetro
  return (
    <>
      <p>button press history:</p>
      <p>Total clicks: {props.allClicks.length}</p>
      <p>{props.allClicks.join('-')}</p>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)


  const handleLeftClick = () => {
    // Al dar clic en el botón de la izquierda, se agrega una L a la matriz
    setAll(allClicks.concat('L'))
    // Para resolver el problema de la actualización asincrónica
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }


  const handleRightClick = () => {
    // Al dar clic en el botón de la derecha, se agrega una R a la matriz
    setAll(allClicks.concat('R'))
    // Para resolver el problema de la actualización asincrónica
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }
  
  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />
    </>
  )
}

export default App



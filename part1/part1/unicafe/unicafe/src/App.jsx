const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p> {props.parte} {props.ejercicio} </p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part parte = 'Fundamentals of React' ejercicio = {props.ejercicios[0]} />
      <Part parte = 'Using props to pass data' ejercicio = {props.ejercicios[1]} />
      <Part parte = 'State of a component' ejercicio = {props.ejercicios[2]} />   
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p> Total: {props.total} </p>
    </>
  )
}

const App = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <>
      <Header course = 'Half Stack application development' />
      <Content ejercicios = {[exercises1, exercises2, exercises3]} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </>
  )
}

export default App
/*

  COMPONENT: HEADER

*/

const Header = (props) => {
    console.log(props)
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  /*
  
    COMPONENT: PART
  
  */
  
  const Part = (props) => {
    console.log('Part component:', props)
    return (
      <>
        <p> {props.parts[props.pos].name} {props.parts[props.pos].exercises} </p>
      </>
    )
  }
  
  /*
  
    COMPONENT: CONTENT
  
  */
  
  const Content = (props) => {
    console.log('Content component:', props)
    // console.log(props.parts[0].name)
  
    return (
      <>
      <Part parts = {props.parts} pos = {0} />
      <Part parts = {props.parts} pos = {1} />
      <Part parts = {props.parts} pos = {2} />
      </>
    )
  }
  
  /*
  
    COMPONENT: TOTAL
  
  */
  
  const Total = (props) => {
    console.log('Total component:', props)
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
      <>
        <p> Total: {total} </p>
      </>
    )
  }
  
  /*
  
    APP
  
  */
  
  const App = () => {
  
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
    return (
      <>
        <Header course = {course.name} />
        <Content parts = {course.parts} />
        <Total parts = {course.parts} />
      </>
    )
  }
  
  export default App
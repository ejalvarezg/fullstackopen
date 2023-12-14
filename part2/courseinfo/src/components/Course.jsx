import React from 'react'

/*

    COMPONENT: HEADER

*/

const Header = ({title}) => {
    return <h1>{title}</h1>
}
  
/*
  
    COMPONENT: PART
  
*/
  
const Part = ({name, exercises}) => {
    return <>{name}: {exercises}</>
}
  
/*
  
    COMPONENT: CONTENT
  
*/
  
const Content = ({parts}) => {
    return (
        <>
            {parts.map(part => 
                <p key={part.id}>
                    <Part name = {part.name} exercises = {part.exercises} />
                </p>
            )}
        </>
    )
}
  
/*
  
    COMPONENT: TOTAL
  
*/
  
const Total = ({parts}) => {
    const total = parts.reduce((s, part) => s + part.exercises, 0)
    return <p> Total of {total} exercises. </p>
}
  
/*
  
    COURSE
  
*/
  
const Course = ({courses}) => {
    return (
      <>
      {courses.map(course =>
        <div key={course.id} >
          <Header title = {course.name} />
          <Content parts = {course.parts} />
          <Total parts = {course.parts} />
        </div>
      )}
      </>
    )
}

export default Course
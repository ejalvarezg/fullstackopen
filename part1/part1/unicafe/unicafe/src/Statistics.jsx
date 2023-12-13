import { useState } from 'react'

/*

  COMPONENT: HEADER

*/

const Header = (props) => {
  console.log('Header component:', props)
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

/*

  COMPONENT: BUTTON

*/

const Button = ({ handleClick, text }) => {
  console.log('Button Component', handleClick)
  return (
    <>
    <button onClick={handleClick}>
      {text}
    </button>
    </>
  )
}


/*

  COMPONENTS: STATISTICS

*/

const StatisticLine = ({text, value}) => {
  console.log('text: ', text)
  console.log('value: ', value)

  return (
    <>
    <td>{text}</td> <td>{value}</td> 
    </>
  )

}

const Statistics = ({good, neutral, bad}) => {
  console.log('good', good)
  if (good + neutral + bad === 0) {
    return (
      <>
      <p>No feedback given</p>
      </>
    )
  }

  return (
    <table>
      <tr><StatisticLine value = {good} text = {'Good'} /></tr>
      <tr><StatisticLine value = {neutral} text = {'Neutral'} /></tr>
      <tr><StatisticLine value = {bad} text = {'Bad'} /> </tr>
      <tr><StatisticLine value = {good + neutral + bad} text = {'All'} /> </tr>
      <tr><StatisticLine value = {(good - bad)/(good + neutral + bad)} text = {'Average'} /> </tr>
      <tr><StatisticLine value = {good/(good + neutral + bad) * 100} text = {'Positive'} /> </tr>
    </table>
  )
}

/*

  APP

*/

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const title = 'Give feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const subtitle = 'Statistics'

  const goodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <>
      <Header title = {title} />
      <Button handleClick = {goodClick} text='Good' />
      <Button handleClick = {neutralClick} text='Neutral' />
      <Button handleClick = {badClick} text='Bad' />
      <Header title = {subtitle} />
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </>
  )
}

export default App
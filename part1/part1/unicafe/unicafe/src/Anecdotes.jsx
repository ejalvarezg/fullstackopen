import { useState } from 'react'

const Title = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

const PrintAnecdote = ({ anecdote, points }) => {
    return (
        <>
            <p>{anecdote}</p>
            <p>has {points} votes</p>
        </>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}

const App = () => {
    const tit1 = 'Anecdote of the day'
    const tit2 = 'Anecdote with more votes'
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    //Crea un array de ceros (allPoints)
    const [allPoints, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])

    const selectAnecdote = () => {
        const quote = Math.floor(Math.random() * (anecdotes.length))
        console.log('quote:', quote)
        setSelected(quote)
    }

    const countVote = () => {
        const copy = [...allPoints] //Copia el diccionario
        copy[selected] += 1
        console.log(copy)
        setPoints(copy)
    }

    const selectMostPopular = () => {
        let pos = 0
        console.log('allPoints', allPoints)

        for (let i = 1; i < allPoints.length; i++) {
            if (allPoints[i] > allPoints[pos]) {
                pos = i
            }
        }

        console.log('pos', pos)
        return pos
    }

    return (
        <>
            <Title title = {tit1} />
            <PrintAnecdote anecdote={anecdotes[selected]} points={allPoints[selected]} />
            <Button handleClick={countVote} text='Vote' />
            <Button handleClick={selectAnecdote} text='Next anecdote' />
            <Title title = {tit2} />
            <PrintAnecdote anecdote={anecdotes[selectMostPopular()]} points={allPoints[selectMostPopular()]} />

        </>
    )
}

export default App
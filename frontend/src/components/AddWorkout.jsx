import React from 'react'
import { useState } from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'

const AddWorkout = () => {
  // global state context hook
  const {dispatch} = useWorkoutContext()

  const [title, setTitle] = useState('')
  const [sets, setSets] = useState('')
  const [reps, setReps] = useState('')
  const [weight, setWeight] = useState('')
  const [notes, setNotes] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    // prevent page refresh
    e.preventDefault()

    const workout = {title, sets, reps, weight, notes}

    const response = await fetch('http://localhost:4000/api/workouts', {
        method: 'POST',
        body: JSON.stringify(workout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    console.log(json)
    if(!response.ok) {
        setError(json.error)
        console.log(error)
    }
    if(response.ok) {
        setTitle('')
        setSets('')
        setReps('')
        setWeight('')
        setNotes('')
        setError(null)
        console.log('success!', json)
        dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
        <h3 className='font-bold'> Add a New Exercise</h3>

        <label>Name:</label>
        <input type='text' onChange={(e) => setTitle(e.target.value)} value={title}
        className='w-1/2'/>

        <label>Sets:</label>
        <input type='number' onChange={(e) => setSets(e.target.value)} value={sets}
        className='w-1/2'/>

        <label>Reps:</label>
        <input type='number' onChange={(e) => setReps(e.target.value)} value={reps}
        className='w-1/2'/>

        <label>Weight:</label>
        <input type='number' onChange={(e) => setWeight(e.target.value)} value={weight}
        className='w-1/2'/>

        <label>Notes:</label>
        <input type='text' onChange={(e) => setNotes(e.target.value)} value={notes}
        className='w-1/2'/>

        <button className='w-1/3 mx-4 bg-blue-600 text-white'>Add</button>
        {error && <div>{error}</div>}
    </form>
  )
}

export default AddWorkout
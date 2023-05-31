import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

const WorkoutDetails = ({workout}) => {
  const {dispatch} = useWorkoutContext()

  const handleClick = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className='flex flex-col m-2 font-semibold'>
        <h2 className='text-red-600'>{workout.title}</h2>
        <p className=''>{workout.sets}x{workout.reps}</p>
        <p className=''>Weight: <span>{workout.weight}lbs</span></p>
        <p className=''>{workout.notes}</p>
        <p>{workout.createdAt}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default WorkoutDetails
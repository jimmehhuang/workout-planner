import React from 'react'
import { useEffect } from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'

import WorkoutDetails from '../components/WorkoutDetails'
import AddWorkout from '../components/AddWorkout'

const Home = () => {

  const {workouts, dispatch} = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      console.log(response)
      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div>
      {workouts && workouts.map((workout) => (
        <WorkoutDetails key={workout._id} workout={workout}/>
      ))}
      <AddWorkout/>
    </div>
  )
}

export default Home
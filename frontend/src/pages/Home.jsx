import React from 'react'
import { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import AddWorkout from '../components/AddWorkout'

const Home = () => {

  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      console.log(response)
      if(response.ok){
        setWorkouts(json)
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
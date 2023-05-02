import React from 'react'
import { useEffect, useState } from 'react'

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
        <p key={workout._id}>{workout.title}</p>
      ))}
    </div>
  )
}

export default Home
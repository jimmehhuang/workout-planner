import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='flex flex-col m-2 font-semibold'>
        <h2 className='text-red-600'>{workout.title}</h2>
        <p className=''>{workout.sets}x{workout.reps}</p>
        <p className=''>Weight: <span>{workout.weight}lbs</span></p>
        <p className=''>{workout.notes}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails
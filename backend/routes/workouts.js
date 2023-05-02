const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.put('/:id', updateWorkout)

module.exports = router
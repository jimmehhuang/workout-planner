const express = require('express')

const router = express.Router()

// GET workouts, test
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET one workout plan'})
})

// POST new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POSTing one plan'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE one workout plan'})
})

// UPDATE a workout
router.put('/:id', (req, res) => {
    res.json({mssg: 'UPDATE one workout plan'})
})

module.exports = router
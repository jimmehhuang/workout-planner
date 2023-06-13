// functions to call CRUD operations without clogging up main workouts.js route

const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts, shown in descending order by creation
const getWorkouts = async(req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    // makes sure fetch id is valid
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Does not exist.'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: 'Workout does not exist!'})
    }

    res.status(200).json(workout)
}

// CREATE new workout
const createWorkout = async (req, res) => {
    const {title, categories} = req.body

    let emptyField = []

    if(!title) {
        emptyField.push('title')
    }
    if(emptyField.length > 0) {
        return res.status(400).json({error: 'Please fill in the required fields.', emptyField})
    }

    // adds a document to mongoDB
    try{
        const workout = await Workout.create({title, categories})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Does not exist.'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout) {
        return res.status(404).json({error: 'Workout does not exist!'})
    }

    res.status(200).json(workout)
}

// UPDATE workout
const updateWorkout = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Does not exist.'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!workout) {
        return res.status(404).json({error: 'Workout does not exist!'})
    }

    res.status(200).json(workout)
}


module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// format for the workout model
const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sets: Number,
    reps: Number,
    weight: Number,
    notes: String
})

// format for day model
const workoutSchema = new Schema({
    title: {
        type: String,
    },
    categories: {
        type: [categorySchema]
    }
})

module.exports = mongoose.model('Workout', workoutSchema)
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app =  express()
const cors = require('cors')

// middleware
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// router
app.use('/api/workouts', workoutRoutes)

// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // request listener
    app.listen(process.env.PORT, () => {
        console.log('Connected to MongoDB, listening on port', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })

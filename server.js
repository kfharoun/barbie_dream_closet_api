const express = require('express')
const db = require('./DB')
const barbieController = require('./Controllers/barbieController')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cors())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('This is our root page!')
})

// get info
app.get('/barbie', barbieController.getAllBarbies)

// get infoByID
app.get('/barbie/:id', barbieController.getBarbieById)

// delete 
app.delete(`/barbie/:id`, barbieController.deleteBarbie)

// update 
app.put(`/barbie/:id`, barbieController.updateBarbie)

// create 
app.post(`/barbie`, barbieController.createBarbie)
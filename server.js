const express = require('express')
const db = require('./DB')
const barbieController = require('./Controllers/barbieController')
const accessoryController = require('./Controllers/accessoryController')
const outfitController = require('./Controllers/outfitController')
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
app.get('/accessory', accessoryController.getAllAccessories)
app.get(`/outfit`, outfitController.getAllOutfits)

// get infoByID
app.get('/barbie/:id', barbieController.getBarbieById)
app.get('/accessory/:id', accessoryController.getAccessoryById)
app.get(`/outfit/:id`, outfitController.getOutfitById)

// get by Type
app.get('/accessory/type/:type', accessoryController.getAccessoriesByType)
app.get(`/outfit/type/:type`, outfitController.getOutfitByType)

//  get by Color 
app.get(`/accessory/color/:color`, accessoryController.getAccessoriesByColor)
app.get(`/outfit/color/:color`, outfitController.getOutfitByColor)

// get by word
app.get('/accessories/search/:searchTerm', accessoryController.getAccessoriesByWord)
app.get(`/outfit/search/:searchTerm`, outfitController.getOutfitByWord)
app.get(`/barbie/search/:searchTerm`, barbieController.getBarbiesByWord)

// delete 
app.delete(`/barbie/:id`, barbieController.deleteBarbie)
app.delete(`/accessory/:id`, accessoryController.deleteAccessory)
app.delete(`/outfit/:id`, outfitController.deleteOutfit)

// update 
app.put(`/barbie/:id`, barbieController.updateBarbie)
app.put(`/accessory/:id`, accessoryController.updateAccessory)
app.put(`/outfit/:id`, outfitController.updateOutfit)

// create 
app.post(`/barbie`, barbieController.createBarbie)
app.post(`/accessory`, accessoryController.createAccessory)
app.post(`/outfit`, outfitController.createOutfit)

// get by barbie ID
app.get('/accessory/barbie/:barbieId', accessoryController.getAccessoriesByBarbieId)
app.get(`/outfit/barbie/:barbieId`, outfitController.getOutfitsByBarbieId)
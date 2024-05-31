const mongoose =  require('mongoose');
const BarbieSchema = require('./barbie');
const OutfitSchema = require('./outfit');
const AccessorySchema = require('./accessory');

const Barbie = mongoose.model('Barbie', BarbieSchema);
const Outfit = mongoose.model('Outfit', OutfitSchema);
const Accessory = mongoose.model('Accessory', AccessorySchema);

module.exports = {
    Barbie, 
    Outfit, 
    Accessory
}
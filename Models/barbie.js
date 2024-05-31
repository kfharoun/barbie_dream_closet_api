const { Schema } = require('mongoose')

const BarbieSchema = new Schema(
  {
    name: { type: String, required: true },
    releaseYear: { type: Number, required: true }, 
    description: { type: String, required: true}, 
    image: { type: String, required: true}
  },
  { timestamps: true }
)

module.exports = BarbieSchema
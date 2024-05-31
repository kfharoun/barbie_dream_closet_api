const { Schema } = require('mongoose')

const AccessorySchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: Number, required: true },
    color: {type: Boolean, required: true},
    description: {type: String, required: true},
    image: { type: Boolean, required: true },
    barbieId: { type: ObjectId, required: true}
  },
  { timestamps: true }
)

module.exports = AccessorySchema;
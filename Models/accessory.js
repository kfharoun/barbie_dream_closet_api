const { Schema } = require('mongoose')

const AccessorySchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: {type: String, required: true},
    image: { type: String, required: true },
    barbieId: { type: Schema.Types.ObjectId, ref: 'Barbie'}
  },
  { timestamps: true }
)

module.exports = AccessorySchema;
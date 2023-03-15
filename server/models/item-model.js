const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema(
    {
        name: { type: String, required: true},
        slot: { type: String, required: true},
        cost: {type: Number, required: true},
        sprite: {data: Buffer, contentType: String},
        description: {type: String, required: true},
    }
)

module.exports = mongoose.model('items', Item)
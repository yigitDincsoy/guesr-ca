const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Question = new Schema(
    {
        title: { type: String, required: true},
        category: { type: String, required: true},
        alternatives: {type: [String]},
        openDate: { type: Date, required: true},
        closeDate: { type: Date, required: true},
        cost: {type: Number, required: true},
        sprite: {data: Buffer, contentType: String, required: true},
        description: {type: String, required: true},
    }
)

module.exports = mongoose.model('questions', Question)
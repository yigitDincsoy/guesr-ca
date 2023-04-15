const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Question = new Schema(
    {
        title: { type: String, required: true},
        category: { type: String, required: true},
        alternatives: {type: [String], required:true},
        votes: {type: [Number], required:true},
        openDate: { type: Date, required: true},
        closeDate: { type: Date, required: true},
        cost: {type: Number, required: true},
        photo: {data: Buffer, contentType: String},
        description: {type: String, required: true},
    }
)

module.exports = mongoose.model('questions', Question)
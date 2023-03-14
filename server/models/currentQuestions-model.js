const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CurrentQuestions = new Schema(
    {
        Questions: { type: [mongoose.Schema.Types.Mixed], required: true},
    }
)

module.exports = mongoose.model('currentQuestions', CurrentQuestions)
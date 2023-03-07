const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        title: { type: [String], required: true },
        rating: { type: Number, required: true },
        points: { type: Number, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)
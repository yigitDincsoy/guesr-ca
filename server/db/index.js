const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://tuliotorezan:RGCWXiXCU85BKSjq@guesrcluster.o4ymj1r.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
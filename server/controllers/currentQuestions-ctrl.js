const CurrentQuestions = require('../models/currentQuestions-model')


createCurrentQuestions = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an questions',
        })
    }
    const questions = new CurrentQuestions(body)
    if (!questions) {
        return res.status(400).json({ success: false, error: err })
    }
    questions.save().then(() => {
            return res.status(201).json({
                success: true,
                id: questions._id,
                message: 'CurrentQuestion created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'CurrentQuestion not created ;-;',
            })
        })
}

updateCurrentQuestions = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    CurrentQuestions.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'}).then((questions) => {

        if (questions===null) {
            return res
                .status(404)
                .json({ success: false, error: `User not found`})
        }

        return res.status(200).json({ success: true, data: questions })
    }).catch(err => console.log(err))
}


getCurrentQuestions = async (req, res) => {
    await CurrentQuestions.find(req.body).then((questions) => {

        if (questions===null) {
            return res
                .status(404)
                .json({ success: false, error: `CurrentQuestions not found`})
        }
        return res.status(200).json({ success: true, data: questions })
    }).catch(err => console.log(err))
}


module.exports = {
    updateCurrentQuestions,
    getCurrentQuestions,
    createCurrentQuestions,
}
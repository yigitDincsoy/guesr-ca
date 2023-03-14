const CurrentQuestions = require('../models/currentQuestions-model')


updateCurrentQuestions = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    CurrentQuestions.findOne({ _id: req.params.id }, (err, currentQuestions) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'List of Current Questions not found!',
            })
        }

        currentQuestions.Questions = body.Questions
        currentQuestions.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: currentQuestions._id,
                    message: 'List of Current Questions updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'List of Current Questions not updated!',
                })
            })
    })
}
const Question = require('../models/question-model')


createQuestion = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an question',
        })
    }
    const question = new Question(body)
    if (!question) {
        return res.status(400).json({ success: false, error: err })
    }
    question.save().then(() => {
            return res.status(201).json({
                success: true,
                id: question._id,
                message: 'Question created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Question not created ;-;',
            })
        })
}

updateQuestion = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    Question.findByIdAndUpdate(req.params.id, req.body, {returnDocument: 'after'}).then((question) => {

        if (question===null) {
            return res
                .status(404)
                .json({ success: false, error: `Question not found`})
        }

        return res.status(200).json({ success: true, data: question })
    }).catch(err => console.log(err))
}

deleteQuestion = async (req, res) => {
    await Question.findByIdAndDelete( req.params.id).then((question) => {

        if (question===null) {
            return res
                .status(404)
                .json({ success: false, error: `Question not found`})
        }

        return res.status(200).json({ success: true, data: question })
    }).catch(err => console.log(err))
}

getQuestionById = async (req, res) => {
    await Question.findById(req.params.id).then((question) => {

        if (question===null) {
            return res
                .status(404)
                .json({ success: false, error: `Question not found`})
        }
        return res.status(200).json({ success: true, data: question })
    }).catch(err => console.log(err))
}

getQuestions = async (req, res) => {
    await Question.find(req.body).then((question) => {

        if (question===null) {
            return res
                .status(404)
                .json({ success: false, error: `Question not found`})
        }
        return res.status(200).json({ success: true, data: question })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionById,
    getQuestions,
}
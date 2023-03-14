const express = require('express')
const CurrentQuestionsCtrl = require('../controllers/currentQuestions-ctrl')

const router = express.Router()

router.put('/currentQuestions/:id', CurrentQuestionsCtrl.updateCurrentQuestions)

module.exports = router
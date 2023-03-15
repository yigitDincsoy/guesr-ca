const express = require('express')
const CurrentQuestionsCtrl = require('../controllers/currentQuestions-ctrl')

const router = express.Router()

router.post('/currentQuestions', CurrentQuestionsCtrl.createCurrentQuestions)
router.put('/currentQuestions/:id', CurrentQuestionsCtrl.updateCurrentQuestions)
router.get('/currentQuestions', CurrentQuestionsCtrl.getCurrentQuestions)

module.exports = router
const express = require('express');

const user = express();

const loginController = require("../controllers/loginController")
const registeration = require('../controllers/registerController')
const search = require('../controllers/idSearch')
const addQuestion = require('../controllers/addQuestion')
const viewQuestions = require('../controllers/getAllQuestions')
const creatQuizRoom = require('../controllers/createQuizRoom')
const creatQuiz = require('../controllers/creatQuiz')
const postALLResult = require('../controllers/postAllResult')
const putALLResult = require("../controllers/putAllResult")
const showAllResult = require('../controllers/showResult')
const csvdownload=require('../controllers/csvdownload')

user.get('/', (req, res) => {
    res.send("Welcome to Home Route")
});
user.post('/login', loginController.login);
user.post('/register', registeration.create);
user.post('/addQuestion', addQuestion.addQuestion);

user.get('/home', search.searshid);
user.get('/home/:id', search.searshid);
user.get('/questions', viewQuestions.getAllQuestions);
user.get('/questions/:teacherId', viewQuestions.getAllQuestions);
user.post('/creatroom', creatQuizRoom.CreateQuizRooom)
user.get('/creatQuiz', creatQuiz.addQuiz)
user.get('/creatQuiz/:id', creatQuiz.addQuiz)
user.get('/showAllResult', showAllResult.AllResults)
user.get('/showAllResult/:roomId',showAllResult.AllResults)
user.get('/download',csvdownload.csvdownload)
user.get('/download/:roomId',csvdownload.csvdownload)
user.post('/postResult', postALLResult.postALLResult)
user.put('/putdata', putALLResult.updateSubmission)

module.exports = {
    user
}

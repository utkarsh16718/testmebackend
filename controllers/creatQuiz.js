const quizRoom = require('../models/quizRoom')
const quest = require('../models/addQuestionSchema')


const addQuiz = async (req, res) => {
    const { _id } = req.query;
    try {
        const data = await quizRoom.findOne({ _id })
        const answers = data.questions;
        const fulldata= await quest.find({_id:answers.map((ans)=>{return ans})})
        res.status(201).json(fulldata)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { addQuiz }
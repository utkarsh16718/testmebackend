const Data = require('../models/quizRoom')

const CreateQuizRooom = async (req, res) => {

    try {
        const { questions } = req.body;

        const users = await Data.create({questions})

        res.status(201).json(users)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports={CreateQuizRooom}

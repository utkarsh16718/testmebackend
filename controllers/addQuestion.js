const data= require('../models/addQuestionSchema')
const { login } = require('./loginController')


const addQuestion= async(req,res)=>{
    try {
       const  {question,option1,option2,option3,option4,answer,teacherId}=req.body;

       const questionData = await data.create(
        {
            question,option1,option2,option3,option4,answer,teacherId
        })

    res.status(201).json(questionData)
        
    } catch (error) {
        res.status(404).json(error)
    }
};

module.exports={addQuestion};
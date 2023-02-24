const data=require('../models/addQuestionSchema')

const getAllQuestions= async(req,res)=>{
    const { teacherId } = req.query;
    try {
        const question= await data.find({teacherId});
        if (question) {   
            res.status(201).json(question)   
      }
      else {
         return res.status(404).json('NOT FOUND')
      }
        
    } catch (error) {
        res.status(404).json(error)
        
    }
};

module.exports={getAllQuestions};
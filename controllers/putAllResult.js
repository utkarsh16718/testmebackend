const AllResult = require('../models/AllResultSchema')
exports.updateSubmission = async (req, res) => {
    const {roomId, studentId, question, answer, response } = req.body;
  
    try {
      const user = await AllResult.findOne({ roomId });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const submissionIndex = user.Questions.findIndex(q => q.studentId === studentId);

      user.Questions[submissionIndex].Submissions.push({ Question: question, Answer: answer, Response: response });
  
  
      await user.save();
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
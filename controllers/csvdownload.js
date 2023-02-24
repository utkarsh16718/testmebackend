const AllResult = require('../models/AllResultSchema');
const json2csv = require('json2csv').parse;
const fs = require('fs');

const csvdownload = async (req, res) => {
  const { roomId } = req.query;
  try {
    const question = await AllResult.findOne({ roomId });
    if (question) {
      const fields = ['studentId', 'Question', 'Answer', 'Response'];
      const rows = question.Questions.flatMap(q =>
        q.Submissions.map(s => ({ studentId: q.studentId,Question:s.Question,Answer:s.Answer,Response:s.Response}))
      );
      const csv = json2csv(rows, { fields });
      res.status(201).json(csv)
      // fs.writeFileSync('result.csv', csv);
      // res.download('result.csv');
    } else {
      return res.status(404).json('NOT FOUND');
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = { csvdownload };
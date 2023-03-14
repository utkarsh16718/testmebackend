
const data = require('../models/AllResultSchema')

const postALLResult = async (req, res) => {
    const { roomId } = req.body;
    const {studentId } = req.body;
    const {Email } = req.body;
    console.log(studentId);
    try {
        const result = await data.findOne({ roomId: roomId })
        if (result) {
            result.Questions.push({ studentId,Email });
            await result.save();
           return res.status(201).send(`Added student with id ${studentId} to room with id ${roomId}`);
        }
        else {
            const results = new data({
                teacherId: req.body.teacherId,
                roomId: req.body.roomId,
                Questions: [
                    {
                        studentId: req.body.studentId,
                        Email: req.body.Email,
                    }
                ]
            }
            );
            const savedResult = await results.save();
            return res.status(201).json(savedResult);
        }

    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
};

module.exports = { postALLResult };


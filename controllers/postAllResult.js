// const data = require('../models/AllResultSchema')

// const postALLResult = async (req, res) => {

//     const { teacherId, roomId, Questions } = req.body;
//     const studentId =Questions[0].studentId; 
//     console.log(studentId);
//     try {
//         const result = await data.findOne({roomId: roomId })
//         if (result) {
//             result.Questions.push({studentId:studentId}  );
//             await result.save();
//             res.status(200).send(`Added student with id ${studentId} to room with id ${roomId}`);
//         }
//         else {
//             const results = new data(req.body);
//             const savedResult = await results.save();
//             res.status(201).json(savedResult);
//         }

//     } catch (error) {
//         console.log(error)
//         res.status(404).json(error)
//     }

// };

// module.exports = { postALLResult };

const data = require('../models/AllResultSchema')

const postALLResult = async (req, res) => {
    const { roomId } = req.body;
    const {studentId } = req.body;
    console.log(studentId);
    try {
        const result = await data.findOne({ roomId: roomId })
        if (result) {
            result.Questions.push({ studentId });
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


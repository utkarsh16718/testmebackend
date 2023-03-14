const AllResult = require('../models/AllResultSchema');

const AllResults = async (req, res) => {
    const { roomId } = req.query;
    try {
        const question = await AllResult.findOne({ roomId });
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
module.exports = { AllResults };
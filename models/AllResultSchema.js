const mongoose = require('mongoose')

const AllResult = new mongoose.Schema({
    teacherId: {
        type: String
    },
    roomId: {
        type: String
    },
    Questions: [{
        studentId: { type: String },
        Email: { type: String },
        Submissions: [{
            Question: { type: String },
            Answer: { type: String },
            Response: { type: String }
        }]
    }]

});

module.exports = mongoose.model('AllResult', AllResult); 
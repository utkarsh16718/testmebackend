const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({

    questions: [
        {
          type: String
        }
    ]

});
module.exports = mongoose.model('RoomSchema', RoomSchema); 
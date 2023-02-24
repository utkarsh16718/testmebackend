const mongoose = require("mongoose");


const login = new mongoose.Schema({
    user: {
        type: String
        
    },
    email: {
        type: String
        
    },
    registration: {
        type: String
        
    },
    password: {
        type: String
      
    }
});

module.exports = mongoose.model('LoginSchema', login); 
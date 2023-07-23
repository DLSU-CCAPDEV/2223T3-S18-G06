
// import module `mongoose`
var mongoose = require('mongoose');
// const validator = require('validator');

// defines the schema for collection `users`
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    fname: {
        type: String,
        required: true
    },
    
    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    
    pw: {
        type: String,
        required: true
    },

    dp: {
        type: String,
        default: '/default_icon.jpg'
    }

    /* 
    cover: {
        type: String
        default: 
    },

    bio: {
        type: String
        required: true
    },

    followers: {
        type: Number
        required: true
    },

    postcount: {
        type: Number
        required: true
    },

    commentcount: {
        type: Number
        required: true
    },
    }
    
    */
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('User', UserSchema);
// import module `mongoose`

var mongoose = require('mongoose');


var CommentSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    commentcount: {
        type: Number,
        required: true
    },

    upvoted: {
        type: Number,
        required: true
    },
    
    votes: {
        type: Number,
        required: true
    },

    downvoted: {
        type: Number,
        required: true
    }
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/

module.exports = mongoose.model('Comments', CommentSchema);
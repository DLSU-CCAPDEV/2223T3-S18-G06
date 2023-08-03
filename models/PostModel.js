// import module `mongoose`
var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    title: {
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

    upvotes: [String],
    
    votes: {
        type: Number,
        required: true
    },

    downvotes: [String]
});

/*
    exports a mongoose.model object based on `UserSchema` (defined above)
    when another script exports from this file
    This model executes CRUD operations
    to collection `users` -> plural of the argument `User`
*/
module.exports = mongoose.model('Posts', PostSchema);
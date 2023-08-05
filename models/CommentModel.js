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

    parentid: {
        type: mongoose.Schema.ObjectId,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    commentcount: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Comments', CommentSchema);
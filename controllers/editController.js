const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const editController = {

    edit: async function (req, res) {
        var query = req.body.currTitle;
        var title = req.body.title;
        var content = req.body.content;
        var username = req.body.username;

        db.updateOne(Post, {title: query}, {title: title, content: content});

        res.redirect('/Registered_Homepage/' + username);
    },

    editComment: async function(req, res) {
        var comment_id = req.body.currentCommentId;
        var currUser = req.session.username;
        var content = req.body.editComment;
        var title = req.body.currentPostBodyTitle;

        console.log('Title: ', title);

        await db.updateOne(Comment, {_id: comment_id}, {content: content});

        res.redirect('/View_Post/' + title + '?currUser=' + currUser);
    },

    editMainComment: async function(req, res) {
        var comment_id = req.body.currentCommentId;
        var content = req.body.editComment;

        await db.updateOne(Comment, {_id: comment_id}, {content: content});

        res.redirect('/comments/' + comment_id);
    }
}
module.exports = editController;
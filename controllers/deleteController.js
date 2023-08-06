const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const deleteController = {

    delete: async function (req, res) {
        var query = req.query.title;
        var username = req.query.username;

        db.deleteOne(Post, {title: query});

        res.redirect('/Registered_Homepage/' + username);
    },

    deleteComment: async function(req, res) {
        var comment_id = req.query.comment_id;
        var title = req.query.title;
        var currUser = req.session.username;

        await db.deleteOne(Comment, {_id: comment_id});

        res.redirect('/View_Post/' + title + '?currUser=' + currUser);
    },

    deleteNestedComment: async function(req, res) {
        var current_id = req.query.current_id;
        var comment_id = req.query.comment_id;

        await db.deleteOne(Comment, {_id: comment_id});

        res.redirect('/comments/' + current_id);
    },

    deleteMainComment: async function(req, res) {
        var comment_id = req.query.comment_id;
        var titleId = req.query.titleId;
        var currUser = req.session.username;

        var post = await db.findOne(Post, {_id: titleId});

        var title = post.title;

        await db.deleteOne(Comment, {_id: comment_id});

        res.redirect('/View_Post/' + title + '?currUser=' + currUser);
    }
}


module.exports = deleteController;
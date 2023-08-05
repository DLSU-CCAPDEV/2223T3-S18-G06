const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const viewCommentsController = {

    viewComments: async function (req, res) {
        console.log('Hello Hello');
        var commentId = req.params.commentId;
        var currUser = req.session.username;

        currentComment = await db.findOne(Comment, {_id: commentId});
        currentUser = await db.findOne(User, {username: currUser});

        console.log('Comment Id: ', commentId);
        res.render('View_Comments', {
            mainComment: currentComment,
            comments: await db.findMany(Comment, {parentid: commentId}),
            current: currentUser,
            posts: await db.findMany(Post, {})
        });
    }

}

module.exports = viewCommentsController;
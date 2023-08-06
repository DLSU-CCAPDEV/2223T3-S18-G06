const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const viewCommentsController = {

    viewComments: async function (req, res) {
        var commentId = req.params.commentId;
        var currUser = req.session.username;

        var mainComment = await db.findOne(Comment, {_id: commentId});
        var current = await db.findOne(User, {username: currUser});
        var parent = await db.findOne(Post, {_id: mainComment.parentid});

        if (parent === null)
            var parent = await db.findOne(Comment, {_id: mainComment.parentid});

        res.render('View_Comments', {
            mainComment,
            comments: await db.findMany(Comment, {parentid: commentId}),
            current,
            posts: await db.findMany(Post, {}),
            parent
        });
    }

}

module.exports = viewCommentsController;
/*
<div class = "comment">
            <div class = "post-header">
                <img  class = "user-icon" src="{{mainComment.filename}}" alt="user_icon" width="32" height="32">
                <a class = "post-username" href = "/View_Profile/{{mainComment.username}}" title = "view profile"> {{mainComment.username}} </a>
            </div> 
            <br>
            <p class = "post-content" style="margin-left: -10px"> {{content}} </p>
            <div class = "post-footer">
                <a href = "/View_Post/{{parent.title}}?currUser={{current.username}}" title = "comment"><i class="fa-solid fa-comment" style="color: #ffd201;"></i></a>
                <span class = "comment-count"> {{mainComment.commentcount}} </span>
            </div> 
        </div> */
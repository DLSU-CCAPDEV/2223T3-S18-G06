const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');
const Post = require('../models/PostModel.js');


const createCommentController = {
    comment: async function (req, res) {
        var username = req.body.createUsername;
        var postTitle = req.body.currentPostTitle;

        var user = await db.findOne(User, {username: username});
        var post = await db.findOne(Post, {title: postTitle});

        var filename = user.dp;
        var parentId = post._id;
        var content = req.body.createComment;

        var comment = {
            filename: filename,
            username: username,
            parentid: parentId,
            content: content
        }

        var iterate = post.commentcount + 1;

        try{
            await db.insertOne(Comment, comment);
            await db.updateOne(Post, {title: postTitle}, {commentcount: iterate});
        } catch(error){
            console.error('Error inserting document: ', error);
        }

        res.redirect(`/View_Post/` + post.title + '?currUser=' + username);
    },

    nestedComment: async function(req, res){
        var username = req.body.currentUsername;
        
        var user = await db.findOne(User, {username: username});

        var filename = user.dp;
        var parentId = req.body.mainCommentId;
        var content = req.body.createComment;

        var comment = {
            filename: filename,
            username: username,
            parentid: parentId,
            content: content
        }

        try{
            await db.insertOne(Comment, comment);
        } catch(error){
            console.error('Error inserting document: ', error);
        }

        var end = 0;
        var parent;
        var iterate = 0;
        var child = await db.findOne(Comment, {parentid: parentId});

        while (end === 0) {
            parent = await db.findOne(Comment, {_id: child.parentid});

            if (parent === null) {
                parent = await db.findOne(Post, {_id: child.parentid});
                iterate = parent.commentcount + 1;
                await db.updateOne(Post, {_id: parent._id}, {commentcount: iterate});
                end = 1;
            }
            else {
                iterate = parent.commentcount + 1;
                await db.updateOne(Comment, {_id: parent._id}, {commentcount: iterate});
                child = parent;
                parent = null;
            }
        }

        res.redirect('/comments/' + parentId);
    }
};

module.exports = createCommentController;
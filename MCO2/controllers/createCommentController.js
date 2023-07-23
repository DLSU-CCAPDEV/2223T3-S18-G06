const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const Comment = require('../models/CommentModel.js');

const createCommentController = {

    comment: async function (req, res) {
        
        var username = req.params.username;
        var user = await db.findOne(User, {username: username});
        
        var filename = user.dp;
        var content = req.body.createContent;
        var commentCount = 0;
        var upvoted = 0;
        var votes = 0;
        var downvoted = 0;
        
        var comment = {
            filename: filename,
            username: username,
            content: content,
            commentcount: commentCount,
            upvoted: upvoted,
            votes: votes,
            downvoted: downvoted,
        };

        try{
            await db.insertOne(Comment, comment);
        } catch(error){
            console.error('Error inserting document: ', error);
        }

        res.redirect('/Registered_Homepage/' + username);
    },

    //assuming na same function with posts yung comment since same format pag napost yung comment.

    upVote: async function(req, res) { 
        var query = req.query.title.slice(1);
        var title = query.slice(0, -1); 
        
        var post = await db.findOne(Post, {title: title});
        var result = post.votes + 1;
        var checker = post.downvoted;

        if (checker == 0)
            db.updateOne(Post, {title: title}, {upvoted: 1});
        if (checker == 1)
            db.updateOne(Post, {title: title}, {downvoted: 0});

        db.updateOne(Post, {title: title}, {votes: result});
    },

    downVote: async function(req, res) { 
        var query = req.query.title.slice(1);
        var title = query.slice(0, -1); 
        
        var post = await db.findOne(Post, {title: title});
        var result = post.votes - 1;
        var checker = post.upvoted;

        if (checker == 0)
            db.updateOne(Post, {title: title}, {downvoted: 1});
        if (checker == 1)
            db.updateOne(Post, {title: title}, {upvoted: 0});

        db.updateOne(Post, {title: title}, {votes: result});
    }

}

module.exports = createPostController;
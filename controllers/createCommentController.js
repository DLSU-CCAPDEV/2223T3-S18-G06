const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');
const Post = require('../models/PostModel.js');

const createCommentController = {

    comment: async function (req, res) {
        
        var username = req.params.username;
        var title = req.params.title;
        var user = await db.findOne(User, {username: username});
        var post = await db.findOne(Post, {title: title});
        var add = post.commentcount + 1;

        var filename = user.dp;
        var content = req.body.createComment;
        
        var comment = {
            filename: filename,
            username: username,
            title: title,
            content: content
        };

        try{
            

            await db.insertOne(Comment, comment);
            await db.updateOne(Post, {title: title}, {commentcount: add});
            console.log('A comment exist yay');

        } catch(error){
            console.error('Error inserting document: ', error);
        }

        res.redirect('/View_Post/' + username + '/' + title);  
    },

    
}

module.exports = createCommentController;
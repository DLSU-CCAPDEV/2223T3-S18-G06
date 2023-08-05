const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');
const Post = require('../models/PostModel.js');


const createCommentController = {
    comment: async function (req, res) {

        var username = req.body.createUsername;
        var user = await db.findOne(User, {username: username});

        var postUsername = req.body.currentPostUsername
        var post = await db.findOne(User, {username: postUsername});

        var filename = user.dp;
        var parentId = post._id;
        var content = req.body.createComment;

        console.log('Parent Id of Commnet: ', parentId);


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

        console.log('Comment saved:', comment);

        res.redirect(`/View_Post/` + username + '/' + title + '?currUser=' + username);
    }
};

module.exports = createCommentController;
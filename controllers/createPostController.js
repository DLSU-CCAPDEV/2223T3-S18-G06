const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const createPostController = {

    post: async function (req, res) {
        var username = req.params.username;

        var user = await db.findOne(User, {username: username});
        
        var filename = user.dp;
        var title = req.body.createTitle;
        var content = req.body.createContent;
        var commentCount = 0;
        var upvoted = 0;
        var votes = 0;
        var downvoted = 0;
        
        var check = await db.findOne(Post, {title: title});

        var post = {
            filename: filename,
            username: username,
            title: title,
            content: content,
            commentcount: commentCount,
            upvoted: upvoted,
            votes: votes,
            downvoted: downvoted,
        };

        try{
            await db.insertOne(Post, post);
        } catch(error){
            console.error('Error inserting document: ', error);
        }

        res.redirect('/Registered_Homepage/' + username);  
    },

    postMain: async function(req, res){
        var username = req.params.username;
        
        if(username != req.session.username) {
            res.redirect('/profile/' + req.session.username);
        }
        else {
            var user = await db.findOne(User, {username: username});
            
            var filename = user.dp;
            var title = req.body.createTitle;
            var content = req.body.createContent;
            var commentCount = 0;
            var upvoted = 0;
            var votes = 0;
            var downvoted = 0;

            var post = {
                filename: filename,
                username: username,
                title: title,
                content: content,
                commentcount: commentCount,
                upvoted: upvoted,
                votes: votes,
                downvoted: downvoted,
            };

            try{
                await db.insertOne(Post, post);
            } catch(error){
                console.error('Error inserting document: ', error);
            }

            res.redirect('/profile/' + username);  
        }
    }
}

module.exports = createPostController;
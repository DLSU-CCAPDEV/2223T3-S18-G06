const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const createPostController = {

    post: async function (req, res) {
        var filename = '/default_icon.jpg';
        var username = 'username';
        var title = req.body.create-title;
        var content = req.body.create-content;
        var commentCount = 0;
        var votes = 0;
        
        var post = {
            filename: filename,
            username: username,
            title: title,
            content: content,
            commentcount: commentCount,
            votes: votes,
        };

        try{
            await db.insertOne(Post, post);
        } catch(error){
            console.error('Error inserting document: ', error);
        }
    }


}

module.exports = createPostController;
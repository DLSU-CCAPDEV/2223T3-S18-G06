const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');
const session = require('express-session');

const viewPostController = {

    viewPost: async function (req, res) {
        var username = req.params.username;
        var title = req.params.title;
        var currUser = req.session.username;
        var query = {title: title};    

        res.render('View_Post', {
            username: username,
            post: await db.findOne(Post, query),
            users: await db.findMany(User, {}),
            comments: await db.findMany(Comment, query),
            current: await db.findOne(User, {username: currUser})
        });
    }
}


module.exports = viewPostController;


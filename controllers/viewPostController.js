const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const viewPostController = {

    viewPost: async function (req, res) {
        var username = req.params.username;
        var title = req.params.title;
        var post = await db.findOne(Post, {title: title});
        var postId = post._id;
        var currUser = req.session.username;

        res.render('View_Post', {
            username: username,
            post,
            users: await db.findMany(User, {}),
            comments: await db.findMany(Comment, {parentid: postId}),
            current: await db.findOne(User, {username: currUser})
        });

        var current = await db.findOne(User, {username: currUser});
        console.log("this:" + current.username);
    }
}

module.exports = viewPostController;


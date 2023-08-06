const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const viewPostController = {

    viewPost: async function (req, res) {
        var title = req.params.title;
        var post = await db.findOne(Post, {title: title});
        var username = post.username;
        var postId = post._id;
        var currUser = req.session.username;

        var current = await db.findOne(User, {username: currUser});
        res.render('View_Post', {
            username: username,
            post,
            posts: await db.findMany(Post, {}),
            comments: await db.findMany(Comment, {parentid: postId}),
            current: current
        });
    }
}

module.exports = viewPostController;


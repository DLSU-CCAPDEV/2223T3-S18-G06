const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');

const viewPostController = {

    viewPost: async function (req, res) {
        var username = req.params.username;
        var title = req.params.title;

        var query = {title: title};    

        res.render('View_Post', {
            username: username,
            post: await db.findOne(Post, query),
            //user: await db.findOne(User, query),
            users: await db.findMany(User, {}),
            comments: await db.findMany(Comment, {title: title})
        });
    }
}


module.exports = viewPostController;


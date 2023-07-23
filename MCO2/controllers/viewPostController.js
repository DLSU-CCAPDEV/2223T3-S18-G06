const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const viewPostController = {


    viewPost: async function (req, res) {
        res.render('View_Post', {
            posts: await db.findMany(Post, {}),
            users: await db.findMany(User, {})
        });
    }
}

module.exports = viewPostController;
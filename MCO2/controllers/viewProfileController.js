const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const viewProfileController = {

    viewProfile: async function (req, res) {
        var username = req.params.username;

        var query = {username: username};

        res.render('View_Profile', {
            posts: await db.findMany(Post, {}),
            user: await db.findOne(User, query),
            users: await db.findMany(User, {})
        });
    }
}

module.exports = viewProfileController;
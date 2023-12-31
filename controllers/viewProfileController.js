const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const viewProfileController = {

    viewProfile: async function (req, res) {
        var username = req.params.username;
        var currUser = req.session.username;

        if(username === currUser) {
            res.redirect('/profile/' + username);
        }
        else {
            var query = {username: username};

            var user = await db.findOne(User, {username: currUser});


            res.render('View_Profile', {
                allposts: await db.findMany(Post, {}),
                posts: await db.findMany(Post, {username: username}),
                user,
                users: await db.findMany(User, {}),
                visitUser: await db.findOne(User, query)
            });
        }
    }
}

module.exports = viewProfileController;
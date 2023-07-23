const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res){
        res.status(204);
    },

    getRoot: async function(req, res) {
        res.render("index", {
            posts: await db.findMany(Post, {}),
            users: await db.findMany(User, {})
        });
    },

    checkAcct: function(req, res) {
        var email = req.body.email;
        var password = req.body.pw;

        // res.render(`profile`, {email: email});
        res.redirect('/main_user1/' + email);
    },

    getHomepage: async function(req, res) {
        var username = req.params.username;

        var query = {username: username};

        res.render('Registered_Homepage', {
            posts: await db.findMany(Post, {}),
            user: await db.findOne(User, query),
            users: await db.findMany(User, {})
        });
    },

    getProfile: async function(req, res) {
        var username = req.params.username;

        var query = {username: username}

        const dp_images = [
            "/dp_1.jpg",
            "/dp_2.jpg",
            "/dp_3.jpg",
            "/dp_4.jpg",
            "/dp_5.jpg",
            "/dp_6.jpg",
            "/dp_7.jpg",
            "/dp_8.jpg",
            "/dp_9.jpg",
            "/dp_10.jpg",
            "/dp_11.jpg",
            "/dp_12.jpg",
            "/dp_13.jpg",
            "/dp_14.jpg",
            "/dp_15.jpg",
            "/dp_16.jpg",
            "/dp_17.jpg",
            "/dp_18.jpg",
            "/dp_19.jpg",
            "/dp_20.jpg"
        ];

        res.render('profile', {
            username: username,
            user: await db.findOne(User, query),
            dp_images: dp_images
        });
    },
}


module.exports = controller;

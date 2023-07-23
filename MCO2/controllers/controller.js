const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res){
        res.status(204);
    },

    getRoot: async function(req, res) {
        res.render("index", {
            posts: await db.findMany(Post, {})
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
            username: username,
            posts: await db.findMany(Post, {}),
            users: await db.findOne(User, query)
        });
    },

    getProfile: async function(req, res) {
        var username = req.params.username;

        var query = {username: username}

        res.render('profile', {
            username: username,
            user: await db.findOne(User, query)
        });
    },

    upVote: async function(req, res) { 
        var query = req.query.title.slice(1);
        var title = query.slice(0, -1); 
        
        var post = await db.findOne(Post, {title: title});
        var result = post.votes + 1;

        db.updateOne(Post, {title: title}, {votes: result});
    },

    downVote: async function(req, res) { 
        var query = req.query.title.slice(1);
        var title = query.slice(0, -1); 
        
        var post = await db.findOne(Post, {title: title});
        var result = post.votes - 1;

        db.updateOne(Post, {title: title}, {votes: result});
    }
}


module.exports = controller;

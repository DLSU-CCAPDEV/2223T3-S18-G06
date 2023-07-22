const db = require('../models/db.js');
const Post = require('../models/PostModel.js');

const controller = {

    getFavicon: function (req, res){
        res.status(204);
    },

    getRoot: async function(req, res) {
        res.render("index", {
            posts: await db.findMany(Post, {})
        });
    },

    getRegister: function(req, res) {
        res.render('register');
    },

    getLogin: function(req, res) {
        res.render('login');
    },

    checkAcct: function(req, res) {
        var email = req.body.email;
        var password = req.body.pw;

        // res.render(`profile`, {email: email});
        res.redirect('/main_user1/' + email);
    },

    getHomepage: function(req, res) {
        var email = req.params.email;

        res.render('Registered_Homepage', {email: email});
    },

    getProfile: function(req, res) {
        var email = req.params.email;

        res.render('main_user1', {email: email});
    },
}


module.exports = controller;

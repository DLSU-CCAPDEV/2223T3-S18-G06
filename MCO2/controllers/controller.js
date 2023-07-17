const db = require('../models/db.js');

const controller = {

    getRoot: function(req, res) {
        // res.render("index", {
        //     posts: [
        //         {filename: "/user5_icon.jpg", username: "dave", title: "Anyone up for a roadtrtip?",
        //             content: "Excited to announce that I've just become the proud owner of a brand new Toyota Wigo! The perfect combination of style, efficiency, and reliability. Ready to hit the road and create unforgettable memories. 🚗💨 #NewCarFeels #ToyotaWigo",
        //                 comments: "3", votes: "55"} 
        //     ]
        // });

        db.findMany('posts', {}, function(result){
            res.render('index', result);
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

        res.redirect('homepage', {email: email});
    },

    getProfile: function(req, res) {
        var email = req.params.email;

        res.redirect('main_user1', {email: email});
    },
}


module.exports = controller;

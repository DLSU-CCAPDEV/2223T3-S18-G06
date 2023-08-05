const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');


const controller = {

    getFavicon: function (req, res){
        res.status(204);
    },

    getRoot: async function(req, res) {

        var posts = await db.findMany(Post, {});

        var postsReverse = posts.reverse();
        
        if(req.session.username) {
            res.redirect('/Registered_Homepage/' + req.session.username);
        }
        else {
            res.render("index", {
                posts: postsReverse,
                users: await db.findMany(User, {})
            });
        }

        //for testing purposes only
        // try {
        //     const posts = await db.findMany(Post, {});
        //     const users = await db.findMany(User, {});

        //     console.log('All Users:', users);
        //     console.log('All Posts:', posts);
        // } catch (err){
        //     console.error('Error: ', err);
        //     res.status(500).send('An error occured.');
        // }

        // try {
        //     const posts = await db.deleteMany(Post, {});
        //     const users = await db.deleteMany(User, {});

        //     console.log('All Users:', users);
        //     console.log('All Posts:', posts);
        // } catch (err){
        //     console.error('Error: ', err);
        //     res.status(500).send('An error occured.');
        // }

    },

    getLogOut: async function(req, res) {
        req.session.destroy(function(err) {
            if(err) throw err;

            res.redirect('/');
        });
    },

    getCheckUser: async function(req, res) {
        var username = req.query.username;

        var result = await db.findOne(User, {username: username}, 'username');
        res.send(result);
    },

    getHomepage: async function(req, res) {
        var username = req.params.username;

        var query = {username: username};

        var user = await db.findOne(User, query);

        var posts = await db.findMany(Post, {});

        var users = await db.findMany(User, {});

        var postsReverse = posts.reverse();

        res.render('Registered_Homepage', {
            posts: postsReverse,
            user: user,
            users: users,
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

        var posts = await db.findMany(Post, {username: username});

        var postsReverse = posts.reverse();

        res.render('profile', {
            username: username,
            user: await db.findOne(User, query),
            dp_images: dp_images,
            posts: postsReverse,
            allposts: await db.findMany(Post, {})
        });
    },

    upVote: async function(req, res) { 
        var query = req.query.title.slice(1);
        var username = req.session.username;
        var title = query.slice(0, -1); 
        var post = await db.findOne(Post, {title: title});
        var upvote = post.upvotes;
        var downvote = post.downvotes;
        var result = post.votes + 1;

        if (!post.downvotes.includes(username)) {
            upvote.push(username);
            db.updateOne(Post, {title: title}, {upvotes: upvote});
        }
        if (post.downvotes.includes(username)) {
            downvote.pop(username);
            db.updateOne(Post, {title: title}, {downvotes: downvote});
        }

        db.updateOne(Post, {title: title}, {votes: result});
    },

    downVote: async function(req, res) { 
        var query = req.query.title.slice(1);
        var username = req.session.username;
        var title = query.slice(0, -1); 
        var post = await db.findOne(Post, {title: title});
        var upvote = post.upvotes;
        var downvote = post.downvotes;
        var result = post.votes - 1;

        if (!post.upvotes.includes(username)) {
            downvote.push(username);
            db.updateOne(Post, {title: title}, {downvotes: downvote});
        }
        if (post.upvotes.includes(username)) {
            upvote.pop(username);
            db.updateOne(Post, {title: title}, {upvotes: upvote});
        }

        db.updateOne(Post, {title: title}, {votes: result});
    },

    getUser: async function(req, res) {
        var username = req.query.currUser;

        query = {username: username};

        var user = await db.findOne(User, query);

        res.json(user);
    },

    search: async function(req, res) {
        var value = req.query.value;
        var username = req.session.username;
        var post = await db.findOne(Post, {title: value});

        if (post === null)
            post = await db.findOne(Post, {content: value});
        
        var result = {
            username,
            post
        };

        res.json(result);
    }
}


module.exports = controller;

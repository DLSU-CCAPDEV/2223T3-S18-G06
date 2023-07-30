const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const deletePostController = {

    delete: async function (req, res) {
        var query = req.query.title;
        var username = req.query.username;

        db.deleteOne(Post, {title: query});

        res.redirect('/Registered_Homepage/' + username);
    }
}


module.exports = deletePostController;
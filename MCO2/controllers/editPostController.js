const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const editPostController = {

    edit: async function (req, res) {
        var query = req.body.currTitle;
        var title = req.body.title;
        var content = req.body.content;
        var username = req.body.username;

        db.updateOne(Post, {title: query}, {title: title, content: content});

        res.redirect('/Registered_Homepage/' + username);
    }
}
module.exports = editPostController;
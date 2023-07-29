const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const editPostController = {

    edit: async function (req, res) {
        var query = req.query.currTitle;
        var title = req.query.title;
        var content = req.query.createContent;
        var username = req.query.createUsername;

        console.log('Query: ', query);
        console.log('Title: ', title);
        console.log('Content: ', content);
        console.log('Username: ', username);

        db.updateOne(Post, {title: query}, {title: title, content: content});

        res.redirect('/Registered_Homepage/' + username);
    }
}


module.exports = editPostController;
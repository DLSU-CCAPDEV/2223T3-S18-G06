const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');

const deletePostController = {

    delete: async function (req, res) {
        var query = req.query.title.slice(1);
        var title = query.slice(0, -1);

        db.deleteOne(Post, {title: title});
    }
}


module.exports = deletePostController;
const db = require('../models/db.js');
const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');



const userProfileController = {

    profile: async function (req, res) {

        var iconfile = user.dp;
        
        var user = req.params.username; 
        var followers = '0';
        var posts = '0';
        var comments = '0';

    }

}

module.exports = userProfileController;
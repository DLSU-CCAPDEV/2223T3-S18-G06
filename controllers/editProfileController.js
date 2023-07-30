const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const Post = require('../models/PostModel.js');

const editProfileController = {
    postEdit: async function(req, res){
        var editProfileVal = req.body.setProfilePic;
        var username = req.body.editUsername;
        var bio = req.body.editContent;

        console.log('dp path: ', editProfileVal);

        var currUsername = req.params.username;

        var query = {username : currUsername};
        var dpPost = {};
        var update = {};

        if(editProfileVal){
            update.dp = editProfileVal;
            dpPost.filename = editProfileVal;
        }

        if(username){
            update.username = username;
            dpPost.username = username;
        }

        if(bio){
            update.bio = bio;
        }
        try{
            await db.updateMany(Post, query, dpPost);
            await db.updateOne(User, query, update); 
            res.redirect('/profile/' + (username || currUsername));
        } catch(err){
            console.error('Error updating: err');
            res.redirect('/profile/' + currUsername);
        }
    }
}

module.exports = editProfileController;
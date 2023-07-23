const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const editProfileController = {
    postEdit: async function(req, res){
        var editProfileVal = req.body.editProfile;
        var username = req.body.editUsername;
        var bio = req.body.editContent;

        var currUsername = req.params.username;

        var query = {username : currUsername}
        var update = {dp: editProfileVal};

        console.log('Profile Path: ', editProfileVal);

        try{
            await db.updateOne(User, query, update);
            res.redirect('/profile/' + currUsername);
        } catch(err){
            console.error('Error updating: err');
            res.redirect('/profile/' + currUsername);
        }
    }
}

module.exports = editProfileController;
const db = require('../models/db.js');

const editProfileController = {
    postEdit: function(req, res){
        const editProfileVal = req.body['edit-profile'];
        console.log('Profile Path: ', editProfileVal);
    }
}

module.exports = editProfileController;
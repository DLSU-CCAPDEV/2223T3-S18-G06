const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const registerController = {
    
    getRegister: function (req, res) {
        res.render('register');
    },

    postRegister: async function (req, res) {

        var username = req.body.username;
        var fname = req.body.fname;
        var lname = req.body.lname;
        var email = req.body.email;
        var pw = req.body.pw;

        var dp = '/default_icon.jpg';
        
        var user = {
            username: username,
            fname: fname,
            lname: lname,
            email: email,
            pw: pw,
            dp: dp
        };

        try{
            await db.insertOne(User, user);
        } catch(error){
            console.error('Error inserting document: ', error);
        }

        res.redirect('/login');
    }
}

module.exports = registerController;
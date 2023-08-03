const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const { validationResult } = require('express-validator');

// import module `bcrypt`
const bcrypt = require('bcrypt');
const saltRounds = 10;

const session = require('express-session');

const registerController = {
    
    getRegister: function (req, res) {
        if(req.session.username) {

            res.redirect('/Registered_Homepage/' + req.session.username);
        }

        else {
            res.render('register');
        }
    },

    postRegister: async function (req, res) {

        var errors = validationResult(req);

        if(!errors.isEmpty()){
            errors = errors.errors;

            var details = {};
            for(i = 0; i < errors.length; i++){
                details[errors[i].path + 'Error'] = errors[i].msg;
            }

            res.render('register', details);
        } else{
            var username = req.body.username;
            var fname = req.body.fname;
            var lname = req.body.lname;
            var email = req.body.email;
            var pw = req.body.pw;
            var dp = '/default_icon.jpg';
            
            bcrypt.hash(pw, saltRounds, function(err, hash) {
                var user = {
                    username: username,
                    fname: fname,
                    lname: lname,
                    email: email,
                    pw: hash,
                    dp: dp
                };

                try{
                    db.insertOne(User, user);
                } catch(error){
                    console.error('Error inserting document: ', error);
                }

                res.redirect('/login');
            });
        }
    }
}

module.exports = registerController;

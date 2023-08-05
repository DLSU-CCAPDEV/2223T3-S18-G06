const db = require('../models/db.js');

const User = require('../models/UserModel.js');

// import module `bcrypt`
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const loginController = {

    getLogin: async function(req, res) {
        if(req.session.username) {

            res.redirect('/Registered_Homepage/' + req.session.username);
        }
        else {
            res.render('login');
        }
    },

    postLogin: async function(req, res){
        var username = req.body.username;
        var pw = req.body.pw;

        try{
            const user = await db.findOne(User, {
                username: username
            });

            bcrypt.compare(pw, user.pw, function(err, equal) {
                if(!user || !equal)
                    res.render('login', {
                        err_message: 'Invalid username or password!',
                        username: username
                    });

                else {
                    req.session.username = user.username;
                    req.session.fname = user.fname;

                    const token = jwt.sign({username : user.username}, 'secret_key');
                    const maxAgeInMilliseconds = 60 * 60 * 1000; // 1 hour

                    res.cookie('token', token, {
                        maxAge: maxAgeInMilliseconds,
                        httpOnly: true,
                    });

                    res.redirect('/Registered_Homepage/' + user.username);
                }
            });

        } catch(error){
            console.error('Error Login: ', error);
            res.render('login', {
                error: 'Error Login',
                username: username
            })
        }
    }
}

module.exports = loginController;

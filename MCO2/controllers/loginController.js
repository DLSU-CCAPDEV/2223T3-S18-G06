const db = require('../models/db.js');

const User = require('../models/UserModel.js');

const loginController = {

    getLogin: function(req, res) {
        res.render('login');
    },

    postLogin: async function(req, res){
        var username = req.body.username;
        var pw = req.body.pw;

        try{
            const user = await db.findOne(User, {
                username: username
            });

            if(!user || user.pw !== pw){
                res.render('login', {
                    err_message: 'Invalid username or password',
                    username: username
                });
            } else {
                res.redirect('/Registered_Homepage/' + user.email);
            }
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
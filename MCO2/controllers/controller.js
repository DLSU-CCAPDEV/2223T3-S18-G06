const controller = {

    getRoot: function(req, res) {
        res.render('index');
    },

    getRegister: function(req, res) {
        res.render('register');
    },

    getLogin: function(req, res) {
        res.render('login');
    },

    checkAcct: function(req, res) {
        var email = req.body.email;
        var password = req.body.pw;

        // res.render(`profile`, {email: email});
        res.redirect('/main_user1/' + email);
    },

    getHomepage: function(req, res) {
        var email = req.params.email;

        res.redirect('homepage', {email: email});
    },

    getProfile: function(req, res) {
        var email = req.params.email;

        res.redirect('main_user1', {email: email});
    }

}

module.exports = controller;
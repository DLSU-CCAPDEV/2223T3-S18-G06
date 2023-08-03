const { check } = require('express-validator');

const validation = {
    registerValidation: function(){
        var validation = [
            check('fname', 'First Name should not be empty.').notEmpty(),
            check('lname', 'Last Name should not be empty.').notEmpty(), 
            check('username', 'Username should contain 2 to 30 characters').isLength({min: 2, max: 30}),
            check('pw', 'Passwords should contain at least 8 characters').isLength({min: 8}),
            check('email', 'Email should not be empty.').notEmpty()
        ];

        return validation;
    }
}

module.exports = validation;
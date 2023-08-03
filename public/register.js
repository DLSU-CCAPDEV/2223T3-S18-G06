$(document).ready(function(){
    function isFilled(){
        var username = validator.trim($('#username').val());
        var fname = validator.trim($('#fname').val());
        var lname = validator.trim($('#lname').val());
        var email = validator.trim($('#email').val());
        var pw = validator.trim($('#pw').val());

        var usernameEmpty = validator.isEmpty(username);
        var fnameEmpty = validator.isEmpty(fname);
        var lnameEmpty = validator.isEmpty(lname);
        var emailEmpty = validator.isEmpty(email);
        var pwEmpty = validator.isEmpty(pw);

        return !usernameEmpty && !fnameEmpty && !lnameEmpty && !emailEmpty && !pwEmpty;
    }

    function isValidUser(field){
        var validUser = false;

        var username = validator.trim($('#username').val());
        var isValidLength = validator.isLength(username, {min: 2, max: 30});
        var isAlphaNumeric = validator.isAlphanumeric(username, 'en-US', {ignore: '_'});
        var empty = validator.isEmpty(username);
        var isFirstAlpha = validator.isAlpha(username.charAt(0));

        if(isValidLength && isAlphaNumeric && isFirstAlpha){
            $.get('/getCheckUser', {username: username}, function(result){
                if(result.username != username){
                    if(field.is('#username')) {
                        $('#usernameError').text('');
                        $('#usernameError').css('display', 'none');
                    }

                    validUser = true;
                } else{
                    if(field.is($('#username'))){
                        $('#usernameError').text('Username already exists!');
                        $('#usernameError').css('display', 'block');
                    }
                }
            });

        } else{
            if(field.is($('#username')) && !empty){

                if(!isFirstAlpha){
                    $('#usernameError').text('Username should start with a letter.');
                    $('#usernameError').css('display', 'block');
                } else if(!(isAlphaNumeric)){
                    $('#usernameError').text('Username should be alpha numeric (e.g. contains letters and numbers). It may also contain underscores');
                    $('#usernameError').css('display', 'block');
                } else{
                    $('#usernameError').text('Username should contain atleast 3 characters');
                    $('#usernameError').css('display', 'block');
                } 
            }
                
        }

        return validUser;
    }

    function isValidPassword(field){
        var validPassword = false;

        var password = validator.trim($('#pw').val());
        var isValidLength = validator.isLength(password, {min: 8});
    }


    function validateField(field, fieldName, error){
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty){
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
            error.css('display', 'block');
        }

        else{
            error.text('');
            error.css('display', 'none');
        }

        var filled = isFilled();

        var validUser = isValidUser(field)
    }

    $('#fname').keyup(function(){
        validateField($('#fname'), 'First Name', $('#fNameError'));
    });

    $('#username').keyup(function(){
        validateField($('#username'), 'Username', $('#usernameError'));
    });
});
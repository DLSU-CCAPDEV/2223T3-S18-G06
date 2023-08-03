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

    function isValidUser(field, callback){

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

                    return callback(true);
                } else{
                    if(field.is($('#username'))){
                        $('#usernameError').text('Username already exists!');
                        $('#usernameError').css('display', 'block');
                    }

                    return callback(false);
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
                
            return callback(false);
        }
    }

    function isValidPassword(field){
        var validPass = false;

        var password = validator.trim($('#pw').val());
        var empty = validator.isEmpty(password);
        var strongPass = validator.isStrongPassword(password, {
            minLength: 8,
            minLowercase: 1, 
            minUppercase: 1, 
            minNumbers: 1,
            minSymbols: 0
        });

        console.log('IsStrong: ', strongPass);

        if(strongPass){
            if(field.is($('#pw'))){
                $('#passError').text('');
                $('#passError').css('display', 'none');
            }

            validPass = true;
        } else{
            if(field.is($('#pw')) && !empty){
                $('#passError').text('Passwords should contain at least 8 characters, one lowercase, one uppercase, and one number.');
                $('#passError').css('display', 'block');
            }
        }

        return validPass;
    }

    function isValidEmail(field){
        var validEmail = false;

        var email = validator.trim($('#email').val());
        var empty = validator.isEmpty(email);
        var isValid = validator.isEmail(email);

        if(isValid){
            if(field.is($('#email'))){
                $('#emailError').text('');
            }

            validEmail = true;
        } else{
            if(field.is($('#email')) && !empty){
                $('#emailError').text(`Please use a valid email.`);
                $('#emailError').css('display', 'block');
            }
        }

        return validEmail;
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

        var validPassword = isValidPassword(field);

        var validEmail = isValidEmail(field);

        isValidUser(field, function(validUser){
            if(filled && validUser && validEmail && validPassword){
                $('#register-btn').prop('disabled', false);
            } else{
                $('#register-btn').prop('disabled', true);
            }
        });
    }

    $('#fname').keyup(function(){
        validateField($('#fname'), 'First Name', $('#fNameError'));
    });

    $('#username').keyup(function(){
        validateField($('#username'), 'Username', $('#usernameError'));
    });

    $('#pw').keyup(function(){
        validateField($('#pw'), 'Password', $('#passError'));
    });

    $('#lname').keyup(function(){
        validateField($('#lname'), 'Last Name', $('#lNameError'));
    });

    $('#email').keyup(function(){
        validateField($('#email'), 'Email', $('#emailError'));
    });
});
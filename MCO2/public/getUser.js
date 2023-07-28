$(document).ready(function() {
    $('.post-username').click(function(event) {
        event.preventDefault();

        var currUser = $('#currentUser').text();
        var username = $(this).data('username');

        console.log('Current User here: ', currUser);
        console.log('Username: ', username);

        $.get('/View_Profile/' + username, { currUser: currUser }, function(result) {
            window.location.href = '/View_Profile/' + username + '?currUser=' + currUser;
        });
    });

    $('.post-title').click(function(event) {
        event.preventDefault();

        var username = $(this).data('username');
        var title = $(this).data('title');  
        var currUser = $('#currentUser').text();

        $.get('/View_Post/' + username + '/' + title, {currUser: currUser}, function(){
            window.location.href = '/View_Post/' + username + '/' + title + '?currUser=' + currUser;
        });
    });
});
$(document).ready(function() {
    $('.fa-angle-up').click(function() {
        var title = $(this).parent().siblings('.post-header').children('.post-title').text();
        var count = parseInt($(this).siblings('.vote-count').text());

        if ($(this).siblings('.fa-angle-down').css('color') == 'rgb(255, 210, 1)') {
            if ($(this).css('color') == 'rgb(255, 210, 1)') {
                $(this).siblings('.vote-count').text(count + 1); 
                $(this).css('color', 'green');
                $.get('/upVote', {title:title}, function() {});
            }
            else {
                $(this).siblings('.vote-count').text(count - 1); 
                $(this).css('color', '#ffd201');
                $.get('/downVote', {title:title}, function() {});
            }
        }
    });

    $('.fa-angle-down').click(function() {
        var title = $(this).parent().siblings('.post-header').children('.post-title').text();
        var count = parseInt($(this).siblings('.vote-count').text());

        if ($(this).siblings('.fa-angle-up').css('color') == 'rgb(255, 210, 1)') {
            if ($(this).css('color') == 'rgb(255, 210, 1)') {
                $(this).siblings('.vote-count').text(count - 1); 
                $(this).css('color', 'red');
                $.get('/downVote', {title:title}, function() {});
            }
            else {
                $(this).siblings('.vote-count').text(count + 1); 
                $(this).css('color', '#ffd201');
                $.get('/upVote', {title:title}, function() {});
            }
        }
    });
});




$(document).ready(function() {
    $('.fa-angle-up').click(function() {
        if ($(this).siblings('.fa-angle-down').css('color') == 'rgb(255, 210, 1)') {
            if ($(this).css('color') == 'rgb(255, 210, 1)') {
                var count = parseInt($(this).siblings('.vote-count').text());
                $(this).siblings('.vote-count').text(count + 1); 
                $(this).css('color', 'green');
            } else {
                var count = parseInt($(this).siblings('.vote-count').text());
                $(this).siblings('.vote-count').text(count - 1); 
                $(this).css('color', '#ffd201');
            }
        }
    });

    $('.fa-angle-down').click(function() {
        if ($(this).siblings('.fa-angle-up').css('color') == 'rgb(255, 210, 1)') {
            if ($(this).css('color') == 'rgb(255, 210, 1)') {
                var count = parseInt($(this).siblings('.vote-count').text());
                $(this).siblings('.vote-count').text(count - 1); 
                $(this).css('color', 'red');
            } else {
                var count = parseInt($(this).siblings('.vote-count').text());
                $(this).siblings('.vote-count').text(count + 1); 
                $(this).css('color', '#ffd201');
            }
        }
    });
});
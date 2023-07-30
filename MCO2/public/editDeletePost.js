$(document).ready(function() {
    $('.edit-delete-post').click(function(event) {
        event.preventDefault();

        const action = $(this).data('action');
        const title = $(this).data('title');
        const username = $(this).data('username');

        console.log('Title: ', title);

        if(action === 'delete'){
            $.get('/delete', {title: title, username: username})
                .done(function() {
                    console.log('Success!');
                    location.reload();
                })

                .fail(function(error) {
                    console.log('Error: ', error);
                });
        } else{
            //edit function
            console.log('Title: ', title);
            $('#edit-post').removeAttr('hidden');
            $('#titleVal').text(title);
            $('#edit-title').val(title);
            $('#edit-post-btn').attr('data-title', title);
        }
    });

    $('#cancel-btn').click(function(event) {
        $('#edit-post').attr('hidden', true);
    });

    $('#edit-post-btn').click(function(event) {
        event.preventDefault();

        var currTitle = $(this).data('title');
        var title = $('#edit-title').val();
        var content = $('#edit-content').val();
        var username = $('#currUser').val();

        $.get('/edit', {currTitle: currTitle, title: title, content: content, username: username}, function(result) {
            location.reload();
        });


    })
})
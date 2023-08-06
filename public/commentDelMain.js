$(document).ready(function() {
    $('.edit-delete-cmt').click(function(event) {
        event.preventDefault();

        const action = $(this).data('action');
        const comment_id = $(this).data('id');
        const username = $(this).data('username');
        const title = $(this).data('title');

        console.log('Username: ', username);
        console.log('Comment Id: ', comment_id);

        if(action === 'delete'){
            $.get('/deleteComment', {comment_id: comment_id, title: title})
                .done(function() {
                    console.log('Success!');
                    location.reload();
                })

                .fail(function(error) {
                    console.log('Error: ', error);
                });
        } else{
            //edit function
            console.log('Content: ', comment_id);

            console.log('Title: ', title);
            $('#comment-form').removeAttr('hidden');
            $('#currentCommentId').val(comment_id);
            $('#currentPostBodyTitle').val(title);
        }
    });

    // $('#cancel-btn').click(function(event) {
    //     $('#comment-form').attr('hidden', true);
    // });

    // $('#edit-post-btn').click(function(event) {
    //     event.preventDefault();

    //     console.log('Clicked edit');

    //     var currTitle = $(this).data('title');
    //     var title = $('#edit-title').val();
    //     var content = $('#edit-content').val();
    //     var username = $('#edit-currentUser').text();

    //     $.post('/edit', {currTitle: currTitle, title: title, content: content, username: username}, function(result) {
    //         console.log('Edit Success!');
    //         location.reload();
    //     });
    // })
})
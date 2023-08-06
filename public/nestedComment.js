$(document).ready(function() {
    $('.edit-delete-cmt').click(function(event) {
        event.preventDefault();

        const action = $(this).data('action');
        const mainComment_id = $('#getMainCommentId').val();
        const comment_id = $(this).data('id');
        const current_id = $('#currIdComment').val();
        const username = $(this).data('username');
        const titleId = $('#getTitleById').val();

        console.log('Username: ', username);
        console.log('Comment Id: ', comment_id);

        console.log('Current Id: ', current_id);

        if(action === 'deleteNestedComment'){
            $.get('/deleteNestedComment', {comment_id: comment_id, current_id: current_id})
                .done(function() {
                    console.log('Success!');
                    location.reload();
                })

                .fail(function(error) {
                    console.log('Error: ', error);
                });
        } else if(action === 'delete'){
            $.get('/deleteMainComment', {comment_id: mainComment_id, titleId: titleId})
                .done(function() {
                    console.log('Success!');
                    location.reload();
                })

                .fail(function(error) {
                    console.log('Error: ', error);
                });
        } else{
            console.log('Content: ', comment_id);

            $('#comment-form').removeAttr('hidden');
            $('#currentCommentId').val(mainComment_id);
        }
    });
})
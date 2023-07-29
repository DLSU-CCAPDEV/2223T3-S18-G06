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
            
        }
    })
})
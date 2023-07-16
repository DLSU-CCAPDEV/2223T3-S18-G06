function render(data){
    var html = "<div class = 'comment-post'><div class = 'post-header'><img  class = 'user-icon' src='default_icon.jpg' alt='user_icon' width='32' height='32'><a class = 'post-username' href = 'ProfileMain.html'>"+ data.name +"</a><p class = 'dot'> • </p><a class = 'post-title' > replying to the post </a></div><br> <br> <p class = 'post-content'>" +data.body+ "</p><br><div class = 'post-footer'><a title = 'comment'><i class='fa-solid fa-comment' style='color: #ffd201;'></i></a><span class = 'comment-count'> 0 </span><i class='fa-solid fa-angle-up' title = 'upvote' style='color: #ffd201; cursor: pointer;'></i><span class = 'vote-count'> 0 </span><i class='fa-solid fa-angle-down' title = 'downvote' style='color: #ffd201; margin-right: 50px; cursor: pointer;'></i></div></div>";
    $('#container').append(html);
}

$(document).ready(function(){

    var comment = [
        
    ];

    for(var i=0; i<comment.length; i++){
        render(comment[i]);
    }

    $('#addComment').click(function(){
        var addObj = {
            "name": $('#name').val(),
            "body": $('#bodyText').val()
        };
        console.log(addObj);
        comment.push(addObj);
        render(addObj);
        $('name').val('');
        $('#bodyText').val('');
    });

});



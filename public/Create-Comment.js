// ===========================================ATTEMPT 1============================================================ 

// function render(data) {
//     var html = "<div class='comment'><div class='post-header'><img class='user-icon' src='{{filename}}' alt='user_icon' width='32' height='32'><a class='post-username' href='/View_Profile/{{post.username}}' title='view profile'> {{post.username}} </a></div> <br> <br><p class='post-content'>"+data.body+"</p><br></div>";
//     $('#container').append(html);
// }

// $(document).ready(function(){

//     var comment = [
        
//     ];

//     for(var i=0; i<comment.length; i++){
//         render(comment[i]);
//     }

//     $('#addComment').click(function(){
//         var addObj = {
//             "body": $('#bodyText').val()
//         };
//         console.log(addObj);
//         comment.push(addObj);
//         render(addObj);
//         $('#bodyText').val('');
//     });

// });

// =============================================ATTEMPT 2============================================================ 
 

function addComment() {

    const create_comment = document.getElementById('create-comment');
    const createCommentValue = create_comment.value;

    if(createCommentValue === '') {
        alert('Please Fill Up All Text Areas');
    }
    else {
    const bodyElement = document.body;

    const comment = document.createElement("div");
    comment.className = "comment";

    const commentHeader = document.createElement("div");
    commentHeader.className = "post-header";

    const userIcon = document.createElement("img");
    userIcon.className = "user-icon";
    userIcon.src = "/default_icon.jpg";
    userIcon.alt = "user_icon";
    userIcon.width = 32;
    userIcon.height = 32;

    const postUserName = document.createElement("a");
    postUserName.className = "post-username";
    postUserName.title = "view profile";
    postUserName.textContent = "New";

    const postContent = document.createElement("p");
    postContent.className = "post-content";
    postContent.id = "post-content";
    postContent.textContent = createCommentValue;

    const postFooter = document.createElement("div");
    postFooter.className = "post-footer";

    const faSolidComment = document.createElement("a");
    const hrefCommentValue = "";
    faSolidComment.className ="fa-solid fa-comment";
    faSolidComment.setAttribute('href', hrefCommentValue);
    faSolidComment.style.color = "#ffd201;"

    const commentCount = document.createElement("span");
    commentCount.className = "comment-count";
    commentCount.textContent = "0";

    postHeader.appendChild(userIcon); 
    postHeader.appendChild(postUserName);    

    postFooter.appendChild(faSolidComment);
    postFooter.appendChild(commentCount);

    comment.appendChild(commentHeader);
    comment.appendChild(postContent);
    comment.appendChild(postFooter);

    bodyElement.appendChild(comment);

    clearText();
}
}

function createComment(){
    const create_content = document.getElementById('create-comment');
    const post_content = document.getElementById('post-content');

    post_content.innerText = create_content.value;
}

function clearText() {
      // Get all input elements with type "text"
      var inputs = document.querySelectorAll('input[type="text"]');

      // Loop through each input element and clear the value
      inputs.forEach(function(input) {
        input.value = '';
      });

      // Get the textarea element
      var textarea = document.getElementById('create-comment');

      // Clear the value of the textarea
      textarea.value = '';
}

function showComment() {
    var create_comment = document.getElementsByClassName('create-content')[0];
    var edit_post = document.getElementsByClassName('edit-post')[0];

    var isDisplayed = window.getComputedStyle(create_comment).display;

    if(isDisplayed === 'none'){
        create_post.style.display = 'block';
        edit_post.style.display = 'none';
    } else{
        create_post.style.display = 'none';
    }
}

function hidePost() {
    var create_post = document.getElementsByClassName('create-content');

    create_post[0].style.display = "none";
}



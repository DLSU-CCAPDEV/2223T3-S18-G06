function addComment() {
    const create_content = document.getElementById('create-content');
    const createCommentValue = create_content.value;

    const userIconSrc = create_content.getAttribute('data-user-icon');
    const currentUsername = create_content.getAttribute('data-username');

    if (createCommentValue === '') {
        alert('Please Fill Up The Text Area');
    } 
    else {
    const container = document.getElementById('container');
    const comment = document.createElement("div");
    comment.className = "comment";

    const commentHeader = document.createElement("div");
    commentHeader.className = "post-header";

    const userIcon = document.createElement("img");
        userIcon.className = "user-icon";
        userIcon.src = userIconSrc; // Set user icon source from data attribute
        userIcon.alt = "user_icon";
        userIcon.width = 32;
        userIcon.height = 32;

        const postUserName = document.createElement("a");
        postUserName.className = "post-username";
        postUserName.title = "view profile";
        postUserName.textContent = currentUsername; // Set username from data attribute
      

    const postContent = document.createElement("p");
    postContent.className = "comment-content";
    postContent.id = "comment-content";
    postContent.textContent = createCommentValue;

    // COMMENTS BUTTON FOR FOOTER

    const postFooter = document.createElement("div");
    postFooter.className = "post-footer";

    const faSolidComment = document.createElement("a");
    const hrefCommentValue = "";
    const titleCommentValue = "comment";
    faSolidComment.className ="fa-solid fa-comment";
    faSolidComment.setAttribute('href', hrefCommentValue);
    faSolidComment.style.color = "#ffd201";

    const commentCount = document.createElement("span");
    commentCount.className = "comment-count";
    commentCount.textContent = "0";

    // APPEND INTO COMMMENT

    commentHeader.appendChild(userIcon);
    commentHeader.appendChild(postUserName);

    postFooter.appendChild(faSolidComment);
    postFooter.appendChild(commentCount);

    comment.appendChild(commentHeader);
    comment.appendChild(postContent);
    comment.appendChild(postFooter);

    container.appendChild(comment);

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
    const create_content = document.getElementById('create-content');

    // Clear the value of the textarea
    create_content.value = '';
}

function showComment() {
    var create_comment = document.getElementsByClassName('create-content')[0];
    var edit_comment = document.getElementsByClassName('edit-post')[0];

    var isDisplayed = window.getComputedStyle(create_comment).display;

    if(isDisplayed === 'none'){
        create_comment.style.display = 'block';

        edit_comment.style.display = 'none';
    } else{
        create_comment.style.display = 'none';
    }

    
}

function hidePost() {
    var create_post = document.getElementsByClassName('create-content');

    create_post[0].style.display = "none";
}

document.getElementById('addComment').addEventListener('click', addComment);

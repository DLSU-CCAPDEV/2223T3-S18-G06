function addPost() {

    const createTitle = document.getElementById("create-title");
    const createTitleValue = createTitle.value;

    const create_content = document.getElementById('create-content');
    const createContentValue = create_content.value;

    const brElement = document.createElement('br');
    const bodyElement = document.body;

    const post = document.createElement("div");
    post.className = "post";

    const postHeader = document.createElement("div");
    postHeader.className = "post-header";

    const userIcon = document.createElement("img");
    userIcon.className = "user-icon";
    userIcon.src = "/user5_icon.jpg";
    userIcon.alt = "user_icon";
    userIcon.width = 32;
    userIcon.height = 32;

    const postUserName = document.createElement("a");
    postUserName.className = "post-username";
    postUserName.title = "view profile";
    postUserName.textContent = "New";

    const dot = document.createElement("p");
    dot.className = "dot";
    dot.textContent = "•";

    const postTitle = document.createElement("a");
    postTitle.className = "post-title";
    postTitle.id = "post-title";
    postTitle.title = "view post";
    postTitle.innerText = createTitle.value;

    const postContent = document.createElement("p");
    postContent.className = "post-content";
    postContent.id = "post-content";
    postContent.textContent = "INSERT CONTENT";

    const postFooter = document.createElement("div");
    postFooter.className = "post-footer";

    // const for href

    const faSolidComment = document.createElement("i");
    faSolidComment.className ="fa-solid fa-comment";
    faSolidComment.style.color = "#ffd201;"

    const commentCount = document.createElement("span");
    commentCount.className = "comment-count";
    commentCount.textContent = "0";

    const upVote = document.createElement("i");
    upVote.className = "fa-solid fa-angle-up";
    upVote.title = "upvote";
    upVote.style.color = "#ffd201";
    upVote.style.cursor = "pointer";

    const voteCount = document.createElement("span");
    voteCount.className = "vote-count";
    voteCount.textContent = "0";

    const downVote = document.createElement("i");
    downVote.className = "fa-solid fa-angle-down";
    downVote.title = "downvote";
    downVote.style.color = "#ffd201";
    downVote.style.marginRight = "50px";
    downVote.style.cursor = "pointer";

    postHeader.appendChild(userIcon); 
    postHeader.appendChild(postUserName);
    postHeader.appendChild(dot);
    postHeader.appendChild(postTitle);

    

    postFooter.appendChild(faSolidComment);
    postFooter.appendChild(commentCount);
    postFooter.appendChild(upVote);
    postFooter.appendChild(voteCount);
    postFooter.appendChild(downVote);

    post.appendChild(postHeader);
    post.appendChild(postContent);
    post.appendChild(brElement);
    post.appendChild(postFooter);
    bodyElement.appendChild(post);
    
}


function createPost(){
    const create_title = document.getElementById('create-title');
    const post_title = document.getElementById('post-title');

    const create_content = document.getElementById('create-content');
    const post_content = document.getElementById('post-content');

    post_title.innerText = create_title.value;
    post_content.innerText = create_content.value;
}

function editProfile(){
    const edit_username = document.getElementById('edit-username');
    const profile_username = document.getElementById('profile-username');

    const edit_content = document.getElementById('edit-content');
    const bio_content = document.getElementById('bio-content');

    profile_username.innerText = edit_username.value;
    bio_content.innerText = edit_content.value;
}

function changePhoto() {
    var image = document.getElementById("profilePicture");
    var image2 = document.getElementById("edit-profile").value;
    image.src =  image2;
  }

function clearText() {
      // Get all input elements with type "text"
      var inputs = document.querySelectorAll('input[type="text"]');

      // Loop through each input element and clear the value
      inputs.forEach(function(input) {
        input.value = '';
      });

      // Get the textarea element
      var textarea = document.getElementById('create-content');

      // Clear the value of the textarea
      textarea.value = '';
}

function showPost() {
    var create_post = document.getElementsByClassName('create-post');
    var edit_post = document.getElementsByClassName('edit-post');

    edit_post[0].style.display = "none";
    create_post[0].style.display = "block";

}

function hidePost() {
    var create_post = document.getElementsByClassName('create-post');

    create_post[0].style.display = "none";
}

function showEdit() {
    var edit_post = document.getElementsByClassName('edit-post');
    var create_post = document.getElementsByClassName('create-post');

    create_post[0].style.display = "none";
    edit_post[0].style.display = "block";
}

function hideEdit() {
    var edit_post = document.getElementsByClassName('edit-post');

    edit_post[0].style.display = "none";
}

function showPosted() {
    var post = document.getElementsByClassName('post');

    post[0].style.display = "block";
}

const postBtn = document.querySelector("create-post-btn");

postBtn.addEventListener("click", function(e) {
    e.preventDefault();

    var title = document.getElementById("title").value;

    console.log(title);

});

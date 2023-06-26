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

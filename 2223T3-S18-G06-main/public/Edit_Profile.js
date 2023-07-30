function chooseProfilePic(){
    var dp_container = document.getElementById('dp-container');
    dp_container.style.display = 'block';
}

function hideDp(){
    var dp_container = document.getElementById('dp-container');
    dp_container.style.display = 'none';
}

function setDp(img_path){
    console.log('setDp');
    var edit_profile = document.getElementById('editProfile');
    edit_profile.value = img_path;

    console.log('Path: ', edit_profile.value);
    hideDp();
}
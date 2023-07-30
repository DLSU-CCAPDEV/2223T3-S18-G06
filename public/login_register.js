
onClick: function register(){
    let username, email, pass, con_pass;

    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    pass=document.getElementById("pass").value;
    con_pass=document.getElementById("con_pass").value;

    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records.some((v)=>{
        return v.email==email
    })){
        alert("Duplicate Data");
    }
    else{
        user_records.push({
            "username":username,
            "email":email,
            "pass":pass,
            "con_pass":con_pass
        })
        localStorage.setItem("users", JSON.stringify(user_records));

        window.location = "login.html";
    }
}

function login(){
    let username, password;
    username=document.getElementById("username").value;
    password=document.getElementById("pass").value;

    let user_record=new Array();
    user_record=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_record.some((v)=>{
        return v.username==username && v.pass==password;
    })){
        let current_user=user_record.filter((v)=>{
            return v.username==username && v.pass==password;
        })[0]

        localStorage.setItem("username",current_user.username);
        localStorage.setItem("email", current_user.email);
        
        window.location.href="Registered_Homepage.html";
    } 
    else{
        login_err();
    }
}

function login_err(){
    var username = document.forms['form']['username'];
    var password = document.forms['form']['pass'];
    
    var error_login = document.getElementById('error_login');
    var login_box = document.getElementsByClassName('login-box');

    username.style.border = "1px solid red";
    password.style.border = "1px solid red";
    error_login.style.display = "block";
    login_box[0].style.height = "430px";
    username.focus();
}
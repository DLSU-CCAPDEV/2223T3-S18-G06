const express = require('express');

const controller = require('../controllers/controller.js');

const registerController = require('../controllers/registerController.js');

const loginController = require('../controllers/loginController.js');

const createPostController = require('../controllers/createPostController.js');

const viewPostController = require('../controllers/viewPostController.js')

const viewProfileController = require('../controllers/viewProfileController.js');

const editProfileController = require('../controllers/editProfileController.js');

const app = express();

app.get('/favicon.ico', controller.getFavicon);

app.get('/', controller.getRoot);
app.get('/register', registerController.getRegister);
app.post('/register', registerController.postRegister);
app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);

app.post('/checkAcct', controller.checkAcct);
app.get('/Registered_Homepage/:username', controller.getHomepage); 
app.get('/profile/:username', controller.getProfile); 
app.get('/logout', controller.getRoot);

//voting
app.get('/upVote', createPostController.upVote);
app.get('/downVote', createPostController.downVote);

//create post
app.post('/Registered_Homepage/:username', createPostController.post);
module.exports = app;

//post page
app.get('/View_Post/:title', viewPostController.viewPost);


//profil page
app.get('/View_Profile/:username', viewProfileController.viewProfile);

//edit profile
app.post('/editProfile', editProfileController.postEdit);
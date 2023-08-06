const express = require('express');

const controller = require('../controllers/controller.js');

const registerController = require('../controllers/registerController.js');

const loginController = require('../controllers/loginController.js');

const createPostController = require('../controllers/createPostController.js');

const viewPostController = require('../controllers/viewPostController.js')

const viewProfileController = require('../controllers/viewProfileController.js');

const editProfileController = require('../controllers/editProfileController.js');

const createCommentController = require('../controllers/createCommentController.js');

const deleteController = require('../controllers/deleteController.js');
const editController = require('../controllers/editController.js');
const viewCommentsController = require('../controllers/viewCommentsController.js');

const validation = require('../helpers/validation.js');
const { db } = require('../models/UserModel.js');

const app = express();

app.get('/favicon.ico', controller.getFavicon);

app.get('/', controller.getRoot);
app.get('/register', registerController.getRegister);
app.post('/register', validation.registerValidation(), registerController.postRegister);
app.get('/login', loginController.getLogin);
app.post('/login', loginController.postLogin);

app.get('/getCheckUser', controller.getCheckUser);
app.get('/Registered_Homepage/:username', controller.getHomepage); 
app.get('/profile/:username', controller.getProfile); 
app.get('/logout', controller.getLogOut);


//search
app.get('/search', controller.search);

//voting
app.get('/upVote', controller.upVote);
app.get('/downVote', controller.downVote);

//create post
app.post('/Registered_Homepage/:username', createPostController.post);
app.post('/profile/:username', createPostController.postMain);

//post page
app.get('/View_Post/:title', viewPostController.viewPost);

//create comment
app.post('/createComment', createCommentController.comment);

//create nested comments
app.post('/createNestedComment', createCommentController.nestedComment);

//comment page
app.get('/comments/:commentId', viewCommentsController.viewComments);

//profile page
app.get('/View_Profile/:username', viewProfileController.viewProfile);

//edit profile
app.post('/editProfile/:username', editProfileController.postEdit);

//delete post
app.get('/delete', deleteController.delete);

//delete comment
app.get('/deleteComment', deleteController.deleteComment);

//delete nested comment
app.get('/deleteNestedComment', deleteController.deleteNestedComment);

app.get('/deleteMainComment', deleteController.deleteMainComment);

app.post('/editMainComment', editController.editMainComment);

// edit post
app.post('/edit', editController.edit);

// edit comment
app.post('/editComment', editController.editComment);

module.exports = app;

const express = require('express');

const controller = require('../controllers/controller.js');

const registerController = require('../controllers/registerController.js');

const loginController = require('../controllers/loginController.js');

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
app.get('/upVote', controller.upVote);
app.get('/downVote', controller.downVote);

module.exports = app;

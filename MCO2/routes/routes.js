const express = require('express');

const controller = require('../controllers/controller.js');

const app = express();

app.get('/', controller.getRoot);
app.get('/register', controller.getRegister);
app.get('/login', controller.getLogin);

app.post('/checkAcct', controller.checkAcct);
app.get('/homepage/:email', controller.getHomepage);
app.get('/profile/:email', controller.getHomepage);
app.get('/logout', controller.getRoot);

module.exports = app;

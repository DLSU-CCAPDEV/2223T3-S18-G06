const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose'); 
const hbs = require('hbs');
const db = require('./models/db.js');   
const session = require('express-session'); 
const MongoStore = require('connect-mongodb-session')(session); 
const Comment = require('./models/CommentModel.js');

const app = express();

hbs.registerHelper('eq', function(arg1, arg2) {
    return (arg1 == arg2);
});
hbs.registerHelper('inArray', function(element, array) {
    if (array.includes(element))
        return true;
    else
        return false;
});
hbs.registerHelper('getNestedCommentCount', async function (parentid) {
    var comments = await db.findMany(Comment, {parentid: parentid});

    return 0;
});
hbs.registerHelper('usernamelink', function (username, current) {

    if (username == current) {
        return true;
    }
    else {
        return false;
    }
});

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + './views/partials');

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

const mongoStore = new MongoStore({
    uri: 'mongodb+srv://noahhbernardo:12174890@cluster0.b0vvoud.mongodb.net/hive',
    collectionName: 'sessions',
});

const maxAgeInMilliseconds = 60 * 60 * 1000; // 1 hour

app.use(
    session({
        secret: 'secret_key',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: maxAgeInMilliseconds,
        },
        store: mongoStore,
    })
);

app.use(`/`, routes);

db.connect();

//Use this for online database (submission)
/*
app.listen(port, function() {
    console.log('Server running at port: ' + port);
    console.log('Access website through: https://hive-f2w2.onrender.com');
});
*/


//Use this for local database (Testing and debugging)
app.listen(port, hostname, function() {
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});   

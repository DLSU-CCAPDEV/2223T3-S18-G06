const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose'); 
const hbs = require('hbs');
const db = require('./models/db.js');   
// const session = require('express-session'); 
// const MongoStore = require('connect-mongo'); 

const app = express();

hbs.registerHelper('eq', function(arg1, arg2) {
    return (arg1 == arg2);
});

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + './views/partials');

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

// app.use(session({
//     'secret': 'palatable-session',
//     'resave': false,
//     'saveUninitialized': false,
//     store: MongoStore.create({ mongoUrl: `mongodb+srv://palatable:QdMeiq5AY79vZke0@cluster0.vgvqiwt.mongodb.net/` }),
//     collection: 'sessions'
// }));

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

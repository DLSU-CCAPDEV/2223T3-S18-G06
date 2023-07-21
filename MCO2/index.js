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

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: false} ));

// app.use(session({
//     'secret': 'palatable-session',
//     'resave': false,
//     'saveUninitialized': false,
//     store: MongoStore.create({ mongoUrl: `mongodb+srv://palatable:QdMeiq5AY79vZke0@cluster0.vgvqiwt.mongodb.net/` }),
//     collection: 'sessions'
// }));

app.use(`/`, routes);

db.connect();

app.listen(port, hostname, function() {
    console.log('Server running at: ');
    console.log('http://' + hostname + ':' + port);
});

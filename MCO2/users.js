/*
    This script creates the database
    and inserts 8 user details in the collection `profiles`
*/

// import module from `./models/db.js`
const db = require('./models/db.js');

/*
    name of the collection (table)
    to perform CRUD (Create, Read, Update, Delete) operations
*/
const collection = 'profiles';

/*
    calls the function createDatabase()
    defined in the `database` object in `./models/db.js`
*/
db.createDatabase();

/*
    creates an object
    containing first name, last name, username, and bio of a user
*/
var user = {
    fName: 'Ned',
    lName: 'Stark',
    username: 'LordHandStark',
    bio: `You think my life is some precious thing to me?
    That I would trade my honour for a few more years of...of what?!
    You grew up with actors; you learned their craft and you learnt it well.
    But I grew up with soldiers. I learned how to die a long time ago.`
};

/*
    calls the function insertOne()
    defined in the `database` object in `./models/db.js`
    stores the object `user` in the collection (table) `profiles`
*/
db.insertOne(collection, user);



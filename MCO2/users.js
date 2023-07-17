const db = require('./models/db.js');

const collection = 'posts';

db.createDatabase();

var post = {
    filename: "/user5_icon.jpg", 
    username: "dave", 
    title: "Anyone up for a roadtrtip?",
    content: "Excited to announce that I've just become the proud owner of a brand new Toyota Wigo! The perfect combination of style, efficiency, and reliability. Ready to hit the road and create unforgettable memories. 🚗💨 #NewCarFeels #ToyotaWigo",
    comments: "3",
    votes: "55"
}

db.insertOne(collection, posts);

var post = {
    filename: "/user4_icon.jpg",
    username: "Busy_Beekeeper",
    title: "The Bee Transfer Chronicles",
    content: "Today, I stepped into the enchanting world of beekeeping by transferring a bee colony. With protective gear on and heart pounding, I witnessed the intricate choreography of bees, their fascinating communication, and the profound connection between beekeeper and colony. 🌺🐝 #BeekeepingAdventure",
    comments: "1",
    votes: "3"
}

db.insertOne(collection, posts);
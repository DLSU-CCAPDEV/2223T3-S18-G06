const mongoose = require('mongoose');

const db = require('./models/db.js'); // Require your Mongoose database configuration file
const Post = require('./models/PostModel.js'); // Require the Post model
const url = 'mongodb://127.0.0.1:27017/ccapdev-mongoose';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

async function insertOneDocument() {
  const document = {
    filename: 'user5_icon.jpg',
    username: 'dave',
    title: 'Anyone up for a roadtrip?',
    content: 'Excited to announce that I\'ve just become the proud owner of a brand new Toyota Wigo! The perfect combination of style, efficiency, and reliability. Ready to hit the road and create unforgettable memories. 🚗💨 #NewCarFeels #ToyotaWigo',
    commentcount: 3,
    upvoted: false,
    votes: 35,
    downvoted: false
  };

  try {
    const insertedDocument = await db.insertOne(Post, document);
    console.log('Document inserted:', insertedDocument);
  } catch (error) {
    console.error('Error inserting document:', error);
  }
}

insertOneDocument();
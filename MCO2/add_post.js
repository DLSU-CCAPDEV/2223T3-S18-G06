const db = require('./models/db.js'); // Require your Mongoose database configuration file
const Post = require('./models/PostModel.js'); // Require the Post model

async function insertOneDocument() {
  const document = {
    filename: 'user5_icon.jpg',
    username: 'dave',
    title: 'Anyone up for a raodtrip?',
    content: 'Excited to announce that I\'ve just become the proud owner of a brand new Toyota Wigo! The perfect combination of style, efficiency, and reliability. Ready to hit the road and create unforgettable memories. 🚗💨 #NewCarFeels #ToyotaWigo',
    commentcount: 3,
    upvote: 35,
    downvote: 0,
  };

  try {
    const insertedDocument = await db.insertOne(Post, document);
    console.log('Document inserted:', insertedDocument);
  } catch (error) {
    console.error('Error inserting document:', error);
  }
}

// Assuming you have set up your MongoDB connection and the db object contains the insertOne function

// Call the function to insert one document into the "posts" collection
insertOneDocument();
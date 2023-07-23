const mongoose = require('mongoose');

const db = require('./models/db.js'); // Require your Mongoose database configuration file
const Post = require('./models/PostModel.js'); // Require the Post model
const User = require('./models/UserModel.js');
const Comment = require('./models/CommentModel.js');
const url = 'mongodb://127.0.0.1:27017/ccapdev-mongoose';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

async function insertPosts() {
  try {
    const insertedPosts = await db.insertMany(Post, [
      {
        filename: '/user1_icon.jpg',
        username: 'drinkwater', 
        title: 'A daily reminder to drink water',
        content: 'Drinking water is a brilliant investment in your well-being, as it nourishes your body, fuels your mind, and replenishes your spirit, allowing you to flow through life with clarity, vitality, and utmost brilliance.',
        commentcount: 1,
        upvoted: 0,
        votes: 12456,
        downvoted: 0
      },

      {
        filename: '/user2_icon.jpg',
        username: 'PawsomePal', 
        title: 'Just dog things',
        content: 'Does anyone else talk to their dog like they\'re a human? Asking for a friend... 🙈😂 #DogConversations',
        commentcount: 1,
        upvoted: 0,
        votes: 654,
        downvoted: 0
      },

      {
        filename: '/user3_icon.jpg',
        username: 'TheCAGE', 
        title: 'Long live Nicolas Cage!',
        content: 'Can we take a moment to appreciate Nicolas Cage\'s versatility as an actor? From intense dramas to hilarious comedies, he can do it all!',
        commentcount: 1,
        upvoted: 0,
        votes: 32,
        downvoted: 0
      },

      {
        filename: '/user4_icon.jpg',
        username: 'Busy_Beekeeper', 
        title: 'The Bee Transfer Chronicles',
        content: 'Today, I stepped into the enchanting world of beekeeping by transferring a bee colony. With protective gear on and heart pounding, I witnessed the intricate choreography of bees, their fascinating communication, and the profound connection between beekeeper and colony. 🌺🐝 #BeekeepingAdventure',
        commentcount: 1,
        upvoted: 0,
        votes: 3,
        downvoted: 0
      },

      {
        filename: '/user5_icon.jpg',
        username: 'dave', 
        title: 'Anyone up for a roadtrip?',
        content: 'Excited to announce that I\'ve just become the proud owner of a brand new Toyota Wigo! The perfect combination of style, efficiency, and reliability. Ready to hit the road and create unforgettable memories. 🚗💨 #NewCarFeels #ToyotaWigo',
        commentcount: 1,
        upvoted: 0,
        votes: 35,
        downvoted: 0
      },
    ]);
    console.log('Posts inserted:', insertedPosts);
  } catch (error) {
    console.error('Error inserting posts:', error);
  }
}

async function insertUsers() {
  try {
    const insertedUsers = await db.insertMany(User, [
      {
        username: 'drinkwater',
        fname: 'drink',
        lname: 'water',
        email: 'drink_water@gmail.com',
        pw: 'water',
        dp: '/user1_icon.jpg',
      },

      {
        username: 'PawsomePal',
        fname: 'Pawsome',
        lname: 'Pal',
        email: 'Pawsome_Pal@gmail.com',
        pw: 'dog',
        dp: '/user2_icon.jpg',
      },

      {
        username: 'TheCAGE',
        fname: 'Nicolas',
        lname: 'Cage',
        email: 'Nicolas_Cage@gmail.com',
        pw: 'cage',
        dp: '/user3_icon.jpg',
      },

      {
        username: 'Busy_Beekeeper',
        fname: 'Busy',
        lname: 'Beekeeper',
        email: 'Busy_Beekeeper@gmail.com',
        pw: 'bee',
        dp: '/user4_icon.jpg',
      },

      {
        username: 'dave',
        fname: 'dave',
        lname: 'dave',
        email: 'dave@gmail.com',
        pw: 'dave',
        dp: '/user5_icon.jpg',
      },
    ]);
    console.log('Users inserted:', insertedUsers);
  } catch (error) {
    console.error('Error inserting users:', error);
  }
}

async function insertComment(){

  try {
    const insertedComments = await db.insertMany(Comment, [

      /*
        filename: '/user1_icon.jpg',
        username: 'drinkwater',

        filename: '/user2_icon.jpg',
        username: 'PawsomePal',

        filename: '/user3_icon.jpg',
        username: 'TheCAGE',

        filename: '/user4_icon.jpg',
        username: 'Busy_Beekeper',

        filename: '/user5_icon.jpg',
        username: 'dave',

      */

      {
        filename: '/user2_icon.jpg',
        username: 'PawsomePal', 
        title: 'A daily reminder to drink water',
        content: 'I agree!',
        commentcount: 0,
        upvoted: 0,
        votes: 1234,
        downvoted: 0
      },

      {
        filename: '/user3_icon.jpg',
        username: 'TheCAGE',
        title: 'Just dog things',
        content: 'Dogs are the best',
        commentcount: 0,
        upvoted: 0,
        votes: 500,
        downvoted: 0
      },

      {
        filename: '/user1_icon.jpg',
        username: 'drinkwater',
        title: 'Long live Nicolas Cage!',
        content: 'Loved his performance in Ghost Rider',
        commentcount: 0,
        upvoted: 0,
        votes: 21,
        downvoted: 0
      },

      {
        filename: '/user5_icon.jpg',
        username: 'dave',
        title: 'The Bee Transfer Chronicles',
        content: 'Congrats!',
        commentcount: 0,
        upvoted: 0,
        votes: 15,
        downvoted: 0
      },

      {
        filename: '/user4_icon.jpg',
        username: 'Busy_Beekeper',
        title: 'Anyone up for a roadtrip?',
        content: 'A bee sticker would make a nice accessory! Want one?',
        commentcount: 0,
        upvoted: 0,
        votes: 3,
        downvoted: 0
      },
    ]);
    console.log('Comments inserted:', insertedComments);
  } catch (error) {
    console.error('Error inserting Comments:', error);
  }

}

insertPosts();
insertUsers();

const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Comment = require('../models/CommentModel.js');
const Post = require('../models/PostModel.js');


const createCommentController = {
    comment: async function (req, res) {

        console.log('Comment button clicked');

        // Get username, title, and content from the request
        const { username, title } = req.params;
        const content = req.body.createComment;

        try {
            // Retrieve the current user's icon (filename)
            const currentUser = await db.findOne(User, { username: username });
            const userIcon = currentUser.dp;

            console.log('Current User:', currentUser);
            console.log('User Icon:', userIcon);

            // Create a new comment document with user icon
            const comment = new Comment({
                filename: userIcon,
                username: username,
                title: title,
                content: content
            });

            console.log('New Comment:', comment);

            // Save the comment to the database
            await comment.save();

            console.log('Comment saved:', comment);

            // Redirect to the post page
            res.redirect(`/View_Post/` + username + '/' + title);
        } catch (error) {
            console.error('Error inserting comment:', error);
        }
    }
};

module.exports = createCommentController;
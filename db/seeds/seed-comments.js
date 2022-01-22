const { Comment } = require('../../models');

const commentdata =
    [
        {
            "comment_text": "need a friend?",
            "user_id": 1,
            "post_id": 2
        },
        {
            "comment_text": "@Tom my platform is superior",
            "user_id": 2,
            "post_id": 2
        },
        {
            "comment_text": "wonderful content, keep it up",
            "user_id": 1,
            "post_id": 3
        },
        {
            "comment_text": "i love this so much",
            "user_id": 3,
            "post_id": 3
        },
        {
            "comment_text": "you both suck, try being a lizard",
            "user_id": 2,
            "post_id": 3
        }
    ];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
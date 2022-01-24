const { Comment } =  require('../../models');

const commentdata =
[
  {
    "comment": "need a friend?",
    "userId": 1,
    "postId": 2
  },
  {
    "comment": "@Tom my platform is superior",
    "userId": 2,
    "postId": 2
  },
  {
    "comment": "wonderful content, keep it up",
    "userId": 1,
    "postId": 3
  },
  {
    "comment": "i love this so much",
    "userId": 3,
    "postId": 3
  },
  {
    "comment": "you both suck, try being a lizard",
    "userId": 2,
    "postId": 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
const { Post } =  require('../../models');

const postdata =
[
  {
    "title": "I made Facebook",
    "content": "also lizards are cool",
    "userId": 2
  },
  {
    "title": "Travelling",
    "content": "I've literally travelled the world for several years now, thanks to Myspace being bought out a long ass time ago lol",
    "userId": 1
  },
  {
    "title": "Music, anyone?",
    "content": "I love listening to music",
    "userId": 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
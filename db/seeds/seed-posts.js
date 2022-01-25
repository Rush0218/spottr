const { Post } = require('../../models');

const postdata =
    [
        {
            "title": "I made Facebook",
            "body": "also lizards are cool",
            "post_url": "",
            "user_id": 2
        },
        {
            "title": "Travelling",
            "body": "I've literally travelled the world for several years now, thanks to Myspace being bought out a long ass time ago lol",
            "post_url": "",
            "user_id": 1
        },
        {
            "title": "Music, anyone?",
            "body": "I love listening to music",
            "post_url": "",
            "user_id": 3
        }
    ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
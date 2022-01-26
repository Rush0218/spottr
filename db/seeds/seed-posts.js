const { Post } = require('../../models');

const postdata =
    [
        {
            "title": "I made Facebook",
            "content": "also lizards are cool",
            "post_url": "",
            "user_id": 2,
            "workout_type": "Mobility/Flexibility"
        },
        {
            "title": "Travelling",
            "content": "I've literally travelled the world for several years now, thanks to Myspace being bought out a long ass time ago lol",
            "post_url": "",
            "user_id": 1,
            "workout_type": "Balance Training"
        },
        {
            "title": "Music, anyone?",
            "content": "I love listening to music",
            "post_url": "",
            "user_id": 3,
            "workout_type": "Strength Building"
        }
    ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
const { Vote } = require('../../models');

const votedata =
    [
        {
            "post_id": 2,
            "positive": true,
            "user_id": 2
        },
        {
            "post_id": 3,
            "positive": false,
            "user_id": 1
        },
        {
            "post_id": 1,
            "positive": true,
            "user_id": 3
        },
        {
            "post_id": 2,
            "positive": false,
            "user_id": 3
        },
        {
            "post_id": 3,
            "positive": true,
            "user_id": 2
        },
        {
            "post_id": 1,
            "positive": false,
            "user_id": 1
        }
    ];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
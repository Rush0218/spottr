const { User } = require('../../models');

const userdata =
    [
        {
            "username": "Tom Anderson",
            "password": "hunter42",
            "email": "tom@myspace.com"
        },
        {
            "username": "Mark Zuckerberg",
            "password": "hunter42",
            "email": "mark@facebook.com"
        },
        {
            "username": "Michael Birch",
            "password": "hunter42",
            "email": "mike@bebo.com"
        },
        {
            "username": "GameGuyBeardMan",
            "password": "testing8",
            "email": "email@email.com"
        }
    ];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;


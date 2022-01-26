const { User } = require('../../models');

const userdata =
[
  {
    username: "Tom Anderson",
    password: "hunter42",
    email: "tom@myspace.com"
  },
  {
    username: "Mark Zuckerberg",
    password: "hunter42",
    email: "mark@facebook.com"
  },
  {
    username: "Michael Birch",
    password: "hunter42",
    email: "mike@bebo.com"
  },
  {
    username: "Anna Kornicova",
    password: "hunter42",
    email: "anna@gmail.com",
  },
  {
    username: "Novac Djokovich",
    password: "hunter42",
    email: "novac@gmail.com",
  },
  {
    username: "Simone Biles",
    password: "hunter42",
    email: "gymnasticsgoat@gmail.com",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;


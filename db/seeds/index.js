const sequelize = require('../../config/connection');
const seedUsers = require('./seed-users');
const seedPosts = require('./seed-posts');
const seedComments = require('./seed-comments');
const seedVotes = require('./seed-votes');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        await seedUsers();
        await seedPosts();
        await seedComments();
        await seedVotes();
    } catch (err) {
        console.log('err', err);
    } finally {
        process.exit(0);
    }
};

seedAll();
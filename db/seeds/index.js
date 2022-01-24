const sequelize = require('../../config/connection');
const seedUsers = require('./seed-users');
const seedPosts = require('./seed-posts');
const seedComments = require('./seed-comments');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        await seedUsers();
        await seedPosts();
        await seedComments();    
    } catch (err) {
        console.log('err', err);
    } finally {
        process.exit(0);
    }
};

seedAll();
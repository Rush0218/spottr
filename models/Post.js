const { Model, DataTypes } = require('sequelize');
const User = require('./User');
const sequelize = require('../config/connection');

class Post extends Model {
    //will need to put upvote/downvote functionality
    async upvote(userId, postId) {
        
        const user = await User.findAll({where: {id = userId}}).then(user => user);
        this.upvotes++;

    }
    async downvote(userId, postId) {

        const user = await User.findAll({where: {id = userId}}).then(user => user);


    }
}

// create fields/columns for Post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        upvotes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        downvotes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post; 
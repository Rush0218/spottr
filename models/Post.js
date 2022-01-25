const { Model, DataTypes } = require('sequelize');
const User = require('./User');
const sequelize = require('../config/connection');
const { Vote } = require('.');

class Post extends Model {
    //will need to put upvote/downvote functionality
    async upvote(userId, postId) {
        const upvote = await Vote.create({
            user_id: userId,
            positive: true,
            post_id: postId
        });
        return upvote;
    }
    async downvote(userId, postId) {
        const downvote = await Vote.create({
            user_id: userId,
            positive: false,
            post_id: postId
        });
        return downvote;
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
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        postDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
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
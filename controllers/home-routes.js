const router = require('express').Router();
const path = require('path');
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/stylesheets/style.css', (req, res) => res.sendFile(path.join(__dirname, '../public/stylesheet/style.css')))


router.get('/', (req, res) => {
    console.log(req.session);
    Post.findAll({
        order: [['created_at', 'DESC']],
        include: [
            { model: Comment, include: { model: User } },
            { model: User }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // pass a single post object into the homepage template
            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Comment,
                include: { model: User },
                order: [['created_at', 'DESC']],
            },
            { model: User }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            // serialize the data
            const post = dbPostData.get({ plain: true });

            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;
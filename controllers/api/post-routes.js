const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Vote, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const { Log } = require('../../utils/Utilities');


// get all posts
router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'DESC']],
        include: [{ model: Comment, include: { model: User } }, { model: User }]
    })
        .then(dbPostData => {
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: { id: req.params.id },
        include: [{ model: User }]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Post.create({
        title: req.body.title,
        post_url: req.body.post_url,
        content: req.body.content,
        workout_type: req.body.workout_type,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/posts/upvote
/*
router.put('/upvote', (req, res) => {
    // make sure the session exists first
    console.log('req', req);
    const postId = req.body.post_id;
    const userId = 1;//req.session.user_id;
    if (req.session) {
        // pass session id along with all destructured properties on req.body
        Vote.findAll({ where: { user_id: userId, post_id: postId } })
            .then(results => {
                for (let i = 0; i < results.length; i++) {
                    const result = results[i];
                    Vote.destroy({ where: { id: result.id } });
                }
            });

        Post.upvote(userId, postId)
            .then(updatedVoteData => res.status(200).json(updatedVoteData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

    }
});

router.put('/downvote', withAuth, (req, res) => {
    // make sure the session exists first
    const postId = req.body.post_id;
    const userId = req.session.user_id;
    if (req.session) {
        // pass session id along with all destructured properties on req.body
        Post.downvote(userId, postId)
            .then(updatedVoteData => res.status(200).json(updatedVoteData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

    }
});
*/
router.put('/:id', withAuth, (req, res) => {
    Post.update(req.body, { where: { id: req.params.id } })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({ where: { id: req.params.id } })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router; 
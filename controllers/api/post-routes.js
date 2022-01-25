const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Vote, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


// get all users
router.get('/', (req, res) => {
    console.log('==================')
    Post.findAll({
        attributes: [
            'id',
            'title',
            'body',
            'post_url',
            'created_at',
        ],
        order: [['created_at', 'DESC']],
        include: [
            // include the Comment model here:
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = [];
            for (var i = 0; i < dbPostData.length; i++) {
                const post = dbPostData[i];
                const postVotes = Vote.findAll({
                    where: {
                        post_id: post.id
                    }
                })
                    .then(votes => {
                        const upvotes = votes.filter(vote => vote.positive)
                        const downvotes = votes.filter(vote => vote.positive)
                        return { upvotes: upvotes, downvotes: downvotes }
                    });
                posts.push(postVotes, posts)
            }
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'body',
            'post_url',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
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
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/posts/upvote
router.put('/upvote', withAuth, (req, res) => {
    // make sure the session exists first
    const postId = req.body.post_id;
    const userId = req.session.user_id;
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

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
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
    Post.destroy({
        where: {
            id: req.params.id
        }
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

module.exports = router; 
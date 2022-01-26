const { Post } = require('../../models');

const postdata =
    [
        {
            "title": "Morning Yoga",
            "content": "Here’s a great basic morning yoga flow I love from Yoga With Adriene! Perfect for beginners.",
            "post_url": "https://www.youtube.com/watch?v=LqXZ628YNj4",
            "user_id": 4,
            "workout_type": "Mobility/Flexibility"
        },

        {
            "title": "Acro Yoga Foundations Course Available Online",
            "content": "Acro Yoga International has started offering an online acro yoga foundations course – perfect for making progress with your practice at home while maintaining social distance",
            "post_url": "https://www.acroyoga.org/MCP-OFFER",
            "user_id": 5,
            "workout_type": "Mobility/Flexibility"
        },

        {
            "title": "6 Swim Workouts that Target Your Belly",
            "content": "Awesome minimal impact core workout",
            "post_url": "https://www.healthline.com/health/fitness-exercise/swim-workouts-target-your-belly",
            "user_id": 6,
            "workout_type": "Strength Building"
        },

        {
            "title": "Trail Running Tips for Beginners",
            "content": "I’ve been getting more into running but hate the treadmill. Tried these tips and had an awesome first trail run.",
            "post_url": "https://www.runnersworld.com/trail-running/a26659505/trail-running-tips/",
            "user_id": 5,
            "workout_type": "Endurance"
        },

        {
            "title": "5 Day Weightlifting Schedule to Improve Your Gains",
            "content": "Fantastic weekly routine to target different muscle groups every day and achieve better results",
            "post_url": "https://betterme.world/articles/best-5-day-workout/",
            "user_id": 4,
            "workout_type": "Strength Building"
        },

        {
            "title": "Find Local Weightlifting Events",
            "content": "Great resource from TeamUSA.org to find local weightlifting events by locality",
            "post_url": "https://www.teamusa.org/usa-weightlifting/events/local",
            "user_id": 6,
            "workout_type": "Strength Building"
        },
        {
            "title": "I made Facebook",
            "content": "also lizards are cool",
            "post_url": "",
            "user_id": 2,
            "workout_type": "Mobility/Flexibility"
        },

        {
            "title": "Travelling",
            "content": "I've literally travelled the world for several years now, thanks to Myspace being bought out a long ass time ago lol",
            "post_url": "",
            "user_id": 1,
            "workout_type": "Balance Training"
        },

        {
            "title": "Music, anyone?",
            "content": "I love listening to music",
            "post_url": "",
            "user_id": 3,
            "workout_type": "Strength Building"
        }
    ];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
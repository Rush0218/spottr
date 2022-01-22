const userID = document.querySelector('').value;


const downvote = async (userId) => {
    const postID = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch('./api/posts/downvote', {
        method: 'POST',
        headers: { 'Content Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, post_id: postId })
    });
    if (response.ok) {
        return response.json();
    } else {
        return false;
    }
}


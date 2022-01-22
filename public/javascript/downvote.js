const userID = document.querySelector('').value;
const postID = (elementString) => {
    document
}

const downvote = async (userId, postId) => {
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


async function upvote(event) {
    const post_id = event.target.dataset.postid;
    console.log(post_id);
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify(post_id),
        headers: { 'Content Type': 'application/json' },
    });
    console.log('if response.ok');
    if (response.ok) {
        document.querySelector(event.target).className = 'material-icons upvote-btn upvoted'
    } else {
        return false;
    }
}



document.addEventListener('DOMContentLoaded', event => {
    const upvoteButtons = document.querySelectorAll('.upvote-btn');
    console.log('upvoteButtons', upvoteButtons);
    for (let i = 0; i < upvoteButtons.length; i++) {
        const upvoteButton = upvoteButtons.item(i);
        console.log('upvoteButton', upvoteButton);
        upvoteButton.addEventListener('click', upvote);
    }
});
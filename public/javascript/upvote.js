async function upvote(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.target.dataset);
    if (event?.target?.dataset) {
        try {
            const postId = Number.parseInt(event.target.dataset.postid);
            console.log('postId', postId);
            if (postId) {
                const response = await fetch('/api/posts/upvote', {
                    method: 'PUT',
                    body: JSON.stringify(postId),
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(response => response.json())
                    .catch(err => console.log('err', err));

                console.log('response', response);

                if (response.ok) {
                    document.querySelector(event.target).className = 'material-icons upvote-btn upvoted'
                } else {
                    console.log(response.json().then(result => console.log(result)));
                }
            } else {
            }
        } catch (error) {
            console.log('error', error);
        }
    } else {
        console.log('no');

    }

    /*
        const postId = { post_id: 1 };
        console.log(postId);
        const response = await fetch('/api/posts/upvote', {
            method: 'PUT',
            body: JSON.stringify(postId),
            headers: { 'Content Type': 'application/json' },
        })
            .catch(err => console.log('err', err));
        console.log('response', response);
        if (response.ok) {
            document.querySelector(event.target).className = 'material-icons upvote-btn upvoted'
        } else {
            console.log(response.json().then(result => console.log(result)));
        }
    
    
        */
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
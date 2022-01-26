async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const post_url = document.querySelector('#post-url').value;
    const content = document.querySelector('#post-content').value;
    const workout_type = document.querySelector('#workout-type').value;
    console.log("workout_type", workout_type);
    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_url,
            content,
            workout_type
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        displayMessage('Post Failed', 'Try again in a few minutes');
    }
}

const displayMessage = (title, message) => {
    const modalTitle = document.querySelector('.modal-card-title');
    const modalText = document.querySelector('.modal-card-body');
    const modal = document.querySelector('.modal');
    //console.log('modalTitle', modalTitle);
    //console.log('modalText', modalText);
    //console.log('modal', modal);
    //console.log('title', title);
    //console.log('message', message);

    modalTitle.textContent = title;
    modalText.innerHTML = message;
    toggleModal();
}

const toggleModal = () => {
    const modal = document.querySelector('.modal');
    //console.log(modal);
    const modalClassList = [];
    modal.classList.forEach(element => modalClassList.push(element));
    if (modalClassList.indexOf("is-active") >= 0) {
        modalClassList.pop("is-active");
    } else {
        modalClassList.push("is-active");
    }
    modal.className = modalClassList.toString().replaceAll(',', ' ')
}

setTimeout(() => {
    document.querySelector('.modal-card-foot button').addEventListener('click', toggleModal);
    document.querySelector('#submitPost').addEventListener('click', newFormHandler);
}, 100);

async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value;
    const post_url = document.querySelector('#post-url').value;
    const content = document.querySelector('#post-content').value;
    const workoutType = document.querySelector('#workout-type').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            content,
            post_url
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        displayMessage('Post Edit Failed', response.statusText);
    }
}
const displayMessage = (title, message) => {
    const modalTitle = document.querySelector('.modal-card-title');
    const modalText = document.querySelector('.modal-card-body');
    modalTitle.textContent = title;
    modalText.innerHTML = message;
    toggleModal();
}

const toggleModal = () => {
    const modal = document.querySelector('.modal');
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
    document.querySelector('#save-post').addEventListener('click', editFormHandler);
}, 100);
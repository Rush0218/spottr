const displayMessage = (title, message) => {
    const modalTitle = document.querySelector('.modal-card-title');
    const modalText = document.querySelector('.modal-card-body');
    const modal = document.querySelector('.modal');
    console.log('modalTitle', modalTitle);
    console.log('modalText', modalText);
    console.log('modal', modal);
    console.log('title', title);
    console.log('message', message);

    modalTitle.textContent = title;
    modalText.innerHTML = message;
    toggleModal();
}

const toggleModal = () => {
    const modal = document.querySelector('.modal');
    console.log(modal);
    const modalClassList = [];
    modal.classList.forEach(element => modalClassList.push(element));
    if (modalClassList.indexOf("is-active") >= 0) {
        modalClassList.pop("is-active");
    } else {
        modalClassList.push("is-active");
    }
    modal.className = modalClassList.toString().replaceAll(',', ' ')
}

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });


        // check the response status
        if (response.ok) {
            console.log('successful');
            document.location.replace('/dashboard');
        } else {
            response.json()
                .then(result => {
                    //console.log('then(result=>', result)
                    displayMessage('Signup Failed', result.errors[0].type + ' on ' + result.errors[0].path);
                });
        }
    } else {
        displayMessage('Signup Failed', 'Please fill in all fields to sign up.');
    }
};

async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            console.log('successful');
            document.location.replace('/dashboard');
        } else {
            response.json()
                .then(result => {
                    console.log('then(result=>', result)
                    if (result.errors) {
                        displayMessage('Login Failed', result.errors[0].type + ' on ' + result.errors[0].path);
                    } else {
                        displayMessage('Login Failed', result.message);
                    }
                });

        }
    } else {
        displayMessage('Login Failed', 'Please fill in all fields to sign up.');
    }
};


setTimeout(() => {
    document.querySelector('.modal-card-foot button').addEventListener('click', toggleModal);
    document.querySelector('.login-form div button').addEventListener('click', loginFormHandler);
    document.querySelector('.signup-form div  button').addEventListener('click', signupFormHandler);
}, 100);

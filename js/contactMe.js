document.getElementById('email-input').value = localStorage.getItem('email')

const email_input = document.getElementById('email-input')
const message_input = document.getElementById('message-input')
const error_message = document.getElementById('error-message')
const success_message = document.getElementById('success-message')

const allInputs = [email_input, message_input]

form.addEventListener('submit', (e) => {
    error_message.innerText = null
    success_message.innerText = null
    e.preventDefault()
    let errors = []
    errors = getMessageFormErrors(email_input.value, message_input.value)

    if(errors.length > 0) {
        error_message.innerText = errors.join(". " + '\n')
    } 
    else {
        const formData = {
            email: email_input.value,
            message: message_input.value,
        };

        fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((data) => {
                success_message.innerText = "Success!";
                localStorage.setItem('email', email_input.value)
            })
            .catch((error) => {
                console.error("Error:", error);
                error_message.innerText = "Something went wrong!";
            });
    }

})

function getMessageFormErrors(email, message) {
    let errors = []

    if(email === '' || email == null) {
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    } else if (!email.includes('@') && !email.includes('.ru' || '.com' || '.org')) {
        errors.push('Email must contain "@"');
        email_input.parentElement.classList.add('incorrect');
    }

    if(message === '' || message == null) {
        errors.push('Message is required')
        message_input.parentElement.classList.add('incorrect')
        return errors
    }

    return errors
}

import {properties} from "./properties.js";

const form = document.getElementById('login-form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    fetch(properties.loginUrl, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,

        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                location.href = "/main";
            }
            return response.json();
        })
        .then(data => {
            if (typeof data.message !== "undefined") {
                alert(data.message)
            }
            document.cookie = "token = " + data.token;
        });
});

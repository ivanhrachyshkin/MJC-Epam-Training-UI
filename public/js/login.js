const form = document.getElementById('login-form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    fetch('http://192.168.43.65:8080/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => {
            if (response.ok) {
                location.href = "/main";
            }
            return response.json();
        })
        .then(data => {
           if(typeof data.message !== "undefined"){
               alert(data.message)
           }
        })
        .catch(error => {
            console.error('Error:', error.value)
        });
});

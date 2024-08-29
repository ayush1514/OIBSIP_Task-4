document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    
    const validUsername = 'user';
    const validPassword = 'pass';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to another page or perform some action
        window.location.href = 'welcome.html'; // Example redirection after successful login
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
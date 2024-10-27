$(document).ready(function() {
    $('#login-form').on('submit', function(e) {
        e.preventDefault(); 

        const email = $('#email').val();
        const password = $('#password').val();
        const errorDisplay = $('#error');

        if (!email || !password) {
            errorDisplay.text('Please fill in all fields.');
        } else if (password.length < 8) {
            errorDisplay.text('Password must be at least 8 characters.');
        } else {
            errorDisplay.text('');
            try {
                console.log('Login successful:');
                window.location.href = '/pages/homeReservasi/home.html'; 
            } catch (error) {
                console.error('Error during login:', error);
                errorDisplay.text('Login failed. Please try again.');
            }
        }
    });
});

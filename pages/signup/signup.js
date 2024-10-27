$(document).ready(function() {
    $('#signupForm').on('submit', function(e) {
        e.preventDefault(); 

        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const errorDisplay = $('#error');

        errorDisplay.text(''); 

        if (!username || !email || !password || !confirmPassword) {
            errorDisplay.text('Please fill in all fields.');
        } else if (password !== confirmPassword) {
            errorDisplay.text('Passwords do not match.');
        } else if (password.length < 8) {
            errorDisplay.text('Password must be at least 8 characters.');
        } else {
            console.log('Signup successful:');
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
        }
        $('#username').val('');
            $('#email').val('');
            $('#password').val('');
            $('#confirmPassword').val('');
    });
});

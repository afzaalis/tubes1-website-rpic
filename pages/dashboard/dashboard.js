$(document).ready(function() {
    $('.signup-button').on('click', function() {
        window.location.href = "../signup/signup.html"; 
    });

    $('.login-button').on('click', function() {
        window.location.href = "../login/login.html"; 
    });

    $('.pengantar, .intro').each(function(index, element) {
        setTimeout(function() {
            $(element).addClass('fade-in');
            $(element).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }, 200); 
    });
});

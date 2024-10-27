    document.addEventListener('DOMContentLoaded', () => {
        const welcomeMessage = document.getElementById('welcome-message');
        const reserveMessage = document.getElementById('reserve-message');

        setTimeout(() => {
            welcomeMessage.style.display = 'none';
            reserveMessage.style.display = 'block';
        }, 2000);

        setTimeout(() => {
            window.location.href = '../dashboard/dashboard.html';
        }, 4000);
    });

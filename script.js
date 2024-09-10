document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    // Click anywhere on the intro screen to enter the site
    introScreen.addEventListener('click', function() {
        introScreen.classList.add('fade-out');

        setTimeout(function() {
            introScreen.style.display = 'none';
            mainContent.classList.add('fade-in');
        }, 1000);
    });
});

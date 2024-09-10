document.addEventListener('DOMContentLoaded', function() {
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');

    console.log("Page loaded. Waiting for click on intro screen...");

    // Click anywhere on the intro screen to enter the site
    introScreen.addEventListener('click', function() {
        console.log("Intro screen clicked. Fading out...");

        introScreen.classList.add('fade-out');

        setTimeout(function() {
            introScreen.style.display = 'none';
            console.log("Intro screen hidden. Showing main content...");
            mainContent.classList.add('fade-in');
        }, 1000); // 1 second fade-out delay
    });
});

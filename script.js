// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active-section');
}

// Default to showing the "About Us" section on page load
document.addEventListener('DOMContentLoaded', function() {
    showSection('about-section');
});

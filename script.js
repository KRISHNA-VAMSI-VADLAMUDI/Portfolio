const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle the visibility of the navbar when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Hide the navbar when a link is clicked (on small screens)
const navLinksList = document.querySelectorAll('.nav-links li');
navLinksList.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('show');
        }
    });
});

// Show/hide the hamburger menu based on screen width
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        hamburger.style.display = 'block';
        navLinks.classList.remove('show');
    } else {
        hamburger.style.display = 'none';
        navLinks.classList.remove('show');
    }
});

// Initial check for screen width on page load
if (window.innerWidth <= 768) {
    hamburger.style.display = 'block';
}

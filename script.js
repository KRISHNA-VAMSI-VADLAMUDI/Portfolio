// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('navLinks');

// // Toggle the visibility of the navbar when the hamburger is clicked
// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });

// // Hide the navbar when a link is clicked (on small screens)
// const navLinksList = document.querySelectorAll('.nav-links li');
// navLinksList.forEach(link => {
//     link.addEventListener('click', () => {
//         if (window.innerWidth <= 768) {
//             navLinks.classList.remove('show');
//         }
//     });
// });

// // Show/hide the hamburger menu based on screen width
// window.addEventListener('resize', () => {
//     if (window.innerWidth <= 768) {
//         hamburger.style.display = 'block';
//         navLinks.classList.remove('show');
//     } else {
//         hamburger.style.display = 'none';
//         navLinks.classList.remove('show');
//     }
// });

// // Initial check for screen width on page load
// if (window.innerWidth <= 768) {
//     hamburger.style.display = 'block';
// }

// Navigation Toggler for Mobile
const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
const navLinks = document.querySelectorAll('.nav li a');

// Toggle navigation menu
navToggler.addEventListener('click', () => {
    aside.classList.toggle('open');
    navToggler.classList.toggle('active');
});

// Close menu when clicking on a link (for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 991) {
            aside.classList.remove('open');
            navToggler.classList.remove('active');
        }
    });
});

// Close menu when clicking outside (for mobile)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 991 && 
        !aside.contains(e.target) && 
        !navToggler.contains(e.target) &&
        aside.classList.contains('open')) {
        aside.classList.remove('open');
        navToggler.classList.remove('active');
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
        aside.classList.remove('open');
        navToggler.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Initialize active state on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        const activeLink = document.querySelector(`.nav li a[href="${window.location.hash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    } else {
        const homeLink = document.querySelector('.nav li a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
});

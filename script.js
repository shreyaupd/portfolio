const bars = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const moon = document.querySelector('#Moon');
const hlinks = document.querySelectorAll('#hlinks a'); // Select all links within #hlinks
const body = document.querySelector("body");

// Toggle the 'hidden' class on the menu and rotate the hamburger icon
bars.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    bars.classList.toggle('rotate-90'); // Rotate the hamburger icon 90 degrees
});

// Add click event listeners to each link in #hlinks
hlinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden'); // Hide the menu when a link is clicked
        bars.classList.toggle('rotate-90'); // Ensure the hamburger icon is reset to its original state
    });
});


// Toggle dark mode on the body
moon.addEventListener('click', () => {
    body.classList.toggle('dark');
});

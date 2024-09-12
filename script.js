const bars = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

// Toggle the 'hidden' class on the menu and rotate the hamburger icon
bars.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    bars.classList.toggle('rotate-90'); // Rotate the hamburger icon 90 degrees
});
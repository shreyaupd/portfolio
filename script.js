const bars=document.querySelector('#hamburger');
const menu=document.querySelector('#menu');
bars.addEventListener('click',()=>{
menu.classList.toggle("hidden");
})
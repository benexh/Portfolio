import { populateProjectPage } from "./projects.js";

populateProjectPage();

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

});


document.querySelector('.close__cta').addEventListener('click', () => {
    window.history.back();
})
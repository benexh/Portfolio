import { lerp } from "./utils.js";
import { createProjects, populateProjectPage } from "./projects.js"

// Cursor
 
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

});

// Projects

const projectsSticky = document.querySelector('.projects__sticky');
const projectSlider = document.querySelector('.projects__slider');
const main = document.querySelector('main')

createProjects(); 
populateProjectPage();

let projectTargetX = 0; 
let projectCurrentX = 0;

let percentages = {
    small: 700,
    medium: 300,
    large: 100
}

let limit = window.innerWidth <= 600 ? percentages.small : 
            window.innerWidth <= 1100 ? percentages.medium : 
            percentages.large

function setLimit(){
    limit = window.innerWidth <= 600 ? percentages.small : 
            window.innerWidth <= 1100 ? percentages.medium : 
            percentages.large
}

window.addEventListener('resize', setLimit);

function animateProjects(){
    let offsetTop = projectsSticky.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1);
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0, 0)`;
}

function animate(){
    animateProjects();
    requestAnimationFrame(animate);
}

animate();

//Text Reveal 

const textReveals = [...document.querySelectorAll('.text__reveal')];

let callback = (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            [...entry.target.querySelectorAll('span')].forEach((span, idx) => {
                setTimeout(() => {
                     span.style.transform = `translateY(0)`;
                }, (idx + 1) * 50)
            })
        }
    })
})

let options = {
    rootMargin: '0px',
    threshold: '1.0'
}

let observer = new IntersectionObserver(callback, options);

textReveals.forEach(text => {
    let string = text.innerText;
    let html = '';
    for(let i = 0; i < string.length; i++){
        if (string[i] === ' ') {
            html += `<span style="width: 0.25em; display: inline-block;">&nbsp;</span>`;
        } else {
            html += `<span>${string[i]}</span>`;
        }
    }
    text.innerHTML = html;
    observer.observe(text.parentElement);
})
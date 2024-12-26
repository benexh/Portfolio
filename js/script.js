import { createProjects } from "./projects.js";

createProjects();

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    
    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

});

/*const stickySections =  [...document.querySelectorAll('.sticky')];
let images = [
    './icons/imgs/Cover1.png',
    './icons/imgs/Cover2.png',    
    './icons/imgs/Cover3.png',    
    './icons/imgs/Cover1.png'    
]
 
images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src =  img;
        section.querySelector('.scroll-section').appendChild(image); 
    }); 
});

window.addEventListener('scroll', (e) => {
    for (let i = 0; i < stickySections.length; i++) {
        transform(stickySections[i])
    }
});

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = document.querySelector('.scroll-section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100; 
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage; 
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0  )`
};*/
const projects = [
    {
        name: 'PROJECT 1',
        date: '2023',
        pos: 'start',
        image: './icons/imgs/Cover1.png'
    },
    {
        name: 'PROJECT 2',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover2.png'
    },
    {
        name: 'PROJECT 3',
        date: '2024',
        pos: 'start',
        image: './icons/imgs/Cover3.png'
    },
    {
        name: 'PROJECT 4',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover1.png'
    },
    {
        name: 'PROJECT 1',
        date: '2023',
        pos: 'start',
        image: './icons/imgs/Cover1.png'
    },
    {
        name: 'PROJECT 2',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover2.png'
    },
    {
        name: 'PROJECT 3',
        date: '2024',
        pos: 'start',
        image: './icons/imgs/Cover3.png'
    },
    {
        name: 'PROJECT 4',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover1.png'
    }, 
]

const createProjects = () =>   {
     projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src =  project.image; 

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__detail'); 

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectDate = document.createElement('p');
        projectDate.innerText = project.date; 

        projectDetails.append(projectTitle, projectDate)

        imageContainer.appendChild(image); 
        panel.append(imageContainer, projectDetails);

        document.querySelector('.projects__slider ').appendChild(panel); 
         
     })
}

export {
    createProjects 
}
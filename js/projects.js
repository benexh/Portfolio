const projects = [
    {
        id: 'project-1',
        name: 'BASICS INTERFACE',
        date: '2023',
        pos: 'start',
        image: './icons/imgs/Cover1.png',
        type: 'INTERFACE',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover1.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-2',
        name: 'HEADLINES & DEADLINES',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover2.png',
        type: 'GRAPHIC',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover2.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-3',
        name: 'SCHRIFTGESTALTUNG',
        date: '2024',
        pos: 'start',
        image: './icons/imgs/Cover3.png',
        type: 'TYPE',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover3.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-4',
        name: 'PROJECT 4',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover1.png',
        type: 'INTERFACE',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover1.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-5',
        name: 'PROJECT 1',
        date: '2023',
        pos: 'start',
        image: './icons/imgs/Cover1.png',
        type: 'INTERFACE',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover1.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-6',
        name: 'PROJECT 2',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover2.png',
        type: 'GRAPHIC',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover2.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-7',
        name: 'PROJECT 3',
        date: '2024',
        pos: 'start',
        image: './icons/imgs/Cover3.png',
        type: 'TYPO',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover3.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    },
    {
        id: 'project-8',
        name: 'PROJECT 4',
        date: '2023',
        pos: 'end',
        image: './icons/imgs/Cover1.png',
        type: 'INTERFACE',
        projectDate: '10/23',
        additionalImage: './icons/imgs/Cover1.png',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maiores placeat voluptates perferendis quibusdam. Consequuntur quisquam, consequatur quae sunt alias suscipit totam adipisci vitae, nemo sapiente nesciunt voluptas aliquam assumenda?'
    }, 
]

const createProjects = () =>   {
     projects.forEach(project => {
        let link = document.createElement('a');
        link.href = `project.html?project=${project.id}`;

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

        link.appendChild(panel);

        document.querySelector('.projects__slider ').appendChild(link); 
         
     })
}

const populateProjectPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('project');

    const project = projects.find(p => p.id === id);

    if (project) {
        document.getElementById('project__title').innerText = project.name;
        document.getElementById('project__type').innerText = project.type;
        document.getElementById('project__date').innerText = project.projectDate;

        document.getElementById('project__description').innerText = project.description;

        let projectPageImageContainer = document.querySelector('.project__image__container');
        let projectPageImage = document.createElement('img');
        projectPageImage.src = project.image;
        projectPageImage.alt = project.name;
        projectPageImage.className = 'project__page__image';

        projectPageImageContainer.appendChild(projectPageImage);
    } else {
        console.error(`Project with ID ${id} could not be created`);
    }
};

export {
    createProjects,
    populateProjectPage
}
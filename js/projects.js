const projects = [
    {
        title: 'Projekt 1',
        date: '10/2023',
        image: './icons/imgs/Cover1.png'
    },
    {
        title: 'Projekt 2',
        date: '01/2024',
        image: './icons/imgs/Cover2.png'
    },
    {
        title: 'Projekt 3',
        date: '07/2024',
        image: './icons/imgs/Cover3.png'
    },
]

const createProjects = () => {
    projects.forEach(project => {
        let projectSection = document.createElement('div');
        projectSection.classList.add('project-section');

        let projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('project-image-container');

        let image = document.createElement('img');
        image.classList.add('.project-image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');

        let projectTitle = document.createElement('p');
        projectTitle = document.classList.add('project-title');

        let projectDate = document.createElement('p');
        projectDate.innerText = project.date;

        imageContainer.appendChild(image);
        projectDetails.append(projectTitle, projectDate);
        projectDiv.append(imageContainer, projectDetails);
        projectSection.appendChild(projectDiv);

        document.getElementById('projekte').appendChild(projectSection);
    })
}

export {
    createProjects
}
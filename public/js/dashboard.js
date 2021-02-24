// Wait for the DOM to completely load before we run our JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded! 🚀');

    const projectContainer = document.querySelector('.project-container');

    // Variable to hold our projects
    let projects;

    const getProjects = (employee) => {
        employeeId = employee || '';
        if (employeeId) {
            employeeId = `/?employee_id=${employeeId}`;
        }

        fetch(`/api/projects${employeeId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                projects = data;
                console.log('Success in getting projects:', data);
                if (!data || !data.length) {
                    displayEmpty(employee);
                } else {
                    initializeRows();
                }
            })
            .catch((error) => console.error('Error:', error));
    };

    // Get a blog post from a specific author
    const url = window.location.search;
    let employeeId;
    if (url.indexOf('?employee_id=') !== -1) {
        employeeId = url.split('=')[1];
        getProjects(employeeId);
    } else {
        getProjects();
    }

    // Front end call to DELETE a post
    const deleteProject = (id) => {
        fetch(`/api/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(getProjects());
    };

    // Create HTML rows for the blog container
    const initializeRows = () => {
        projectContainer.innerHTML = '';
        const projectsToAdd = [];

        projects.forEach((project) => projectsToAdd.push(createNewRow(project)));
        projectsToAdd.forEach((project) => projectContainer.append(project));
    };

    const createNewRow = (project) => {
        console.log('createNewRow -> project', project);

        const formattedDate = new Date(project.createdAt).toLocaleDateString();

        const newProjectCard = document.createElement('div');
        newProjectCard.classList.add('card');

        const newProjectCardHeading = document.createElement('div');
        newProjectCardHeading.classList.add('card-header');

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete', 'btn', 'btn-danger');
        deleteBtn.addEventListener('click', handleProjectDelete);

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'EDIT';
        editButton.classList.add('edit', 'btn', 'btn-info');
        editButton.addEventListener('click', handleProjectEdit);

        const newProjectTitle = document.createElement('h2');
        const newProjectDate = document.createElement('small');
        const newProjectEmployee = document.createElement('h5');

        newProjectEmployee.textContent = `Written by: ${post.Author.name}`;
        newProjectEmployee.style.float = 'right';
        newProjectEmployee.style.color = 'blue';
        newProjectEmployee.style.marginTop = '-10px';

        const newProjectCardBody = document.createElement('div');
        newProjectCardBody.classList.add('card-body');

        const newProjectBody = document.createElement('p');
        newProjectTitle.textContent = `${project.title} `;
        newProjectBody.textContent = project.body;
        newProjectDate.textContent = ` (${formattedDate})`;
        newProjectTitle.append(newProjectDate);
        newProjectCardHeading.append(deleteBtn);
        newProjectCardHeading.append(editButton);
        newProjectCardHeading.append(newProjectitle);
        newProjectCardHeading.append(newProjectEmployee);
        newProjectCardBody.append(newProjectBody);
        newProjectCard.append(newProjectCardHeading);
        newProjectCard.append(newProjectCardBody);
        newProjectCard.setAttribute('data-post', JSON.stringify(project));

        console.log('createNewRow -> newProjectCard', newProjectCard);
        return newProjectCard;
    };

    // Helper function to display something when there are no projects
    const displayEmpty = (id) => {
        const query = window.location.search;
        let partial = '';
        if (id) {
            partial = ` for Employee #${id}`;
        }

        projectContainer.innerHTML = '';
        const messageH2 = document.createElement('h2');
        messageH2.style.textAlign = 'center';
        messageH2.style.marginTop = '50px';
        messageH2.innerHTML = `No projects yet${partial}, navigate <a href='/project${query}'>here</a> in order to get started.`;
        projectContainer.append(messageH2);
    };

    // Handle when we click the delete post button
    const handleProjectDelete = (e) => {
        const currentProject = JSON.parse(
            e.target.parentElement.parentElement.dataset.project
        );

        deleteProject(currentProject.id);
    };

    // Handle when we click the edit post button
    const handleProjectEdit = (e) => {
        const currentProject = JSON.parse(
            e.target.parentElement.parentElement.dataset.project
        );

        window.location.href = `/project?project_id=${currentProject.id}`;
    };
});
